"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { rosaryGroups } from "@/lib/data/rosary";
import { RosaryMysteryType } from "@/lib/types";

interface WalkingWithMaryCardProps {
  onOpenRosary: () => void;
}

export function WalkingWithMaryCard({ onOpenRosary }: WalkingWithMaryCardProps) {
  const getTodayMysteryType = (): RosaryMysteryType => {
    const day = new Date().getDay();
    if (day === 1 || day === 6) return "gozosos";
    if (day === 2 || day === 5) return "dolorosos";
    if (day === 4) return "luminosos";
    return "gloriosos";
  };

  const todayType = getTodayMysteryType();
  const currentGroup =
    rosaryGroups.find((g) => g.type === todayType) || rosaryGroups[0];

  return (
    <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-br from-[#ffffff] via-[#faf8f5] to-[#f5eedf] p-5 sm:p-6 shadow-md transition-all hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a]">
            <MarianRoseIcon className="w-4 h-4 text-[#1e3a8a]" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">
              Caminhando com Maria
            </span>
            <h4 className="text-sm font-bold text-[#0d1527] leading-tight">
              O Santo Terço
            </h4>
          </div>
        </div>

        <span className="text-[11px] font-semibold text-[#854d0e] bg-[#fef9c3] px-2.5 py-1 rounded-full border border-[#facc15]/40 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#ca8a04]" />
          <span>Mistério de Hoje</span>
        </span>
      </div>

      <div className="bg-white/80 rounded-xl p-3.5 border border-[#d4af37]/30 mb-4">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="font-bold text-[#0d1527]">{currentGroup.title}</span>
          <span className="text-gray-500 text-[11px] font-medium">
            {currentGroup.daysOfWeek}
          </span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed font-serif italic">
          &ldquo;{currentGroup.description}&rdquo;
        </p>
      </div>

      <button
        onClick={onOpenRosary}
        className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#0d1527] via-[#162a56] to-[#1e3a8a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer shadow-md"
      >
        <div className="flex items-center gap-2">
          <span className="text-base">📿</span>
          <span>Rezar o Santo Terço com Maria</span>
        </div>
        <ArrowRight className="w-4 h-4 text-[#facc15]" />
      </button>
    </div>
  );
}
