import React from "react";
import { MessageSquareQuote, Bookmark } from "lucide-react";
import { dailyMessage } from "@/lib/data/homeData";

export function MessageForYouCard() {
  return (
    <div className="rounded-2xl bg-white border border-[#e2d9c8] p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 border border-amber-200">
            <MessageSquareQuote className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0d1527]">
              Mensagem para você
            </span>
            <span className="block text-[10px] text-gray-500 font-medium">
              {dailyMessage.source} • {dailyMessage.reference}
            </span>
          </div>
        </div>
        <Bookmark className="w-4 h-4 text-gray-400" />
      </div>

      <p className="text-base font-serif italic text-[#1e293b] leading-relaxed mb-3 pl-3 border-l-2 border-[#d4af37]">
        &ldquo;{dailyMessage.quote}&rdquo;
      </p>

      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        {dailyMessage.reflection}
      </p>
    </div>
  );
}
