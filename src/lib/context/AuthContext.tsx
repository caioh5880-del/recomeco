"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { User, AuthChangeEvent, Session } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "../supabase/client";
import { isSupabaseConfigured } from "../supabase/config";
import { UserProfile } from "../types";

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  isConfigured: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, fullName: string, patronSaint?: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<{ error: string | null }>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updatePassword: (newPassword: string) => Promise<{ error: string | null }>;
  updateProfile: (data: { fullName?: string; patronSaint?: string }) => Promise<{ error: string | null }>;
  deleteAccount: () => Promise<{ error: string | null }>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const isConfigured = isSupabaseConfigured();
  const [isLoading, setIsLoading] = useState(() => isConfigured);

  const fetchProfile = useCallback(async (userId: string, userEmail: string) => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, full_name, patron_saint, created_at, updated_at")
        .eq("id", userId)
        .maybeSingle();

      if (error) {
        return;
      }

      if (data) {
        setProfile({
          id: data.id,
          email: data.email || userEmail,
          fullName: data.full_name || "Peregrino de Maria",
          patronSaint: data.patron_saint || undefined,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          isAnonymous: false
        });
      } else {
        const newProfile = {
          id: userId,
          email: userEmail,
          full_name: "Peregrino de Maria",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        await supabase.from("profiles").upsert(newProfile);
        setProfile({
          id: userId,
          email: userEmail,
          fullName: "Peregrino de Maria",
          createdAt: newProfile.created_at,
          updatedAt: newProfile.updated_at,
          isAnonymous: false
        });
      }
    } catch {
      return;
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) {
      await fetchProfile(user.id, user.email || "");
    }
  }, [user, fetchProfile]);

  useEffect(() => {
    if (!isConfigured) {
      return;
    }

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      queueMicrotask(() => {
        setIsLoading(false);
      });
      return;
    }

    let isMounted = true;

    async function initAuth() {
      try {
        const { data } = await supabase!.auth.getSession();
        if (isMounted) {
          const activeUser = data.session?.user ?? null;
          setUser(activeUser);
          if (activeUser) {
            await fetchProfile(activeUser.id, activeUser.email || "");
          }
        }
      } catch {
        if (isMounted) {
          setUser(null);
          setProfile(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    initAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event: AuthChangeEvent, session: Session | null) => {
      if (!isMounted) return;
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        await fetchProfile(currentUser.id, currentUser.email || "");
      } else {
        setProfile(null);
      }
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
    };
  }, [isConfigured, fetchProfile]);

  const signIn = async (email: string, password: string) => {
    if (!isConfigured) {
      return { error: "Configuração do Supabase pendente no ambiente." };
    }
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return { error: "Cliente Supabase indisponível." };
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password
      });
      if (error) {
        return { error: error.message };
      }
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Falha ao entrar na conta.";
      return { error: message };
    }
  };

  const signUp = async (email: string, password: string, fullName: string, patronSaint?: string) => {
    if (!isConfigured) {
      return { error: "Configuração do Supabase pendente no ambiente." };
    }
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return { error: "Cliente Supabase indisponível." };
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            patron_saint: patronSaint?.trim() || null
          }
        }
      });
      if (error) {
        return { error: error.message };
      }
      if (data.user) {
        await fetchProfile(data.user.id, data.user.email || email);
      }
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Falha ao criar conta.";
      return { error: message };
    }
  };

  const signOut = async () => {
    if (!isConfigured) {
      setUser(null);
      setProfile(null);
      return { error: null };
    }
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setUser(null);
      setProfile(null);
      return { error: null };
    }

    try {
      const { error } = await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
      if (error) {
        return { error: error.message };
      }
      return { error: null };
    } catch (err: unknown) {
      setUser(null);
      setProfile(null);
      const message = err instanceof Error ? err.message : "Falha ao sair.";
      return { error: message };
    }
  };

  const resetPassword = async (email: string) => {
    if (!isConfigured) {
      return { error: "Configuração do Supabase pendente no ambiente." };
    }
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return { error: "Cliente Supabase indisponível." };
    }

    try {
      const redirectUrl = typeof window !== "undefined" ? `${window.location.origin}` : undefined;
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: redirectUrl
      });
      if (error) {
        return { error: error.message };
      }
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Falha ao solicitar recuperação de senha.";
      return { error: message };
    }
  };

  const updatePassword = async (newPassword: string) => {
    if (!isConfigured) {
      return { error: "Configuração do Supabase pendente no ambiente." };
    }
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return { error: "Cliente Supabase indisponível." };
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      if (error) {
        return { error: error.message };
      }
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Falha ao atualizar senha.";
      return { error: message };
    }
  };

  const updateProfile = async (data: { fullName?: string; patronSaint?: string }) => {
    if (!user) {
      return { error: "Usuário não autenticado." };
    }
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return { error: "Cliente Supabase indisponível." };
    }

    try {
      const payload: Record<string, string | null> = {
        updated_at: new Date().toISOString()
      };
      if (data.fullName !== undefined) payload.full_name = data.fullName.trim();
      if (data.patronSaint !== undefined) payload.patron_saint = data.patronSaint.trim();

      const { error } = await supabase
        .from("profiles")
        .update(payload)
        .eq("id", user.id);

      if (error) {
        return { error: error.message };
      }

      await fetchProfile(user.id, user.email || "");
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Falha ao atualizar perfil.";
      return { error: message };
    }
  };

  const deleteAccount = async () => {
    if (!user) {
      return { error: "Usuário não autenticado." };
    }
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return { error: "Cliente Supabase indisponível." };
    }

    try {
      const { error: rpcError } = await supabase.rpc("delete_user_account");
      if (rpcError) {
        const { error: deleteProfileError } = await supabase
          .from("profiles")
          .delete()
          .eq("id", user.id);
        if (deleteProfileError) {
          return { error: deleteProfileError.message };
        }
      }

      await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Falha ao excluir conta.";
      return { error: message };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        isConfigured,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updatePassword,
        updateProfile,
        deleteAccount,
        refreshProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser utilizado dentro de um AuthProvider");
  }
  return context;
}
