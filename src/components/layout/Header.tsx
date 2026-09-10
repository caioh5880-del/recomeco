"use client";

import React from "react";
import { Flame, Crown } from "lucide-react";
import { MarianLilyIcon } from "../ui/MarianRoseIcon";
import { UserStats, TabType, AuthMode } from "@/lib/types";
import { useAuth } from "@/lib/context/AuthContext";

interface HeaderProps {
  stats: UserStats;
  onOpenBattle?: () => void;
  onOpenPlus: () => void;
  onOpenAuth: (mode?: AuthMode) => void;
  onNavigateToTab: (tab: TabType) => void;
}

export function Header({
  stats,
  onOpenPlus,
  onOpenAuth,
  onNavigateToTab
}: HeaderProps) {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 bg-[#0d1527]/95 backdrop-blur-md border-b border-[#1e3a8a]/40 text-white transition-all">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        <div
          onClick={() => onNavigateToTab("home")}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#1e3a8a] to-[#d4af37]/40 flex items-center justify-center shadow-inner border border-[#d4af37]/30 shrink-0">
            <MarianLilyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#fef08a]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black tracking-wider text-white">RECOMEÇO</h1>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            </div>
            <p className="text-[10px] sm:text-xs text-white/60 font-light truncate max-w-[130px] sm:max-w-[280px]">
              Com Jesus no centro e Maria ensinando a caminhar
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <div className="flex items-center gap-1 sm:gap-1.5 bg-[#14213d] px-2 sm:px-2.5 py-1 rounded-full border border-[#d4af37]/30 shadow-sm text-xs">
            <Flame className="w-3.5 h-3.5 text-[#facc15] fill-[#facc15]" />
            <span className="font-semibold text-white text-[11px] sm:text-xs">{stats.streakDays}</span>
            <span className="hidden sm:inline text-[11px] text-white/70">dias</span>
          </div>

          <button
            onClick={onOpenPlus}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-gradient-to-r from-[#d4af37]/20 to-[#ca8a04]/20 border border-[#d4af37]/40 text-[#fef08a] hover:bg-[#d4af37]/30 transition-all cursor-pointer"
          >
            <Crown className="w-3.5 h-3.5 text-[#facc15]" />
            <span>Plus</span>
          </button>

          {!user && (
            <button
              onClick={() => onOpenAuth("login")}
              className="flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#d4af37] text-[#0d1527] hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow"
            >
              <span>Entrar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
