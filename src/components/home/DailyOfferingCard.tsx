import React, { useState } from "react";
import { CheckCircle, Circle, Heart } from "lucide-react";
import { dailyOfferingPrayer } from "@/lib/data/homeData";
import { Button } from "../ui/Button";

interface DailyOfferingCardProps {
  isCompleted: boolean;
  onToggleCompleted: () => void;
}

export function DailyOfferingCard({
  isCompleted,
  onToggleCompleted
}: DailyOfferingCardProps) {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 transition-all ${
        isCompleted
          ? "bg-emerald-50/50 border-emerald-300"
          : "bg-white border-[#e2d9c8] shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isCompleted
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-50 text-amber-700 border border-amber-200"
            }`}
          >
            <Heart className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0d1527]">
              Oração do Dia
            </span>
            <h4 className="text-sm font-bold text-gray-900 leading-tight">
              {dailyOfferingPrayer.title}
            </h4>
          </div>
        </div>

        <button
          onClick={onToggleCompleted}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border"
          style={{
            backgroundColor: isCompleted ? "#dcfce7" : "#f1f5f9",
            borderColor: isCompleted ? "#86efac" : "#cbd5e1",
            color: isCompleted ? "#166534" : "#475569"
          }}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Concluída</span>
            </>
          ) : (
            <>
              <Circle className="w-3.5 h-3.5" />
              <span>Marcar rezada</span>
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-gray-600 mb-3 leading-relaxed">
        {dailyOfferingPrayer.explanation}
      </p>

      {showFullText ? (
        <div className="bg-[#fcfbf7] p-4 rounded-xl border border-[#d4af37]/30 mb-3 space-y-3">
          <p className="text-sm font-serif text-gray-800 leading-relaxed italic">
            &ldquo;{dailyOfferingPrayer.text}&rdquo;
          </p>
        </div>
      ) : (
        <p className="text-xs font-serif italic text-gray-500 line-clamp-2 mb-3">
          &ldquo;{dailyOfferingPrayer.text}&rdquo;
        </p>
      )}

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFullText(!showFullText)}
          className="flex-1 text-xs"
        >
          {showFullText ? "Ocultar oração" : "Rezar agora"}
        </Button>
      </div>
    </div>
  );
}
