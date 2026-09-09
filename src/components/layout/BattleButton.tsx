import React from "react";
import { Shield } from "lucide-react";

interface BattleButtonProps {
  onClick: () => void;
}

export function BattleButton({ onClick }: BattleButtonProps) {
  return (
    <div className="fixed bottom-18 right-4 z-30 sm:bottom-6 sm:right-6">
      <button
        onClick={onClick}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 via-rose-700 to-[#1e3a8a] text-white shadow-xl shadow-red-950/40 border border-[#fef08a]/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer animate-pulse hover:animate-none"
      >
        <div className="p-1 rounded-full bg-white/20">
          <Shield className="w-5 h-5 text-white fill-white" />
        </div>
        <div className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wider text-rose-200 font-bold">
            Auxílio Imediato
          </span>
          <span className="text-xs sm:text-sm font-black tracking-tight">
            ESTOU SENDO TENTADO
          </span>
        </div>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
        </span>
      </button>
    </div>
  );
}
