"use client";

import React, { useState } from "react";
import { X, User, Heart, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";

interface EditProfileModalProps {
  onClose: () => void;
}

export function EditProfileModal({ onClose }: EditProfileModalProps) {
  const { profile, updateProfile } = useAuth();
  const [fullName, setFullName] = useState(profile?.fullName || "");
  const [patronSaint, setPatronSaint] = useState(profile?.patronSaint || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!fullName.trim()) {
      setErrorMessage("Por favor, digite seu nome de peregrino.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await updateProfile({
        fullName: fullName.trim(),
        patronSaint: patronSaint.trim() || undefined
      });

      if (res.error) {
        setErrorMessage(res.error);
      } else {
        setSuccessMessage("Perfil atualizado com sucesso!");
        setTimeout(() => {
          onClose();
        }, 1200);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0d1527] text-white rounded-3xl border border-[#d4af37]/40 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <h3 className="text-lg font-black tracking-wide text-white">
            Editar Perfil de Peregrino
          </h3>
          <p className="text-xs text-white/70 font-serif italic">
            Atualize seu nome de caminhada e devoção particular
          </p>
        </div>

        {errorMessage && (
          <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
            <p className="text-[12px]">{errorMessage}</p>
          </div>
        )}

        {successMessage && (
          <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            <p className="text-[12px]">{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-white/80 uppercase tracking-wider block">
              Nome ou Apelido
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

          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-white/80 uppercase tracking-wider block">
              Santo de Devoção / Título de Maria
            </label>
            <div className="relative flex items-center">
              <Heart className="absolute left-3.5 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={patronSaint}
                onChange={(e) => setPatronSaint(e.target.value)}
                placeholder="ex: Nossa Senhora de Fátima, São Bento"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14213d] border border-[#1e3a8a] text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#d4af37] transition-all"
              />
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-white/10 text-white hover:bg-white/15 transition-all cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-2.5 rounded-xl font-black text-xs uppercase bg-[#d4af37] text-[#0d1527] shadow hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0d1527]" />
                  <span>Salvando...</span>
                </>
              ) : (
                <span>Salvar Alterações</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
