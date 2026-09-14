"use client";

import React from "react";
import { X, CheckCircle, Circle, Clock } from "lucide-react";
import { Prayer } from "@/lib/types";
import { Button } from "../ui/Button";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { usePrayerLanguage } from "@/lib/context/PrayerLanguageContext";
import { PrayerLanguageToggle } from "../ui/PrayerLanguageToggle";

interface PrayerDetailModalProps {
  prayer: Prayer;
  isCompleted: boolean;
  onToggleCompleted: () => void;
  onClose: () => void;
}

export function PrayerDetailModal({
  prayer,
  isCompleted,
  onToggleCompleted,
  onClose
}: PrayerDetailModalProps) {
  const { language } = usePrayerLanguage();

  const isLatin = language === "la";
  const displayTitle = isLatin && prayer.latinTitle ? prayer.latinTitle : prayer.title;
  const displaySubtitle = isLatin && prayer.latinTitle ? prayer.title : prayer.latinTitle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#d4af37]/40 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <MarianRoseIcon className="w-5 h-5 text-[#1e3a8a]" />
            <div>
              <h3 className="font-bold text-lg text-[#0d1527] leading-tight">
                {displayTitle}
              </h3>
              {displaySubtitle && (
                <span className="text-xs text-[#854d0e] font-serif italic block">
                  {displaySubtitle}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between pt-3 pb-1 shrink-0">
          <span className="text-xs font-bold text-gray-600">Idioma da Oração:</span>
          <PrayerLanguageToggle />
        </div>

        <div className="overflow-y-auto custom-scrollbar my-3 space-y-4 pr-1">
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-[#faf8f5] p-2.5 rounded-xl border border-[#e2d9c8]">
            <Clock className="w-3.5 h-3.5 text-[#ca8a04]" />
            <span>Momento sugerido: {prayer.suggestedMoment}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-950 leading-relaxed">
            <span className="font-bold block mb-0.5 text-blue-900">Significado espiritual:</span>
            {prayer.explanation}
          </div>

          <div className="space-y-3">
            {!isLatin ? (
              <div className="p-5 rounded-2xl bg-[#faf7f0] border border-[#d4af37]/35 shadow-inner space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#854d0e] uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span>🇧🇷</span>
                    <span>Português:</span>
                  </div>
                  <span className="text-[10px] text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-full font-semibold">
                    Texto Oficial
                  </span>
                </div>
                <p className="text-sm sm:text-base font-serif text-gray-900 leading-relaxed whitespace-pre-line select-text">
                  {prayer.text}
                </p>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-[#f5f2ea] border border-[#d4af37]/45 shadow-inner space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span>📜</span>
                    <span>Latim (Textus Officialis):</span>
                  </div>
                  <span className="text-[10px] text-blue-900 bg-blue-100/80 px-2 py-0.5 rounded-full font-semibold">
                    Tradição da Igreja
                  </span>
                </div>
                <p className="text-sm sm:text-base font-serif italic text-gray-800 leading-relaxed whitespace-pre-line select-text">
                  {prayer.latinText}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onToggleCompleted}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
              isCompleted
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Oração Rezar Concluída</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-gray-400" />
                <span>Marcar como Rezar</span>
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
