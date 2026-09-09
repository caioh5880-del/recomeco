import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";

export function HomeGreeting() {
  const [greeting, setGreeting] = useState({ text: "Bom dia!", icon: "☀️" });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 18) {
      queueMicrotask(() => setGreeting({ text: "Boa tarde!", icon: "🌤️" }));
    } else if (hour < 5 || hour >= 18) {
      queueMicrotask(() => setGreeting({ text: "Boa noite!", icon: "🌙" }));
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1527] via-[#162a56] to-[#1e3a8a] text-white p-6 sm:p-8 shadow-xl border border-[#d4af37]/30">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-44 h-44 rounded-full bg-[#d4af37]/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 w-36 h-36 rounded-full bg-[#2563eb]/20 blur-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#fef08a] backdrop-blur-sm border border-[#d4af37]/30">
            <MarianRoseIcon className="w-3.5 h-3.5 text-[#facc15]" />
            <span>Presença de Deus</span>
          </div>
          <span className="text-xs text-white/60 font-medium">Hoje</span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
            <span>{greeting.text}</span>
            <span className="text-2xl">{greeting.icon}</span>
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-normal mt-1">
            Comece seu dia com Deus.
          </p>
        </div>

        <div className="mt-2 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#fef08a]/90 italic font-serif">
          <Sparkles className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
          <span>&ldquo;Todos os dias são uma nova oportunidade de voltar para Deus.&rdquo;</span>
        </div>
      </div>
    </div>
  );
}
