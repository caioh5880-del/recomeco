"use client";

import React, { useState } from "react";
import { X, Crown, Check, Shield, CreditCard, Lock, Loader2, ExternalLink } from "lucide-react";
import { Button } from "../ui/Button";
import { STRIPE_CONFIG } from "@/lib/stripe/config";
import { useAuth } from "@/lib/context/AuthContext";
import { AuthMode } from "@/lib/types";

interface PlusModalProps {
  isSubscriber: boolean;
  onToggleSubscribe: () => void;
  onOpenAuth?: (mode?: AuthMode) => void;
  onClose: () => void;
}

export function PlusModal({
  isSubscriber,
  onToggleSubscribe,
  onOpenAuth,
  onClose
}: PlusModalProps) {
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual");
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null);

  const planInfo = selectedPlan === "annual" ? STRIPE_CONFIG.annual : STRIPE_CONFIG.monthly;

  const plusBenefits = [
    "📅 1. Calendário dos Santos + Biografia completa e exemplo de superação",
    "📊 2. Estatísticas + Oração personalizada + Santo que passou por isso e venceu",
    "📖 3. Liturgia + Homilia + Como praticar na sua vida diária",
    "🛡️ 4. Socorro na Tentação — Botão de socorro com versículos e oração imediata",
    "🙏 5. Novenas de Libertação de 9 dias para vencer vícios e dependências",
    "✝️ 6. Dúvidas e Explicações Sacramentais: o que é pecado e o que não é"
  ];

  const handleSubscribe = async () => {
    if (!user) {
      onClose();
      if (onOpenAuth) {
        onOpenAuth("register");
      }
      return;
    }

    setIsLoadingCheckout(true);
    setCheckoutMessage(null);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: selectedPlan,
          userId: user.id,
          userEmail: user.email
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao iniciar pagamento.");
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      if (data.simulated) {
        onToggleSubscribe();
        setCheckoutMessage("Assinatura Plus ativada com sucesso!");
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Erro inesperado ao processar.";
      setCheckoutMessage(errorMsg);
    } finally {
      setIsLoadingCheckout(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-gradient-to-b from-[#0d1527] to-[#14213d] text-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-2 border-[#d4af37]/60 max-h-[92vh] overflow-y-auto custom-scrollbar flex flex-col justify-between">
        <div className="pb-3 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-[#d4af37] to-[#facc15] text-[#0d1527]">
              <Crown className="w-5 h-5 fill-[#0d1527]" />
            </div>
            <div>
              <h3 className="font-black text-xl text-white tracking-wide">
                RECOMEÇO PLUS
              </h3>
              <span className="text-xs text-[#fef08a] font-medium">
                Aprofunde ainda mais sua vida espiritual
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-4 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedPlan("annual")}
              className={`p-2.5 rounded-xl transition-all cursor-pointer text-left relative ${
                selectedPlan === "annual"
                  ? "bg-white/15 border-2 border-[#d4af37] shadow"
                  : "bg-white/5 border border-white/10 opacity-70 hover:opacity-100"
              }`}
            >
              <span className="text-[9px] font-black uppercase text-[#d4af37] block">
                {STRIPE_CONFIG.annual.discountBadge} • Popular
              </span>
              <span className="text-xs font-bold block text-white">Anual</span>
              <span className="text-sm font-black text-white block mt-0.5">
                {STRIPE_CONFIG.annual.priceFormatted}
                <span className="text-[10px] text-white/60 font-normal">/ano</span>
              </span>
            </button>

            <button
              onClick={() => setSelectedPlan("monthly")}
              className={`p-2.5 rounded-xl transition-all cursor-pointer text-left ${
                selectedPlan === "monthly"
                  ? "bg-white/15 border-2 border-[#d4af37] shadow"
                  : "bg-white/5 border border-white/10 opacity-70 hover:opacity-100"
              }`}
            >
              <span className="text-[9px] font-bold uppercase text-white/60 block">
                Flexível
              </span>
              <span className="text-xs font-bold block text-white">Mensal</span>
              <span className="text-sm font-black text-white block mt-0.5">
                {STRIPE_CONFIG.monthly.priceFormatted}
                <span className="text-[10px] text-white/60 font-normal">/mês</span>
              </span>
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-[#d4af37]/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#facc15]" />
              <span className="text-white/80">Stripe Segura • Cartão e Pix</span>
            </div>
            <span className="text-[11px] text-[#fef08a] font-semibold">
              Cancele quando quiser
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider block">
              O que você recebe no Plus:
            </span>
            <ul className="space-y-2">
              {plusBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#facc15]" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {checkoutMessage && (
            <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-xs text-amber-200 text-center font-medium">
              {checkoutMessage}
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-white/10 space-y-2 shrink-0">
          <Button
            variant="gold"
            size="lg"
            onClick={isSubscriber ? onToggleSubscribe : handleSubscribe}
            disabled={isLoadingCheckout}
            className="w-full text-xs sm:text-sm font-black tracking-wide cursor-pointer"
          >
            {isLoadingCheckout ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processando...</span>
              </span>
            ) : isSubscriber ? (
              "Desativar Assinatura (Simulação)"
            ) : !user ? (
              `Criar conta e Assinar (${planInfo.priceFormatted})`
            ) : (
              <span className="flex items-center justify-center gap-1.5">
                <span>Assinar com Cartão ou Pix ({planInfo.priceFormatted})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            )}
          </Button>

          <p className="text-[11px] text-white/40 text-center">
            Sua contribuição apoia a manutenção do aplicativo e a missão de evangelização.
          </p>
        </div>
      </div>
    </div>
  );
}
