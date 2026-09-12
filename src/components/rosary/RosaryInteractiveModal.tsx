import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, RotateCcw, Sparkles, BookOpen } from "lucide-react";
import { rosaryGroups } from "@/lib/data/rosary";
import { RosaryMysteryType, RosaryMysteryGroup } from "@/lib/types";
import { todayLiturgy } from "@/lib/data/liturgy";
import { getDecadeLiturgyReflection } from "@/lib/data/rosaryLiturgy";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

interface RosaryInteractiveModalProps {
  onClose: () => void;
}

export function RosaryInteractiveModal({ onClose }: RosaryInteractiveModalProps) {
  const [selectedType, setSelectedType] = useState<RosaryMysteryType>("gozosos");
  const [currentDecadeIndex, setCurrentDecadeIndex] = useState<number>(0);
  const [beadCount, setBeadCount] = useState<number>(0);

  const currentGroup: RosaryMysteryGroup =
    rosaryGroups.find((g) => g.type === selectedType) || rosaryGroups[0];
  const currentDecade = currentGroup.decades[currentDecadeIndex];
  const liturgyReflection = getDecadeLiturgyReflection(
    todayLiturgy,
    currentDecade.number,
    selectedType
  );

  const handleNextBead = () => {
    if (beadCount < 10) {
      setBeadCount((prev) => prev + 1);
    } else {
      if (currentDecadeIndex < 4) {
        setCurrentDecadeIndex((prev) => prev + 1);
        setBeadCount(0);
      }
    }
  };

  const handlePrevBead = () => {
    if (beadCount > 0) {
      setBeadCount((prev) => prev - 1);
    } else if (currentDecadeIndex > 0) {
      setCurrentDecadeIndex((prev) => prev - 1);
      setBeadCount(10);
    }
  };

  const handleSelectGroup = (type: RosaryMysteryType) => {
    setSelectedType(type);
    setCurrentDecadeIndex(0);
    setBeadCount(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#0d1527] text-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#d4af37]/40 max-h-[92vh] flex flex-col justify-between">
        <div className="shrink-0 pb-3 border-b border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MarianRoseIcon className="w-6 h-6 text-[#facc15]" />
              <div>
                <h3 className="font-black text-lg text-white tracking-wide">
                  O Santo Rosário
                </h3>
                <span className="text-[10px] text-[#fef08a] block">
                  {currentGroup.daysOfWeek}
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

          <div className="grid grid-cols-4 gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
            {rosaryGroups.map((g) => (
              <button
                key={g.type}
                onClick={() => handleSelectGroup(g.type)}
                className={`py-1.5 px-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedType === g.type
                    ? "bg-[#d4af37] text-[#0d1527] shadow-sm font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {g.type === "gozosos" && "Gozosos"}
                {g.type === "luminosos" && "Luminosos"}
                {g.type === "dolorosos" && "Dolorosos"}
                {g.type === "gloriosos" && "Gloriosos"}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto custom-scrollbar my-4 space-y-4 pr-1">
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#14213d] to-[#162a56] border border-[#d4af37]/30 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                {currentDecade.number}º Mistério
              </span>
              <span className="text-[11px] text-white/60">
                {currentDecadeIndex + 1} de 5
              </span>
            </div>

            <h4 className="text-base font-bold text-white mb-2 leading-snug">
              {currentDecade.title}
            </h4>

            <div className="text-xs text-white/70 italic mb-3 pl-2 border-l-2 border-[#d4af37]">
              {currentDecade.scriptureText}
            </div>

            <div className="p-3 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 mb-3 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#fef08a] uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
                <span>Luz do Evangelho de Hoje ({todayLiturgy.gospel.reference})</span>
              </div>
              <p className="text-xs sm:text-[13px] text-white/95 leading-relaxed font-serif italic">
                &ldquo;{liturgyReflection}&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed bg-black/20 p-3 rounded-xl">
              {currentDecade.meditation}
            </p>

            <div className="mt-2 text-[11px] text-[#fef08a] font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
              <span>Fruto: {currentDecade.fruitOfMystery}</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/70">Contas do Mistério:</span>
              <span className="font-bold text-[#fef08a]">
                {beadCount === 0 ? "Pai-Nosso" : `${beadCount}ª Ave-Maria`}
              </span>
            </div>

            <div className="flex items-center justify-between gap-1.5 px-2 py-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all ${
                  beadCount === 0
                    ? "bg-[#d4af37] text-[#0d1527] border-[#fef08a] scale-110 shadow-lg shadow-[#d4af37]/40"
                    : "bg-white/20 text-white/80 border-white/20"
                }`}
                title="Pai-Nosso"
              >
                P
              </div>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setBeadCount(num)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all cursor-pointer ${
                    beadCount >= num
                      ? "bg-[#2563eb] text-white border-blue-400 shadow-sm"
                      : "bg-white/10 text-white/50 border-white/10"
                  } ${beadCount === num ? "ring-2 ring-[#facc15] scale-110" : ""}`}
                >
                  {num}
                </button>
              ))}
            </div>

            <p className="text-[11px] text-white/50 text-center italic">
              {beadCount === 0
                ? "Reze 1 Pai-Nosso contemplando o fruto deste mistério."
                : beadCount === 10
                ? "Reze o Glória ao Pai e a Jaculatória de Fátima: 'Ó meu Jesus...'"
                : `Ave Maria, cheia de graça... (${beadCount}/10)`}
            </p>
          </div>
        </div>

        <div className="shrink-0 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={handlePrevBead}
            disabled={beadCount === 0 && currentDecadeIndex === 0}
            className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <Button
            variant="gold"
            size="md"
            onClick={handleNextBead}
            className="flex-1 text-xs sm:text-sm"
            rightIcon={<ChevronRight className="w-4 h-4 text-[#0d1527]" />}
          >
            {beadCount < 10 ? "Próxima Conta (Ave-Maria)" : "Próximo Mistério"}
          </Button>

          <button
            onClick={() => {
              setBeadCount(0);
              setCurrentDecadeIndex(0);
            }}
            title="Reiniciar Terço"
            className="p-2.5 rounded-xl bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
