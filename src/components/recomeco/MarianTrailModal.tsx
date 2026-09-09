import React from "react";
import { X, CheckCircle2, Circle, BookOpen, Heart, Sparkles } from "lucide-react";
import { MarianTrailDay } from "@/lib/types";
import { Button } from "../ui/Button";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";

interface MarianTrailModalProps {
  dayData: MarianTrailDay;
  isCompleted: boolean;
  onCompleteDay: () => void;
  onClose: () => void;
}

export function MarianTrailModal({
  dayData,
  isCompleted,
  onCompleteDay,
  onClose
}: MarianTrailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#d4af37]/40 max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col justify-between">
        <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MarianRoseIcon className="w-5 h-5 text-[#1e3a8a]" />
            <div>
              <span className="text-xs font-bold text-[#854d0e] uppercase tracking-wider block">
                Dia {dayData.day} • Aprendendo com Maria
              </span>
              <h3 className="text-lg font-black text-[#0d1527] leading-tight">
                {dayData.themeTitle}: {dayData.themeSubtitle}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-4 space-y-4 text-gray-800 text-sm">
          <div className="p-4 rounded-2xl bg-[#eff6ff] border border-blue-100 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Palavra de Deus ({dayData.scriptureReference})</span>
            </div>
            <p className="font-serif italic text-gray-900 leading-relaxed">
              &ldquo;{dayData.scriptureText}&rdquo;
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0d1527] uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#1e3a8a]" />
              <span>2. O que Maria nos ensina</span>
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {dayData.marianReflection}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#faf7f0] border border-[#d4af37]/35 space-y-2">
            <span className="text-xs font-bold text-[#854d0e] uppercase tracking-wider block">
              3. Oração Guiada do Dia
            </span>
            <p className="font-serif italic text-gray-900 leading-relaxed">
              &ldquo;{dayData.guidedPrayer}&rdquo;
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0d1527] text-white space-y-2">
            <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
              <span>4. Atitude Concreta para Hoje</span>
            </span>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              {dayData.concreteAction}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            onClick={onCompleteDay}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
              isCompleted
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : "bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700"
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dia Concluído com Sucesso!</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4" />
                <span>Marcar Dia como Concluído</span>
              </>
            )}
          </button>

          <Button variant="default" size="md" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
}
