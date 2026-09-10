"use client";

import React, { useState } from "react";
import {
  Crown,
  Flame,
  HeartHandshake,
  ShieldCheck,
  Award,
  LogOut,
  Pencil,
  Trash2,
  Sparkles,
  Heart,
  Calendar
} from "lucide-react";
import { UserStats, AuthMode } from "@/lib/types";
import { useAuth } from "@/lib/context/AuthContext";
import { MarianRoseIcon, MarianLilyIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";
import { EditProfileModal } from "../auth/EditProfileModal";
import { DeleteAccountModal } from "../auth/DeleteAccountModal";

interface ProfileViewProps {
  stats: UserStats;
  onOpenPlus: () => void;
  onOpenRecovery: () => void;
  onOpenAuth: (mode?: AuthMode) => void;
}

export function ProfileView({
  stats,
  onOpenPlus,
  onOpenRecovery,
  onOpenAuth
}: ProfileViewProps) {
  const { user, profile, signOut } = useAuth();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } finally {
      setIsSigningOut(false);
    }
  };

  const formattedJoinDate = profile?.createdAt
    ? new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(
        new Date(profile.createdAt)
      )
    : null;

  return (
    <div className="space-y-6 pb-28 max-w-xl mx-auto px-4 pt-4">
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] to-[#1e3a8a] text-white p-6 shadow-xl border border-[#d4af37]/35 text-center relative overflow-hidden">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#1e3a8a] to-[#d4af37] p-1 mx-auto mb-3 shadow-lg">
          <div className="w-full h-full rounded-full bg-[#0d1527] flex items-center justify-center">
            <MarianLilyIcon className="w-10 h-10 text-[#fef08a]" />
          </div>
        </div>

        <h2 className="text-xl font-black text-white">
          {user ? (profile?.fullName || "Peregrino de Maria") : "Peregrino de Maria"}
        </h2>

        {user ? (
          <div className="space-y-1 mt-1">
            <p className="text-xs text-white/70 font-sans">{profile?.email}</p>
            {profile?.patronSaint && (
              <p className="text-xs text-[#fef08a] italic font-serif flex items-center justify-center gap-1.5 mt-1">
                <Heart className="w-3.5 h-3.5 text-[#facc15]" />
                <span>Devoção: {profile.patronSaint}</span>
              </p>
            )}
            {formattedJoinDate && (
              <p className="text-[10px] text-white/50 flex items-center justify-center gap-1 pt-1">
                <Calendar className="w-3 h-3" />
                <span>Na caminhada desde {formattedJoinDate}</span>
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-1 mt-1">
            <p className="text-xs text-[#fef08a] italic font-serif">
              &ldquo;Totus Tuus ego sum et omnia mea tua sunt&rdquo;
            </p>
            <p className="text-[11px] text-white/60">
              Modo Visitante — Navegação livre sem cadastro obrigatório
            </p>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
          {user ? (
            <button
              onClick={() => setIsEditOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5 text-[#fef08a]" />
              <span>Editar Perfil</span>
            </button>
          ) : (
            <button
              onClick={() => onOpenAuth("register")}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#d4af37] text-[#0d1527] shadow hover:brightness-110 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Criar Conta</span>
            </button>
          )}

          <button
            onClick={onOpenPlus}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#fef08a] hover:bg-[#d4af37]/30 transition-all cursor-pointer"
          >
            <Crown className="w-3.5 h-3.5 text-[#facc15]" />
            <span>
              {stats.isPlusSubscriber ? "Assinante Plus" : "Recomeço Plus (R$ 16,68)"}
            </span>
          </button>
        </div>
      </div>

      {!user && (
        <div className="rounded-2xl bg-gradient-to-r from-[#14213d] to-[#0d1527] border border-[#d4af37]/40 p-4 text-white shadow-md space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center shrink-0 text-[#fef08a]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1 flex-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Guarde sua caminhada espiritual
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Você pode rezar livremente como visitante. Se desejar acessar suas orações, vitórias e a Trilha Mariana no celular ou em outro aparelho, crie sua conta gratuita.
              </p>
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <button
              onClick={() => onOpenAuth("register")}
              className="flex-1 py-2 px-3 rounded-xl bg-[#d4af37] text-[#0d1527] font-black text-xs uppercase tracking-wider text-center hover:brightness-110 transition-all cursor-pointer"
            >
              Criar Minha Conta
            </button>
            <button
              onClick={() => onOpenAuth("login")}
              className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs text-center transition-all cursor-pointer"
            >
              Já tenho conta (Entrar)
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0d1527] px-1">
          Estatísticas Espirituais
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-[#e2d9c8] shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200 shrink-0">
              <Flame className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <span className="text-xl font-black text-[#0d1527] block leading-none">
                {stats.streakDays} dias
              </span>
              <span className="text-[11px] text-gray-500 font-medium">
                Perseverança diária
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-[#e2d9c8] shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black text-[#0d1527] block leading-none">
                {stats.completedPrayersCount}
              </span>
              <span className="text-[11px] text-gray-500 font-medium">
                Orações rezadas
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-[#e2d9c8] shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-200 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black text-[#0d1527] block leading-none">
                {stats.victoriesInBattle}
              </span>
              <span className="text-[11px] text-gray-500 font-medium">
                Vitórias espirituais
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-[#e2d9c8] shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1e3a8a] border border-blue-200 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black text-[#0d1527] block leading-none">
                {stats.completedTrailDays.length} / 7
              </span>
              <span className="text-[11px] text-gray-500 font-medium">
                Trilha com Maria
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-[#e2d9c8] p-5 shadow-sm space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0d1527]">
          Rotina e Lembretes de Oração
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-gray-100 text-xs">
            <span className="text-gray-700 font-medium">Oferecimento da Manhã</span>
            <span className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-semibold">
              07:00
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100 text-xs">
            <span className="text-gray-700 font-medium">Oração do Ângelus</span>
            <span className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-semibold">
              12:00
            </span>
          </div>
          <div className="flex items-center justify-between py-2 text-xs">
            <span className="text-gray-700 font-medium">Exame de Consciência da Noite</span>
            <span className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-semibold">
              22:00
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-[#faf7f0] border border-[#d4af37]/35 p-5 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-[#854d0e]">
          <MarianRoseIcon className="w-4 h-4 text-[#ca8a04]" />
          <h4 className="text-xs font-bold uppercase tracking-wider">
            Princípio Fundamental do RECOMEÇO
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic font-serif">
          &ldquo;Maria não toma o lugar de Jesus. Ela nos ensina a chegar até Ele.&rdquo;
        </p>
        <p className="text-xs text-gray-600 leading-relaxed">
          Aplicativo desenvolvido em fidelidade aos ensinamentos do Magistério da Igreja Católica Apostólica Romana, promovendo a adoração exclusiva a Deus e a veneração filial à Santíssima Virgem Maria.
        </p>
      </div>

      <div className="pt-2 space-y-2.5">
        <Button
          variant="outline"
          size="md"
          onClick={onOpenRecovery}
          className="w-full text-xs text-rose-700 border-rose-200 hover:bg-rose-50 cursor-pointer"
        >
          Preciso de alento ou orientação para Confissão
        </Button>

        {user && (
          <div className="pt-2 border-t border-gray-200 flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex-1 py-2.5 px-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-gray-500" />
              <span>{isSigningOut ? "Saindo..." : "Sair da Conta"}</span>
            </button>
            <button
              onClick={() => setIsDeleteOpen(true)}
              className="py-2.5 px-4 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Excluir Conta</span>
            </button>
          </div>
        )}
      </div>

      {isEditOpen && <EditProfileModal onClose={() => setIsEditOpen(false)} />}
      {isDeleteOpen && (
        <DeleteAccountModal
          onClose={() => setIsDeleteOpen(false)}
          onDeleted={() => setIsDeleteOpen(false)}
        />
      )}
    </div>
  );
}
