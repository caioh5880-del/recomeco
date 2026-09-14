import React, { useState, useEffect } from "react";
import {
  X,
  Shield,
  CheckCircle2,
  Clock
} from "lucide-react";
import { stMichaelPrayer, emergencyPhysicalActions, battleScriptures } from "@/lib/data/battleData";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

interface BattleModeModalProps {
  onVictory: () => void;
  onOpenFallRecovery: () => void;
  onClose: () => void;
}

export function BattleModeModal({
  onVictory,
  onOpenFallRecovery,
  onClose
}: BattleModeModalProps) {
  const [step, setStep] = useState<number>(1);
  const [timerSeconds, setTimerSeconds] = useState<number>(120);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [isVictorious, setIsVictorious] = useState<boolean>(false);

  useEffect(() => {
    if (!timerActive) return;

    const interval = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleFinishVictory = () => {
    onVictory();
    setIsVictorious(true);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#0a0f1d] text-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border-2 border-red-500/50 max-h-[92vh] overflow-y-auto custom-scrollbar flex flex-col justify-between">
        <div className="pb-3 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-full bg-red-600/30 border border-red-500/40">
              <Shield className="w-5 h-5 text-red-400 fill-red-400" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                Modo Batalha • Passo {step} de 4
              </span>
              <h3 className="font-black text-lg text-white leading-tight">
                {step === 1 && "1. Afastamento e Respiração"}
                {step === 2 && "2. Intercessão de Maria"}
                {step === 3 && "3. São Miguel & Ação Física"}
                {step === 4 && "4. Temporizador & Vitória"}
              </h3>
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
          {step === 1 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-red-950/40 to-[#14213d] border border-red-500/30 text-center space-y-2">
                <h4 className="text-base sm:text-lg font-black text-white flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5 text-red-400" />
                  <span>Agora volte seu coração para Deus.</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Não negocie com a tentação. Não tente dialogar nem justificar. O primeiro passo da vitória é afastar o olhar do gatilho e acolher a presença amorosa do Pai.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider block">
                  Pausa Sagrada (4-4-4)
                </span>
                <p className="text-xs text-gray-400">
                  Inspire lentamente por 4 segundos, segure a respiração por 4 segundos e solte devagar invocando o Nome de Jesus.
                </p>
                <div className="py-2 text-xl font-serif italic text-amber-200">
                  &ldquo;Jesus, manso e humilde de coração, fazei o meu coração semelhante ao Vosso.&rdquo;
                </div>
              </div>

              <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20 text-xs text-red-200">
                Lembre-se: sentir tentação não é pecado. O pecado é consentir. Você está lutando e Deus está com você agora!
              </div>

              <Button
                variant="gold"
                size="md"
                onClick={() => setStep(2)}
                className="w-full"
              >
                Prosseguir: Clamar por Maria
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#14213d] to-[#1e3a8a] border border-[#d4af37]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#fef08a]">
                  <MarianRoseIcon className="w-5 h-5 text-[#facc15]" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">
                    Peça a intercessão de Nossa Senhora
                  </h4>
                </div>
                <p className="text-sm sm:text-base font-serif italic text-white/95 leading-relaxed bg-black/25 p-3.5 rounded-xl border border-white/10">
                  &ldquo;Maria, Mãe de Jesus, interceda por mim e me ajude a permanecer fiel a Deus neste momento.&rdquo;
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider block">
                  Oração da Ave-Maria
                </span>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-sm sm:text-base font-serif text-white/95 leading-relaxed">
                    Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStep(1)}
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  Voltar
                </Button>
                <Button
                  variant="marian"
                  size="md"
                  onClick={() => setStep(3)}
                  className="flex-1"
                >
                  Rezar com São Miguel Arcanjo
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                  {stMichaelPrayer.title}
                </span>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-sm sm:text-base font-serif text-white/95 leading-relaxed">
                    {stMichaelPrayer.text}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#14213d] border border-blue-400/20 space-y-2">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  Quebra de Padrão Físico Imediata:
                </span>
                <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                  {emergencyPhysicalActions.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStep(2)}
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  Voltar
                </Button>
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => {
                    setStep(4);
                    setTimerActive(true);
                  }}
                  className="flex-1"
                >
                  Ativar Temporizador de Calma
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 text-center">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#facc15]" />
                  <span>Temporizador de Serenidade</span>
                </div>

                <div className="text-4xl font-mono font-black text-white">
                  {formatTimer(timerSeconds)}
                </div>

                <p className="text-xs text-gray-400">
                  A onda química e psicológica da tentação costuma perder até 80% da força nos primeiros dois minutos se você não a alimentar.
                </p>

                <div className="flex justify-center gap-2 pt-1">
                  <button
                    onClick={() => setTimerActive(!timerActive)}
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold hover:bg-white/20 cursor-pointer"
                  >
                    {timerActive ? "Pausar" : "Iniciar"}
                  </button>
                  <button
                    onClick={() => setTimerSeconds(120)}
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold hover:bg-white/20 cursor-pointer"
                  >
                    Resetar 2 min
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 to-blue-950/40 border border-emerald-500/30 text-xs text-emerald-200">
                {battleScriptures[0].passage} ({battleScriptures[0].reference})
              </div>

              <div className="space-y-2 pt-2">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={handleFinishVictory}
                  className="w-full"
                  leftIcon={<CheckCircle2 className="w-5 h-5 text-emerald-700" />}
                >
                  {isVictorious
                    ? "Glória a Deus! Vitória registrada!"
                    : "Estou em paz, venci este momento!"}
                </Button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenFallRecovery();
                  }}
                  className="text-xs text-rose-300 hover:text-rose-200 hover:underline pt-1 cursor-pointer block mx-auto"
                >
                  Não consegui resistir desta vez e preciso de ajuda
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
