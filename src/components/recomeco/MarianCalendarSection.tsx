import React, { useState } from "react";
import { Calendar, ChevronRight, X, Sparkles } from "lucide-react";
import { marianFeasts } from "@/lib/data/marianCalendar";
import { MarianFeast } from "@/lib/types";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

export function MarianCalendarSection() {
  const [selectedFeast, setSelectedFeast] = useState<MarianFeast | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#1e3a8a]" />
          <div>
            <h3 className="text-base font-bold text-[#0d1527]">
              Caminho com Maria
            </h3>
            <span className="text-xs text-gray-500">
              Celebrações e Memórias do Calendário Litúrgico
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {marianFeasts.map((feast) => (
          <div
            key={feast.id}
            onClick={() => setSelectedFeast(feast)}
            className="p-4 rounded-2xl bg-white border border-[#e2d9c8] hover:border-[#d4af37] shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#faf7f0] border border-[#d4af37]/30 flex flex-col items-center justify-center text-center p-1 shrink-0">
                <span className="text-[10px] font-bold text-[#854d0e] uppercase leading-none">
                  {feast.date.split(" ")[0]}
                </span>
                <span className="text-[9px] text-gray-500 uppercase leading-none mt-0.5">
                  {feast.date.split(" ")[2]?.slice(0, 3)}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#0d1527] group-hover:text-[#1e3a8a] transition-colors">
                  {feast.title}
                </h4>
                <span className="text-xs text-amber-800 font-medium">
                  {feast.liturgicalGrade}
                </span>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1e3a8a] transition-colors shrink-0" />
          </div>
        ))}
      </div>

      {selectedFeast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#d4af37]/40 max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col">
            <div className="pb-3 border-b border-gray-100 flex items-center justify-between shrink-0 mb-4">
              <div className="flex items-center gap-2">
                <MarianRoseIcon className="w-5 h-5 text-[#1e3a8a]" />
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase block">
                    {selectedFeast.date} • {selectedFeast.liturgicalGrade}
                  </span>
                  <h3 className="font-bold text-lg text-[#0d1527] leading-tight">
                    {selectedFeast.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedFeast(null)}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-[#eff6ff] border border-blue-100 space-y-1">
                <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wide block">
                  Quem é Maria nesta celebração?
                </span>
                <p className="text-gray-800 leading-relaxed">
                  {selectedFeast.whoIsMary}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-[#0d1527] uppercase tracking-wide block">
                  O que a Santa Igreja celebra?
                </span>
                <p className="text-gray-700 leading-relaxed">
                  {selectedFeast.whatChurchCelebrates}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf7f0] border border-[#d4af37]/30 space-y-1">
                <span className="text-xs font-bold text-[#854d0e] uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ca8a04]" />
                  Como posso viver isso hoje?
                </span>
                <p className="text-gray-800 leading-relaxed">
                  {selectedFeast.howToLiveToday}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1527] text-white space-y-1">
                <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wide block">
                  Oração da Festa
                </span>
                <p className="font-serif italic text-white/90 leading-relaxed text-xs sm:text-sm">
                  &ldquo;{selectedFeast.prayer}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-gray-100 flex justify-end shrink-0">
              <Button variant="marian" size="md" onClick={() => setSelectedFeast(null)}>
                Amém
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
