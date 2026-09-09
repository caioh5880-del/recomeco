"use client";

import React, { useState } from "react";
import { X, AlertTriangle, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";

interface DeleteAccountModalProps {
  onClose: () => void;
  onDeleted: () => void;
}

export function DeleteAccountModal({ onClose, onDeleted }: DeleteAccountModalProps) {
  const { deleteAccount } = useAuth();
  const [confirmation, setConfirmation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDelete = async () => {
    if (confirmation.trim().toUpperCase() !== "EXCLUIR") {
      setErrorMessage("Por favor, digite EXCLUIR para confirmar.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await deleteAccount();
      if (res.error) {
        setErrorMessage(res.error);
      } else {
        onDeleted();
        onClose();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0d1527] text-white rounded-3xl border border-rose-500/40 shadow-2xl p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 mx-auto flex items-center justify-center text-rose-400">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-rose-300">
            Excluir Conta Definitivamente
          </h3>
          <p className="text-xs text-white/70 leading-relaxed">
            Esta ação apagará permanentemente seu cadastro, histórico de orações, dias de perseverança e registros espirituais.
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs">
            {errorMessage}
          </div>
        )}

        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-white/80 block">
            Digite <span className="text-rose-400 font-black">EXCLUIR</span> para confirmar:
          </label>
          <input
            type="text"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            placeholder="EXCLUIR"
            className="w-full px-4 py-2.5 rounded-xl bg-[#14213d] border border-rose-500/30 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-rose-400"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-white/10 text-white hover:bg-white/15 transition-all cursor-pointer"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isSubmitting || confirmation.trim().toUpperCase() !== "EXCLUIR"}
            className="flex-1 py-2.5 rounded-xl font-black text-xs uppercase bg-rose-600 hover:bg-rose-700 text-white shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Excluindo...</span>
              </>
            ) : (
              <span>Confirmar Exclusão</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
