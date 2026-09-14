"use client";

import React from "react";
import { usePrayerLanguage } from "@/lib/context/PrayerLanguageContext";

interface PrayerLanguageToggleProps {
  variant?: "light" | "dark";
  className?: string;
}

export function PrayerLanguageToggle({
  variant = "light",
  className = ""
}: PrayerLanguageToggleProps) {
  const { language, setLanguage } = usePrayerLanguage();

  const isDark = variant === "dark";

  return (
    <div
      className={`inline-flex items-center p-1 rounded-2xl border transition-all ${
        isDark
          ? "bg-black/60 border-white/20 shadow-md backdrop-blur-md"
          : "bg-white/95 border-[#d4af37]/40 shadow-sm backdrop-blur-md"
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
          language === "pt"
            ? isDark
              ? "bg-[#2563eb] text-white shadow-md scale-[1.02]"
              : "bg-[#0d1527] text-white shadow-md scale-[1.02]"
            : isDark
            ? "text-white/70 hover:text-white hover:bg-white/10"
            : "text-gray-700 hover:text-[#0d1527] hover:bg-gray-100"
        }`}
      >
        <span className="text-sm">🇧🇷</span>
        <span>Português</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("la")}
        className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
          language === "la"
            ? isDark
              ? "bg-[#d4af37] text-[#0d1527] shadow-md scale-[1.02] font-black"
              : "bg-[#1e3a8a] text-[#fef08a] shadow-md scale-[1.02] border border-[#d4af37]/40"
            : isDark
            ? "text-white/70 hover:text-white hover:bg-white/10"
            : "text-gray-700 hover:text-[#0d1527] hover:bg-gray-100"
        }`}
      >
        <span className="text-sm">📜</span>
        <span>Latim</span>
      </button>
    </div>
  );
}
