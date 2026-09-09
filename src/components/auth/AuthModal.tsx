"use client";

import React, { useState } from "react";
import {
  X,
  Mail,
  Lock,
  User,
  Heart,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";
import { AuthMode } from "@/lib/types";
import { MarianLilyIcon } from "../ui/MarianRoseIcon";

interface AuthModalProps {
  initialMode?: AuthMode;
  onClose: () => void;
  onSuccess?: () => void;
}

export function AuthModal({
  initialMode = "login",
  onClose,
  onSuccess
}: AuthModalProps) {
  const { signIn, signUp, resetPassword, isConfigured } = useAuth();
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [patronSaint, setPatronSaint] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!isConfigured) {
      setErrorMessage(
        "O Supabase ainda não foi configurado neste ambiente. Adicione NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY."
      );
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Por favor, informe um endereço de e-mail válido.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (mode === "login") {
        if (!password) {
          setErrorMessage("Por favor, digite sua senha.");
          setIsSubmitting(false);
          return;
        }

        const res = await signIn(email, password);
        if (res.error) {
          setErrorMessage(res.error);
        } else {
          onSuccess?.();
          onClose();
        }
      } else if (mode === "register") {
        if (!password || password.length < 6) {
          setErrorMessage("A senha deve conter no mínimo 6 caracteres.");
          setIsSubmitting(false);
          return;
        }
        if (!fullName.trim()) {
          setErrorMessage("Por favor, digite seu nome ou como prefere ser chamado.");
          setIsSubmitting(false);
          return;
        }

        const res = await signUp(email, password, fullName, patronSaint);
        if (res.error) {
          setErrorMessage(res.error);
        } else {
          setSuccessMessage(
            "Conta criada com sucesso! Se necessário, verifique sua caixa de entrada para confirmar o e-mail."
          );
          setTimeout(() => {
            onSuccess?.();
            onClose();
          }, 1500);
        }
      } else if (mode === "forgot_password") {
        const res = await resetPassword(email);
        if (res.error) {
          setErrorMessage(res.error);
        } else {
          setSuccessMessage(
            "Enviamos as instruções de recuperação para o seu e-mail. Verifique sua caixa de entrada."
          );
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0d1527] text-white rounded-3xl border border-[#d4af37]/40 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-10"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1e3a8a] to-[#d4af37]/40 mx-auto flex items-center justify-center border border-[#d4af37]/30 shadow-lg">
              <MarianLilyIcon className="w-8 h-8 text-[#fef08a]" />
            </div>
            <h3 className="text-xl font-black tracking-wide text-white">
              {mode === "login" && "Entrar na sua Conta"}
              {mode === "register" && "Criar Conta no RECOMEÇO"}
              {mode === "forgot_password" && "Recuperar Senha"}
            </h3>
            <p className="text-xs text-white/70 font-serif italic">
              {mode === "login" && "Guarde suas orações e perseverança em qualquer dispositivo"}
              {mode === "register" && "Inicie sua caminhada espiritual com a proteção da Mãe"}
              {mode === "forgot_password" && "Informe seu e-mail cadastrado para redefinir o acesso"}
            </p>
          </div>

          <div className="flex rounded-xl bg-[#14213d] p-1 border border-[#1e3a8a]">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                mode === "login"
                  ? "bg-[#d4af37] text-[#0d1527] shadow"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("register");
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                mode === "register"
                  ? "bg-[#d4af37] text-[#0d1527] shadow"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Criar Conta
            </button>
          </div>

          {!isConfigured && (
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Configuração de Banco de Dados</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-200/90">
                As variáveis de ambiente do Supabase ainda não foram configuradas. Você pode continuar rezando normalmente como visitante sem perder dados locais.
              </p>
            </div>
          )}

          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              <p className="text-[12px] leading-snug">{errorMessage}</p>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <p className="text-[12px] leading-snug">{successMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {mode === "register" && (
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-white/80 uppercase tracking-wider block">
                  Seu Nome ou Apelido
                </label>
                <div className="relative flex items-center">
                  <User className="absolute left-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="ex: Lucas de Maria"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14213d] border border-[#1e3a8a] text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-white/80 uppercase tracking-wider block">
                E-mail
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14213d] border border-[#1e3a8a] text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-all"
                />
              </div>
            </div>

            {mode !== "forgot_password" && (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-semibold text-white/80 uppercase tracking-wider">
                    Senha
                  </label>
                  {mode === "login" && (
                    <button
                      type="button"
                      onClick={() => {
                        setMode("forgot_password");
                        setErrorMessage(null);
                        setSuccessMessage(null);
                      }}
                      className="text-[10px] text-[#fef08a] hover:underline cursor-pointer"
                    >
                      Esqueceu a senha?
                    </button>
                  )}
                </div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo de 6 caracteres"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14213d] border border-[#1e3a8a] text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>
              </div>
            )}

            {mode === "register" && (
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-white/80 uppercase tracking-wider block">
                  Santo de Devoção / Título de Maria (Opcional)
                </label>
                <div className="relative flex items-center">
                  <Heart className="absolute left-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    value={patronSaint}
                    onChange={(e) => setPatronSaint(e.target.value)}
                    placeholder="ex: Nossa Senhora Aparecida, São José"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14213d] border border-[#1e3a8a] text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 rounded-xl font-black text-xs tracking-wider uppercase bg-gradient-to-r from-[#d4af37] to-[#b89327] text-[#0d1527] shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0d1527]" />
                  <span>Processando...</span>
                </>
              ) : (
                <>
                  <span>
                    {mode === "login" && "Entrar na Conta"}
                    {mode === "register" && "Consagrar e Criar Conta"}
                    {mode === "forgot_password" && "Enviar Instruções"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="pt-2 border-t border-white/10 text-center">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-white/60 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Continuar navegando como visitante</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
