import React, { useState } from "react";
import { Mic, ChevronDown, ChevronUp, Compass } from "lucide-react";
import { todayLiturgy } from "@/lib/data/liturgy";

export function HomilyCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-white border border-[#e2d9c8] p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1e3a8a] border border-blue-200">
            <Mic className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0d1527]">
              Homilia do Dia
            </span>
            <h4 className="text-sm font-bold text-gray-900 leading-tight">
              {todayLiturgy.homily.title}
            </h4>
          </div>
        </div>
      </div>

      <p className={`text-xs sm:text-sm text-gray-700 leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
        {todayLiturgy.homily.content}
      </p>

      {isExpanded && (
        <div className="mt-4 p-3.5 rounded-xl bg-[#faf6ee] border border-[#d4af37]/30">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#854d0e] mb-1">
            <Compass className="w-3.5 h-3.5 text-[#ca8a04]" />
            <span>Aplicação prática</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            {todayLiturgy.homily.practicalApplication}
          </p>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-3 text-xs font-semibold text-[#1e3a8a] hover:underline flex items-center gap-1 cursor-pointer"
      >
        <span>{isExpanded ? "Mostrar menos" : "Continuar lendo"}</span>
        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}
