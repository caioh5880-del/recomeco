import React, { useState } from "react";
import { CheckCircle2, Circle, RefreshCw } from "lucide-react";
import { dailyChallenges } from "@/lib/data/homeData";
import { MarianLilyIcon } from "../ui/MarianRoseIcon";

interface WalkingWithMaryCardProps {
  isCompleted: boolean;
  onToggleChallenge: () => void;
}

export function WalkingWithMaryCard({
  isCompleted,
  onToggleChallenge
}: WalkingWithMaryCardProps) {
  const [challengeIndex, setChallengeIndex] = useState(0);
  const currentChallenge = dailyChallenges[challengeIndex];

  const handleNextChallenge = () => {
    setChallengeIndex((prev) => (prev + 1) % dailyChallenges.length);
  };

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 transition-all ${
        isCompleted
          ? "bg-gradient-to-br from-[#eff6ff] to-[#ecfdf5] border-emerald-300 shadow-md"
          : "bg-gradient-to-br from-[#ffffff] to-[#faf8f5] border-[#d4af37]/40 shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a]">
            <MarianLilyIcon className="w-4 h-4 text-[#1e3a8a]" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">
              Caminhando com Maria
            </span>
            <span className="block text-[10px] text-gray-500 font-medium">
              Pequeno Desafio Espiritual
            </span>
          </div>
        </div>

        <button
          onClick={handleNextChallenge}
          title="Outro desafio"
          className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#854d0e] bg-[#fef9c3] px-2 py-0.5 rounded-full border border-[#facc15]/40">
            {currentChallenge.virtue}
          </span>
          <span className="text-[10px] text-gray-400 font-medium">
            {currentChallenge.scriptureReference}
          </span>
        </div>

        <h4 className="text-base font-bold text-[#0d1527] leading-snug">
          {currentChallenge.title}
        </h4>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {currentChallenge.description}
        </p>
      </div>

      <button
        onClick={onToggleChallenge}
        className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
          isCompleted
            ? "bg-emerald-600 text-white shadow-md shadow-emerald-700/20"
            : "bg-[#0d1527] text-white hover:bg-[#1e3a8a]"
        }`}
      >
        {isCompleted ? (
          <>
            <CheckCircle2 className="w-4 h-4" />
            <span>Desafio do dia cumprido com Maria!</span>
          </>
        ) : (
          <>
            <Circle className="w-4 h-4" />
            <span>Concluir desafio de hoje</span>
          </>
        )}
      </button>
    </div>
  );
}
