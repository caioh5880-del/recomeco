import React from "react";
import { X, Crown, Check } from "lucide-react";
import { Button } from "../ui/Button";

interface PlusModalProps {
  isSubscriber: boolean;
  onToggleSubscribe: () => void;
  onClose: () => void;
}

export function PlusModal({
  isSubscriber,
  onToggleSubscribe,
  onClose
}: PlusModalProps) {
  const plusBenefits = [
    "Trilhas marianas avançadas (30, 60 e 90 dias)",
    "Plano personalizado de oração e virtudes",
    "Preparações guiadas passo a passo com áudio",
    "Mais reflexões profundas sobre Nossa Senhora",
    "Histórico completo de orações e combate",
    "Mais opções de meditações do Rosário",
    "Recomendações personalizadas de leitura católica",
    "Temas e personalização exclusiva da interface"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-gradient-to-b from-[#0d1527] to-[#14213d] text-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-2 border-[#d4af37]/60 max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col justify-between">
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

        <div className="my-5 space-y-4">
          <div className="text-center p-4 rounded-2xl bg-white/5 border border-[#d4af37]/30">
            <span className="text-xs uppercase tracking-widest text-[#fef08a] font-bold">
              Plano de Apoio e Formação
            </span>
            <div className="flex items-baseline justify-center gap-1 my-1">
              <span className="text-3xl font-black text-white">R$ 9,90</span>
              <span className="text-xs text-white/60">/ mês</span>
            </div>
            <p className="text-xs text-white/70">
              Cancele quando quiser. Todo o conteúdo essencial do app continua 100% gratuito.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider block">
              O que você recebe no Plus:
            </span>
            <ul className="space-y-2">
              {plusBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                  <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#facc15]" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 space-y-2 shrink-0">
          <Button
            variant="gold"
            size="lg"
            onClick={onToggleSubscribe}
            className="w-full text-sm font-bold"
          >
            {isSubscriber ? "Desativar Assinatura (Simulação)" : "Assinar por R$ 9,90/mês"}
          </Button>

          <p className="text-[11px] text-white/40 text-center">
            Sua contribuição apoia a manutenção do aplicativo e a missão de evangelização.
          </p>
        </div>
      </div>
    </div>
  );
}
