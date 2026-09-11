"use client";

import React, { useState } from "react";
import {
  Crown,
  Check,
  Sparkles,
  Shield,
  CreditCard,
  Lock,
  ChevronDown,
  ChevronUp,
  Calendar,
  BookOpen,
  BarChart3,
  HelpCircle,
  Loader2,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { UserStats, TabType, AuthMode } from "@/lib/types";
import { useAuth } from "@/lib/context/AuthContext";
import { PLUS_BENEFITS, PLUS_FAQS } from "@/lib/data/plusFeatures";
import { STRIPE_CONFIG } from "@/lib/stripe/config";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

interface PlusViewProps {
  stats: UserStats;
  onNavigateToTab: (tab: TabType) => void;
  onOpenAuth: (mode?: AuthMode) => void;
  onActivatePlus: (active?: boolean) => void;
}

export function PlusView({
  stats,
  onNavigateToTab,
  onOpenAuth,
  onActivatePlus
}: PlusViewProps) {
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null);

  const planInfo = selectedPlan === "annual" ? STRIPE_CONFIG.annual : STRIPE_CONFIG.monthly;

  const handleSubscribe = async () => {
    if (!user) {
      onOpenAuth("register");
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
        onActivatePlus(true);
        setCheckoutMessage("Assinatura Plus ativada com sucesso!");
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Erro inesperado ao processar.";
      setCheckoutMessage(errorMsg);
    } finally {
      setIsLoadingCheckout(false);
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar className="w-5 h-5 text-[#facc15]" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-[#facc15]" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-[#facc15]" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-[#facc15]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#facc15]" />;
      case "HelpCircle":
        return <HelpCircle className="w-5 h-5 text-[#facc15]" />;
      case "Crown":
        return <Crown className="w-5 h-5 text-[#facc15]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#facc15]" />;
    }
  };

  return (
    <div className="space-y-6 pb-28 max-w-xl mx-auto px-4 pt-4">
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] via-[#142347] to-[#1e3a8a] text-white p-6 sm:p-7 shadow-2xl border-2 border-[#d4af37]/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-[#d4af37]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-40 h-40 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d4af37] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <Crown className="w-4 h-4 fill-[#facc15] text-[#facc15]" />
              <span>Plano Recomeço Plus</span>
            </div>

            {stats.isPlusSubscriber && (
              <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 px-2.5 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Ativo</span>
              </span>
            )}
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Os 6 Pilares Exclusivos do Recomeço Plus
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mt-2">
              O plano gratuito continua com o essencial. O Plus desbloqueia: Calendário dos Santos com Biografia, Estatísticas com Oração Personalizada e Santo Exemplo, Liturgia com Homilia e Como Praticar, Botão de Socorro na Tentação, Novenas de Libertação de 9 dias e Explicações Sacramentais.
            </p>
          </div>

          <div className="pt-2 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs text-white/75">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#fef08a]" />
              <span>Sem anúncios • 100% Católico</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#fef08a] font-semibold">
              <CreditCard className="w-4 h-4" />
              <span>Cartão de Crédito e Pix via Stripe</span>
            </span>
          </div>
        </div>
      </div>

      {stats.isPlusSubscriber ? (
        <div className="bg-gradient-to-r from-emerald-900/30 to-[#0d1527] border-2 border-emerald-500/40 rounded-3xl p-6 text-center space-y-3 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40">
            <Crown className="w-6 h-6 fill-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Você já é um Peregrino Plus!
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Todos os 6 pilares exclusivos do Recomeço Plus estão liberados para o seu perfil.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
            <Button
              variant="gold"
              size="md"
              onClick={() => onNavigateToTab("recomeco")}
              className="font-bold text-xs"
            >
              Acessar Recursos Exclusivos
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => onActivatePlus(false)}
              className="text-xs text-rose-300 border-rose-500/30 hover:bg-rose-500/10"
            >
              Desativar Modo Plus (Simulação)
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded-2xl border border-[#e2d9c8] shadow-sm">
            <button
              onClick={() => setSelectedPlan("annual")}
              className={`p-3 rounded-xl transition-all cursor-pointer relative text-left ${
                selectedPlan === "annual"
                  ? "bg-[#0d1527] text-white shadow-md border border-[#d4af37]/50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="absolute -top-2.5 right-2 text-[9px] font-black uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#facc15] text-[#0d1527] px-2 py-0.5 rounded-full shadow">
                {STRIPE_CONFIG.annual.discountBadge} • Popular
              </span>
              <span className="text-xs font-bold block">Plano Anual</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-black">{STRIPE_CONFIG.annual.priceFormatted}</span>
                <span className="text-[10px] opacity-70">/ano</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-medium block mt-0.5">
                Apenas {STRIPE_CONFIG.annual.monthlyEquivalent}
              </span>
            </button>

            <button
              onClick={() => setSelectedPlan("monthly")}
              className={`p-3 rounded-xl transition-all cursor-pointer text-left ${
                selectedPlan === "monthly"
                  ? "bg-[#0d1527] text-white shadow-md border border-[#d4af37]/50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-xs font-bold block">Plano Mensal</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-black">{STRIPE_CONFIG.monthly.priceFormatted}</span>
                <span className="text-[10px] opacity-70">/mês</span>
              </div>
              <span className="text-[10px] opacity-70 block mt-0.5">
                Cancele quando quiser
              </span>
            </button>
          </div>

          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#e2d9c8] shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">
                  Plano selecionado
                </span>
                <h3 className="text-lg font-black text-[#0d1527]">
                  {planInfo.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-[#1e3a8a]">
                  {planInfo.priceFormatted}
                </span>
                <span className="text-xs text-gray-500 block">
                  /{planInfo.interval}
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#faf8f5] rounded-2xl border border-[#d4af37]/30 flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#854d0e] shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                Pagamento processado com segurança bancária pela <strong>Stripe</strong>. Suporte imediato a <strong>Cartão de Crédito</strong> e <strong>Pix</strong>.
              </p>
            </div>

            {checkoutMessage && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium flex items-center justify-between">
                <span>{checkoutMessage}</span>
                <button
                  onClick={() => setCheckoutMessage(null)}
                  className="text-amber-700 underline text-[11px] cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            )}

            <Button
              variant="gold"
              size="lg"
              onClick={handleSubscribe}
              disabled={isLoadingCheckout}
              className="w-full text-sm font-black tracking-wide cursor-pointer shadow-lg shadow-[#d4af37]/20"
            >
              {isLoadingCheckout ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Conectando à Stripe segura...</span>
                </span>
              ) : !user ? (
                <span>Criar conta e Assinar ({planInfo.priceFormatted})</span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Assinar Agora com Cartão ou Pix</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              )}
            </Button>

            {!user && (
              <p className="text-[11px] text-gray-500 text-center">
                Você será direcionado para criar sua conta gratuita antes do checkout para garantir a posse dos seus dados.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-base font-black text-[#0d1527] uppercase tracking-wider">
            O que está incluído no Plus
          </h3>
          <span className="text-xs text-[#854d0e] font-semibold bg-[#faf3e0] px-2 py-0.5 rounded-full border border-[#d4af37]/30">
            6 Pilares Completos
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {PLUS_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#e2d9c8] shadow-sm space-y-2 hover:border-[#d4af37]/60 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0d1527] to-[#1e3a8a] flex items-center justify-center shrink-0 shadow-sm border border-[#d4af37]/30">
                    {renderIcon(benefit.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d1527]">
                      {benefit.title}
                    </h4>
                    <span className="text-[10px] font-semibold text-[#854d0e] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      {benefit.tag}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed pl-1">
                {benefit.shortDesc}
              </p>

              <div className="text-xs text-gray-500 bg-[#faf8f5] p-3 rounded-xl border border-gray-100 leading-relaxed font-sans">
                {benefit.details}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
        <h3 className="text-sm font-black text-[#0d1527] uppercase tracking-wider">
          Perguntas Frequentes
        </h3>

        <div className="divide-y divide-gray-100">
          {PLUS_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="py-2.5">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-3 text-xs sm:text-sm font-bold text-gray-800 hover:text-[#1e3a8a] transition-all cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <p className="text-xs text-gray-600 leading-relaxed mt-2 pt-1 font-sans">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center space-y-1.5 pt-2">
        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
          <MarianRoseIcon className="w-4 h-4 text-[#d4af37]" />
          <span>Recomeço — Com Jesus no centro e Maria ensinando a caminhar</span>
        </div>
        <p className="text-[11px] text-gray-400">
          Ao assinar, você apoia diretamente a evangelização católica na internet.
        </p>
      </div>
    </div>
  );
}
