import React, { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { todayLiturgy } from "@/lib/data/liturgy";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function WordView() {
  const [activeSection, setActiveSection] = useState<"all" | "first" | "psalm" | "gospel">("all");
  const [hasMeditated, setHasMeditated] = useState(false);

  return (
    <div className="space-y-6 pb-28 max-w-xl mx-auto px-4 pt-4">
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] to-[#1e3a8a] text-white p-6 shadow-xl border border-[#d4af37]/30">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="gold">Palavra Viva</Badge>
          <span className="text-xs text-white/60">{todayLiturgy.date}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
          {todayLiturgy.celebrationTitle}
        </h2>
        <p className="text-xs text-[#fef08a] font-medium flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Cor Litúrgica: {todayLiturgy.liturgicalColor}</span>
        </p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
        <button
          onClick={() => setActiveSection("all")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "all"
              ? "bg-[#0d1527] text-white"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          Toda a Liturgia
        </button>
        <button
          onClick={() => setActiveSection("first")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "first"
              ? "bg-[#0d1527] text-white"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          1ª Leitura
        </button>
        <button
          onClick={() => setActiveSection("psalm")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "psalm"
              ? "bg-[#0d1527] text-white"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          Salmo
        </button>
        <button
          onClick={() => setActiveSection("gospel")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "gospel"
              ? "bg-[#0d1527] text-white"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          Evangelho
        </button>
      </div>

      {(activeSection === "all" || activeSection === "first") && (
        <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              {todayLiturgy.firstReading.title}
            </span>
            <span className="text-xs font-bold text-gray-700">
              {todayLiturgy.firstReading.reference}
            </span>
          </div>
          <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed pt-2">
            {todayLiturgy.firstReading.content}
          </p>
          <div className="pt-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            — Palavra do Senhor. / Graças a Deus.
          </div>
        </section>
      )}

      {(activeSection === "all" || activeSection === "psalm") && (
        <section className="bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border border-[#d4af37]/30 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              Salmo Responsorial
            </span>
            <span className="text-xs font-bold text-gray-700">
              {todayLiturgy.psalm.reference}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#d4af37]/40">
            <span className="text-[11px] font-bold text-[#854d0e] uppercase tracking-wider block mb-1">
              Refrão do Povo:
            </span>
            <p className="text-sm font-serif font-bold text-[#0d1527] italic">
              — {todayLiturgy.psalm.response}
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            {todayLiturgy.psalm.verses.map((verse, idx) => (
              <p key={idx} className="text-sm font-serif text-gray-700 leading-relaxed pl-3 border-l-2 border-[#d4af37]/40">
                {verse}
              </p>
            ))}
          </div>
        </section>
      )}

      {todayLiturgy.secondReading && (activeSection === "all") && (
        <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {todayLiturgy.secondReading.title}
            </span>
            <span className="text-xs font-bold text-gray-700">
              {todayLiturgy.secondReading.reference}
            </span>
          </div>
          <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed pt-2">
            {todayLiturgy.secondReading.content}
          </p>
          <div className="pt-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            — Palavra do Senhor. / Graças a Deus.
          </div>
        </section>
      )}

      {(activeSection === "all" || activeSection === "gospel") && (
        <section className="bg-gradient-to-br from-white to-[#f7f9ff] rounded-2xl p-5 sm:p-6 border-2 border-[#1e3a8a]/40 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#1e3a8a] px-3 py-1 rounded-full shadow-sm">
              Santo Evangelho
            </span>
            <span className="text-xs font-bold text-[#1e3a8a]">
              {todayLiturgy.gospel.reference}
            </span>
          </div>

          <div className="text-xs font-semibold text-gray-500 italic">
            — Proclamação do Evangelho de Jesus Cristo segundo Lucas.
            <br />
            — Glória a vós, Senhor.
          </div>

          <p className="text-base font-serif text-gray-900 leading-relaxed pt-1 font-normal">
            {todayLiturgy.gospel.content}
          </p>

          <div className="pt-2 text-xs font-bold text-gray-600 uppercase tracking-wider border-t border-gray-100">
            — Palavra da Salvação. / Glória a vós, Senhor.
          </div>
        </section>
      )}

      <div className="rounded-2xl bg-[#0d1527] text-white p-5 sm:p-6 shadow-md border border-[#d4af37]/40 space-y-3">
        <div className="flex items-center gap-2 text-[#fef08a]">
          <MarianRoseIcon className="w-5 h-5 text-[#facc15]" />
          <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide">
            {todayLiturgy.marianReflection.title}
          </h3>
        </div>
        <p className="text-sm text-white/90 leading-relaxed font-sans">
          {todayLiturgy.marianReflection.content}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
        <h3 className="text-base font-bold text-[#0d1527]">
          {todayLiturgy.homily.title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {todayLiturgy.homily.content}
        </p>
        <div className="p-3.5 rounded-xl bg-[#faf6ee] border border-[#d4af37]/30">
          <span className="text-xs font-bold text-[#854d0e] uppercase tracking-wider block mb-1">
            Como praticar hoje:
          </span>
          <p className="text-xs sm:text-sm text-gray-700">
            {todayLiturgy.homily.practicalApplication}
          </p>
        </div>
      </div>

      <div className="pt-2">
        <Button
          variant={hasMeditated ? "secondary" : "gold"}
          size="lg"
          onClick={() => setHasMeditated(!hasMeditated)}
          className="w-full"
          leftIcon={hasMeditated ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <Sparkles className="w-5 h-5" />}
        >
          {hasMeditated ? "Liturgia meditada hoje!" : "Concluir meditação da Palavra"}
        </Button>
      </div>
    </div>
  );
}
