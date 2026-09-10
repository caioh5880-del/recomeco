"use client";

import React, { useState } from "react";
import { Calendar, ChevronRight, X, Sparkles, ArrowRightLeft, Church } from "lucide-react";
import { liturgicalSolemnities } from "@/lib/data/marianCalendar";
import { LiturgicalSolemnity } from "@/lib/types";
import { Button } from "../ui/Button";

export function MarianCalendarSection() {
  const [selectedFeast, setSelectedFeast] = useState<LiturgicalSolemnity | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1e3a8a] to-[#d4af37]/30 flex items-center justify-center border border-[#d4af37]/40 shadow-sm text-[#fef08a]">
            <Church className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0d1527]">
              Solenidades do Calendário Litúrgico
            </h3>
            <span className="text-xs text-gray-500">
              Grandes Solenidades da Santa Igreja — Na semana e transferidas
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {liturgicalSolemnities.map((feast) => (
          <div
            key={feast.id}
            onClick={() => setSelectedFeast(feast)}
            className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#e2d9c8] hover:border-[#d4af37] shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-[#faf7f0] border border-[#d4af37]/35 flex flex-col items-center justify-center text-center p-1 shrink-0">
                <span className="text-[10px] sm:text-[11px] font-black text-[#854d0e] uppercase leading-tight tracking-tight">
                  {feast.dayBadge}
                </span>
              </div>

              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-[#0d1527] group-hover:text-[#1e3a8a] transition-colors truncate">
                  {feast.title}
                </h4>
                <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                  <span className="text-[11px] text-amber-800 font-medium">
                    {feast.liturgicalGrade}
                  </span>
                  {feast.isTransferred && (
                    <span className="inline-flex items-center gap-1 text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold border border-blue-200">
                      <ArrowRightLeft className="w-2.5 h-2.5" />
                      Transferida no Brasil
                    </span>
                  )}
                </div>
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
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-[#0d1527] flex items-center justify-center text-[#fef08a] shrink-0 border border-[#d4af37]/30">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-amber-800 uppercase block truncate">
                    {selectedFeast.date} • {selectedFeast.liturgicalGrade}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-[#0d1527] leading-tight">
                    {selectedFeast.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedFeast(null)}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {selectedFeast.isTransferred && selectedFeast.transferDetails && (
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 text-amber-800">
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                    Regra Litúrgica no Brasil
                  </span>
                  <p className="text-xs leading-relaxed text-amber-950">
                    {selectedFeast.transferDetails}
                  </p>
                </div>
              )}

              <div className="p-4 rounded-2xl bg-[#eff6ff] border border-blue-100 space-y-1">
                <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wide block">
                  Sentido Espiritual e Teológico
                </span>
                <p className="text-gray-800 leading-relaxed">
                  {selectedFeast.spiritualMeaning}
                </p>
              </div>

              <div className="space-y-1 px-1">
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
                  Oração Litúrgica da Solenidade
                </span>
                <p className="font-serif italic text-white/90 leading-relaxed text-xs sm:text-sm">
                  &ldquo;{selectedFeast.prayer}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex justify-end shrink-0">
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
