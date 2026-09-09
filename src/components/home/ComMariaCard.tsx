import React, { useState } from "react";
import { Sparkles, ChevronRight, X, Heart } from "lucide-react";
import { dailyMarianCard } from "@/lib/data/homeData";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

export function ComMariaCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#faf6ee] border border-[#d4af37]/50 p-5 sm:p-6 shadow-md transition-all hover:shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a]">
              <MarianRoseIcon className="w-4 h-4 text-[#1e3a8a]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">
              Com Maria
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#997a15] bg-[#d4af37]/15 px-2 py-0.5 rounded-full border border-[#d4af37]/30">
            Diário
          </span>
        </div>

        <blockquote className="text-base sm:text-lg font-serif font-medium text-[#0d1527] leading-snug mb-3">
          &ldquo;{dailyMarianCard.quote}&rdquo;
        </blockquote>

        <div className="bg-[#f5efe2]/70 rounded-xl p-3.5 border border-[#d4af37]/25 mb-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#854d0e] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#ca8a04]" />
            <span>Como viver isso hoje?</span>
          </div>
          <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
            {dailyMarianCard.practicalAction}
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="w-full justify-between border-[#d4af37]/40 text-[#0d1527] hover:bg-[#d4af37]/10"
          rightIcon={<ChevronRight className="w-4 h-4 text-[#ca8a04]" />}
        >
          Ver reflexão completa
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#d4af37]/40 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <MarianRoseIcon className="w-5 h-5 text-[#1e3a8a]" />
                <h3 className="font-bold text-lg text-[#0d1527]">Com Maria na Oração</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-[#1e293b]">
              <div className="p-4 rounded-2xl bg-[#0d1527] text-white">
                <p className="text-xs font-semibold text-[#fef08a] uppercase tracking-wider mb-1">
                  Meditação Mariana
                </p>
                <p className="font-serif italic text-base sm:text-lg text-white/90">
                  &ldquo;{dailyMarianCard.quote}&rdquo;
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#0d1527] uppercase tracking-wide">
                  Aprenda com o Coração de Maria
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {dailyMarianCard.reflection}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf7f0] border border-[#d4af37]/30">
                <h4 className="text-xs font-bold text-[#854d0e] uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#ca8a04]" />
                  Aplicação Concreta para Hoje
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {dailyMarianCard.practicalAction}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#eff6ff] border border-blue-100 flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#1e3a8a] italic font-serif">
                  &ldquo;Maria não toma o lugar de Jesus. Ela nos ensina a chegar até Ele.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-gray-100 flex justify-end">
              <Button variant="marian" size="md" onClick={() => setIsOpen(false)}>
                Guardar no coração
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
