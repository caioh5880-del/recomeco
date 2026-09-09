import React, { useState } from "react";
import { X, Heart, RotateCcw, Compass } from "lucide-react";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { actOfContrition, confessionalGuide } from "@/lib/data/battleData";
import { Button } from "../ui/Button";

interface FallRecoveryModalProps {
  onRestart: () => void;
  onClose: () => void;
}

export function FallRecoveryModal({ onRestart, onClose }: FallRecoveryModalProps) {
  const [activeView, setActiveView] = useState<"message" | "prayer" | "help">("message");
  const [restarted, setRestarted] = useState(false);

  const handleConfirmRestart = () => {
    onRestart();
    setRestarted(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#d4af37]/40 max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col justify-between">
        <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MarianRoseIcon className="w-6 h-6 text-[#1e3a8a]" />
            <div>
              <h3 className="font-bold text-lg text-[#0d1527] leading-tight">
                Acolhimento & Misericórdia
              </h3>
              <span className="text-xs text-rose-700 font-medium">
                Sempre há tempo de voltar para Deus
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {activeView === "message" && (
          <div className="my-5 space-y-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#eff6ff] to-[#faf5ff] border border-blue-200/80 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mx-auto text-[#1e3a8a]">
                <Heart className="w-6 h-6 fill-[#1e3a8a]/20" />
              </div>
              <h4 className="text-xl font-serif font-black text-[#0d1527]">
                🌹 Recomece.
              </h4>
              <p className="text-sm font-serif italic text-gray-800 leading-relaxed max-w-md mx-auto">
                &ldquo;Não transforme uma queda em desistência. Volte para Deus, reconheça o que aconteceu e continue sua caminhada.&rdquo;
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed bg-[#faf8f5] p-4 rounded-2xl border border-[#e2d9c8]">
              <p>
                O amor de Jesus por você não diminuiu por causa da sua fraqueza. O santo não é aquele que nunca cai, mas aquele que, mesmo caindo setenta vezes sete, corre imediatamente para os braços da misericórdia do Pai.
              </p>
              <p>
                Maria está ao seu lado agora para enxugar as suas lágrimas e te conduzir de volta à graça.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <Button
                variant="gold"
                size="md"
                onClick={handleConfirmRestart}
                className="w-full"
                leftIcon={<RotateCcw className="w-4 h-4 text-[#0d1527]" />}
              >
                {restarted ? "Caminhada reiniciada com Deus!" : "Recomeçar agora"}
              </Button>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveView("prayer")}
                  leftIcon={<Heart className="w-3.5 h-3.5 text-[#1e3a8a]" />}
                >
                  Quero rezar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveView("help")}
                  leftIcon={<Compass className="w-3.5 h-3.5 text-[#ca8a04]" />}
                >
                  Quero procurar ajuda
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeView === "prayer" && (
          <div className="my-5 space-y-4">
            <div className="p-4 rounded-2xl bg-[#faf7f0] border border-[#d4af37]/40 space-y-2">
              <span className="text-xs font-bold text-[#854d0e] uppercase tracking-wider block">
                {actOfContrition.title}
              </span>
              <p className="text-sm font-serif italic text-gray-800 leading-relaxed whitespace-pre-line">
                &ldquo;{actOfContrition.text}&rdquo;
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0d1527] text-white space-y-1.5">
              <span className="text-[11px] font-bold text-[#fef08a] uppercase tracking-wider block">
                Palavra de Cura (1 Jo 1, 9)
              </span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-serif italic">
                &ldquo;Se confessarmos os nossos pecados, Ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.&rdquo;
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveView("message")}
                className="flex-1"
              >
                Voltar
              </Button>
              <Button
                variant="gold"
                size="sm"
                onClick={handleConfirmRestart}
                className="flex-1"
              >
                Recomeçar em paz
              </Button>
            </div>
          </div>
        )}

        {activeView === "help" && (
          <div className="my-5 space-y-4">
            <div className="p-4 rounded-2xl bg-[#eff6ff] border border-blue-100 space-y-2">
              <h4 className="text-sm font-bold text-[#1e3a8a]">
                {confessionalGuide.title}
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {confessionalGuide.intro}
              </p>
            </div>

            <div className="space-y-2">
              {confessionalGuide.steps.map((step, idx) => (
                <div key={idx} className="p-3 bg-white border border-gray-100 rounded-xl shadow-xs">
                  <h5 className="text-xs font-bold text-[#0d1527] mb-0.5">
                    {step.title}
                  </h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveView("message")}
                className="flex-1"
              >
                Voltar
              </Button>
              <Button
                variant="gold"
                size="sm"
                onClick={handleConfirmRestart}
                className="flex-1"
              >
                Recomeçar com fé
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
