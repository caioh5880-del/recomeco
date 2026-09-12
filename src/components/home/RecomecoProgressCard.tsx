import React from "react";
import { Flame, ShieldCheck, HeartHandshake, ArrowRight, RotateCcw } from "lucide-react";
import { UserStats } from "@/lib/types";
import { Button } from "../ui/Button";

interface RecomecoProgressCardProps {
  stats: UserStats;
  onNavigateToRecomeco: () => void;
}

export function RecomecoProgressCard({
  stats,
  onNavigateToRecomeco
}: RecomecoProgressCardProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0d1527] to-[#14213d] text-white p-5 sm:p-6 shadow-lg border border-[#1e3a8a]/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#fef08a] border border-[#d4af37]/30">
            <RotateCcw className="w-4 h-4 text-[#fef08a]" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#fef08a]">
              Sua Caminhada de Fé
            </span>
            <h4 className="text-sm font-bold text-white">
              Crescendo na fé, a cada dia.
            </h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
          <div className="flex items-center justify-center gap-1 text-[#facc15] mb-1">
            <Flame className="w-4 h-4 fill-[#facc15]" />
          </div>
          <span className="text-lg font-black text-white">{stats.streakDays}</span>
          <span className="block text-[10px] text-white/60">Dias firmes</span>
        </div>

        <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
          <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <span className="text-lg font-black text-white">
            {stats.completedPrayersCount}
          </span>
          <span className="block text-[10px] text-white/60">Orações</span>
        </div>

        <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
          <div className="flex items-center justify-center gap-1 text-rose-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-lg font-black text-white">
            {stats.victoriesInBattle}
          </span>
          <span className="block text-[10px] text-white/60">Vitórias</span>
        </div>
      </div>

      <p className="text-xs text-white/70 italic font-serif mb-4 text-center">
        &ldquo;Não desanime com as pequenas quedas diárias. O segredo da santidade é recomeçar sempre com confiança em Deus.&rdquo;
      </p>

      <Button
        variant="gold"
        size="sm"
        onClick={onNavigateToRecomeco}
        className="w-full justify-between"
        rightIcon={<ArrowRight className="w-4 h-4 text-[#0d1527]" />}
      >
        Acessar Trilha &ldquo;Aprendendo com Maria&rdquo;
      </Button>
    </div>
  );
}
