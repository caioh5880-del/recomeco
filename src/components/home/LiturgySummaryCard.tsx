import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { todayLiturgy } from "@/lib/data/liturgy";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

interface LiturgySummaryCardProps {
  onNavigateToWord: () => void;
}

export function LiturgySummaryCard({ onNavigateToWord }: LiturgySummaryCardProps) {
  return (
    <div className="rounded-2xl bg-white border border-[#e2d9c8] p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800 border border-emerald-200">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0d1527]">
              Palavra de Deus
            </span>
            <span className="block text-[10px] text-emerald-700 font-semibold">
              {todayLiturgy.gospel.reference}
            </span>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
          Evangelho
        </span>
      </div>

      <div className="bg-[#fcfbf9] p-4 rounded-xl border border-gray-200/70 mb-4">
        <p className="text-sm font-serif text-gray-800 leading-relaxed italic line-clamp-3">
          &ldquo;{todayLiturgy.gospel.content}&rdquo;
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#eff6ff] to-[#f5f3ff] rounded-xl p-3.5 border border-[#1e3a8a]/20 mb-4">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] mb-1">
          <MarianRoseIcon className="w-3.5 h-3.5 text-[#1e3a8a]" />
          <span>{todayLiturgy.marianReflection.title}</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          {todayLiturgy.marianReflection.content}
        </p>
      </div>

      <Button
        variant="secondary"
        size="sm"
        onClick={onNavigateToWord}
        className="w-full justify-between"
        rightIcon={<ArrowRight className="w-4 h-4" />}
      >
        Ler liturgia completa do dia
      </Button>
    </div>
  );
}
