"use client";

import React, { useState } from "react";
import { BookOpen, ChevronRight, X, Sparkles, Heart } from "lucide-react";
import { todayLiturgy } from "@/lib/data/liturgy";

export function DailyWordReminderCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="rounded-2xl border border-[#d4af37]/35 bg-gradient-to-br from-[#ffffff] via-[#faf8f4] to-[#f5eedf] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-all shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#854d0e] mb-0.5">
                <Sparkles className="w-3 h-3 text-[#ca8a04]" />
                <span>Palavra de Deus</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#0d1527] leading-snug">
                Vamos meditar a Palavra? Liturgia de hoje
              </h4>
              <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                {todayLiturgy.gospel.title} • {todayLiturgy.gospel.reference}
              </p>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-white/80 border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-[#1e3a8a] group-hover:border-[#1e3a8a]/40 transition-all shrink-0">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#d4af37]/40 max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#1e3a8a]/10 text-[#1e3a8a]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#0d1527]">
                      {todayLiturgy.gospel.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#854d0e]">
                      {todayLiturgy.gospel.reference}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-[#1e293b]">
                <div className="p-4 rounded-2xl bg-[#faf8f4] border border-[#d4af37]/30">
                  <p className="text-xs font-bold text-[#854d0e] uppercase tracking-wider mb-2">
                    Proclamação do Santo Evangelho
                  </p>
                  <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed italic whitespace-pre-line">
                    &ldquo;{todayLiturgy.gospel.content}&rdquo;
                  </p>
                  <span className="block mt-3 text-xs font-bold text-[#1e3a8a] text-right">
                    — Palavra da Salvação. Glória a Vós, Senhor.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#eff6ff] border border-blue-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wide">
                    <Heart className="w-4 h-4 text-[#1e3a8a]" />
                    <span>Luz para a sua vida hoje</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {todayLiturgy.homily.practicalApplication}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-[#0d1527] hover:bg-[#1e3a8a] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow"
              >
                Guardar no Coração
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
