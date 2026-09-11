"use client";

import React, { useState } from "react";
import {
  X,
  Crown,
  Check,
  Shield,
  CreditCard,
  QrCode,
  Lock,
  Loader2,
  ExternalLink,
  Calendar,
  BarChart3,
  BookOpen,
  Sparkles,
  HelpCircle,
  CheckCircle2
} from "lucide-react";
import { STRIPE_CONFIG } from "@/lib/stripe/config";
import { useAuth } from "@/lib/context/AuthContext";
import { AuthMode } from "@/lib/types";

interface PlusModalProps {
  isSubscriber: boolean;
  onOpenAuth?: (mode?: AuthMode) => void;
  onClose: () => void;
}

export function PlusModal({
  isSubscriber,
  onOpenAuth,
  onClose
}: PlusModalProps) {
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual");
  const [loadingMethod, setLoadingMethod] = useState<"card" | "pix" | null>(null);
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null);

  const planInfo = selectedPlan === "annual" ? STRIPE_CONFIG.annual : STRIPE_CONFIG.monthly;

  const plusBenefits = [
    {
      icon: Calendar,
      title: "1. Calendário dos Santos + Biografia",
      desc: "Santo do dia, história completa e exemplo de vida."
    },
    {
      icon: BarChart3,
      title: "2. Estatísticas + Oração personalizada + Santo exemplo",
      desc: "Acompanhamento da sua caminhada com direção espiritual sob medida."
    },
    {
      icon: BookOpen,
      title: "3. Liturgia + Homilia + Como praticar",
      desc: "Leitura, Salmo e Evangelho do dia com reflexão prática para a sua vida."
    },
    {
      icon: Shield,
      title: "4. Socorro na Tentação — Botão de socorro",
      desc: "Oração imediata, versículos de força e Santo que também foi fraco e venceu."
    },
    {
      icon: Sparkles,
      title: "5. Novenas de Libertação",
      desc: "Novenas de 9 dias específicas pra vencer vícios, hábitos e dependências."
    },
    {
      icon: HelpCircle,
      title: "6. Dúvidas e Explicações Sacramentais",
      desc: "Respostas claras: o que é pecado e o que não é pra viver em paz."
    }
  ];

  const handleSubscribe = async (paymentMethod: "card" | "pix") => {
    if (!user) {
      onClose();
      if (onOpenAuth) {
        onOpenAuth("register");
      }
      return;
    }

    setLoadingMethod(paymentMethod);
    setCheckoutMessage(null);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: selectedPlan,
          paymentMethod,
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

      throw new Error("Não foi possível gerar a página segura de pagamento da Stripe.");
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Erro inesperado ao conectar à Stripe.";
      setCheckoutMessage(errorMsg);
    } finally {
      setLoadingMethod(null);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-b from-[#0d1527] to-[#14213d] text-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border-2 border-[#d4af37]/60 max-h-[92vh] overflow-y-auto flex flex-col justify-between"
      >
        <div className="pb-3 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-[#d4af37] to-[#facc15] text-[#0d1527] shadow">
              <Crown className="w-5 h-5 fill-[#0d1527]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-lg sm:text-xl text-white tracking-wide">
                  RECOMEÇO PLUS
                </h3>
                {isSubscriber && (
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Ativo
                  </span>
                )}
              </div>
              <span className="text-[11px] sm:text-xs text-[#fef08a] font-medium">
                Os 6 Pilares Exclusivos da sua Caminhada Espiritual
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-4 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setSelectedPlan("annual")}
              className={`p-3 rounded-2xl transition-all cursor-pointer text-left relative ${
                selectedPlan === "annual"
                  ? "bg-white/15 border-2 border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                  : "bg-white/5 border border-white/10 opacity-70 hover:opacity-100"
              }`}
            >
              <span className="text-[9px] font-black uppercase text-[#d4af37] block">
                {STRIPE_CONFIG.annual.discountBadge} • Mais Popular
              </span>
              <span className="text-xs font-bold block text-white mt-0.5">Plano Anual</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-base sm:text-lg font-black text-white">
                  {STRIPE_CONFIG.annual.priceFormatted}
                </span>
                <span className="text-[10px] text-white/60 font-normal">/ano</span>
              </div>
              <span className="text-[10px] text-emerald-300 font-semibold block mt-0.5">
                {STRIPE_CONFIG.annual.monthlyEquivalent}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPlan("monthly")}
              className={`p-3 rounded-2xl transition-all cursor-pointer text-left ${
                selectedPlan === "monthly"
                  ? "bg-white/15 border-2 border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                  : "bg-white/5 border border-white/10 opacity-70 hover:opacity-100"
              }`}
            >
              <span className="text-[9px] font-bold uppercase text-white/60 block">
                Sem Fidelidade
              </span>
              <span className="text-xs font-bold block text-white mt-0.5">Plano Mensal</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-base sm:text-lg font-black text-white">
                  {STRIPE_CONFIG.monthly.priceFormatted}
                </span>
                <span className="text-[10px] text-white/60 font-normal">/mês</span>
              </div>
              <span className="text-[10px] text-white/50 block mt-0.5">
                Cancele quando quiser
              </span>
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                Benefícios Exclusivos do Plus:
              </span>
              <span className="text-[10px] font-bold text-[#d4af37] bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                6 Pilares
              </span>
            </div>

            <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
              {plusBenefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-gray-200"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#facc15] mt-0.5">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[11px] sm:text-xs">
                        {benefit.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-gray-300 leading-snug mt-0.5">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-[#d4af37]/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#facc15] shrink-0" />
              <span className="text-white/80 text-[11px]">Stripe Segura • Liberação após confirmação</span>
            </div>
            <span className="text-[11px] text-[#fef08a] font-semibold shrink-0">
              {planInfo.priceFormatted}
            </span>
          </div>

          {checkoutMessage && (
            <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-xs text-amber-200 text-center font-medium">
              {checkoutMessage}
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-white/10 space-y-2.5 shrink-0">
          {isSubscriber ? (
            <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-1">
              <span className="text-xs font-bold text-emerald-300 block">
                Sua Assinatura Plus está Ativa!
              </span>
              <p className="text-[11px] text-emerald-100/70">
                Todos os 6 pilares exclusivos estão desbloqueados para o seu perfil.
              </p>
            </div>
          ) : !user ? (
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAuth?.("register");
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#facc15] text-[#0d1527] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer shadow-lg"
              >
                <span>Criar Conta para Assinar ({planInfo.priceFormatted})</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenAuth?.("login");
                  }}
                  className="text-[11px] text-white/70 hover:text-white underline cursor-pointer"
                >
                  Já tem uma conta? Entrar
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider block text-center">
                Escolha a forma de pagamento:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleSubscribe("card")}
                  disabled={loadingMethod !== null}
                  className="py-3 px-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#facc15] text-[#0d1527] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer shadow disabled:opacity-50"
                >
                  {loadingMethod === "card" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Conectando...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      <span>Pagar com Cartão</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleSubscribe("pix")}
                  disabled={loadingMethod !== null}
                  className="py-3 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer shadow border border-emerald-400/40 disabled:opacity-50"
                >
                  {loadingMethod === "pix" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Gerando Pix...</span>
                    </>
                  ) : (
                    <>
                      <QrCode className="w-4 h-4" />
                      <span>Pagar com Pix</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <p className="text-[10px] text-white/40 text-center">
            Segurança Stripe • Acesso ao Plus liberado somente após a confirmação do pagamento.
          </p>
        </div>
      </div>
    </div>
  );
}
