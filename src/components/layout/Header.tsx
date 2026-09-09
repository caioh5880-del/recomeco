import React from "react";
import { Flame, Shield, Crown } from "lucide-react";
import { MarianLilyIcon } from "../ui/MarianRoseIcon";
import { UserStats } from "@/lib/types";

interface HeaderProps {
  stats: UserStats;
  onOpenBattle: () => void;
  onOpenPlus: () => void;
}

export function Header({ stats, onOpenBattle, onOpenPlus }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#0d1527]/95 backdrop-blur-md border-b border-[#1e3a8a]/40 text-white transition-all">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1e3a8a] to-[#d4af37]/40 flex items-center justify-center shadow-inner border border-[#d4af37]/30">
            <MarianLilyIcon className="w-6 h-6 text-[#fef08a]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg font-black tracking-wider text-white">RECOMEÇO</h1>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            </div>
            <p className="text-[10px] sm:text-xs text-white/60 font-light truncate max-w-[200px] sm:max-w-[320px]">
              Com Jesus no centro e Maria ensinando a caminhar
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 bg-[#14213d] px-2.5 py-1 rounded-full border border-[#d4af37]/30 shadow-sm text-xs">
            <Flame className="w-3.5 h-3.5 text-[#facc15] fill-[#facc15]" />
            <span className="font-semibold text-white">{stats.streakDays}</span>
            <span className="hidden sm:inline text-[11px] text-white/70">dias</span>
          </div>

          <button
            onClick={onOpenPlus}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#d4af37]/20 to-[#ca8a04]/20 border border-[#d4af37]/40 text-[#fef08a] hover:bg-[#d4af37]/30 transition-all cursor-pointer"
          >
            <Crown className="w-3.5 h-3.5 text-[#facc15]" />
            <span className="hidden sm:inline">Plus</span>
          </button>

          <button
            onClick={onOpenBattle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-md shadow-red-900/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5 fill-white" />
            <span className="hidden sm:inline">Socorro</span>
          </button>
        </div>
      </div>
    </header>
  );
}
