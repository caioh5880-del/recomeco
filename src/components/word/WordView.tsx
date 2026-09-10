"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Compass,
  BookOpen,
  ChevronRight
} from "lucide-react";
import {
  weekLiturgies,
  currentSundayTitle,
  currentLiturgicalSeason
} from "@/lib/data/liturgy";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function WordView() {
  const todayDayIndex = new Date().getDay();
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(todayDayIndex);
  const [activeSection, setActiveSection] = useState<"all" | "first" | "psalm" | "second" | "gospel" | "homily">("all");
  const [hasMeditated, setHasMeditated] = useState(false);

  const selectedLiturgy = weekLiturgies[selectedDayIndex] || weekLiturgies[0];
  const isSelectedToday = selectedDayIndex === todayDayIndex;

  return (
    <div className="space-y-6 pb-28 max-w-xl mx-auto px-4 pt-4">
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] via-[#142347] to-[#1e3a8a] text-white p-6 sm:p-7 shadow-xl border border-[#d4af37]/35 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 rounded-full bg-[#d4af37]/15 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge variant="gold">{currentLiturgicalSeason}</Badge>
            <div className="flex items-center gap-1.5 text-xs text-[#fef08a] bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Cor: {selectedLiturgy.liturgicalColor}</span>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block">
              Domingo que Rege a Semana
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight mt-0.5">
              {currentSundayTitle}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif italic mt-1.5">
              &ldquo;E vós, quem dizeis que eu sou? — Tu és o Messias, o Filho do Deus vivo.&rdquo; (Mc 8, 29)
            </p>
          </div>

          <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#fef08a]" />
              <span>Liturgia da Semana Completa</span>
            </span>
            <span className="text-[11px] bg-[#d4af37]/20 text-[#fef08a] px-2 py-0.5 rounded-full font-semibold border border-[#d4af37]/40">
              7 Dias de Oração
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0d1527]">
            Escolha o dia da semana:
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {selectedLiturgy.date}
          </span>
        </div>

        <div className="grid grid-cols-7 gap-1 sm:gap-1.5 p-1 bg-white rounded-2xl border border-[#e2d9c8] shadow-sm">
          {weekLiturgies.map((day) => {
            const isSelected = day.dayOfWeek === selectedDayIndex;
            const isToday = day.dayOfWeek === todayDayIndex;

            return (
              <button
                key={day.id}
                onClick={() => {
                  setSelectedDayIndex(day.dayOfWeek ?? 0);
                  setActiveSection("all");
                }}
                className={`py-2 sm:py-2.5 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                  isSelected
                    ? "bg-[#0d1527] text-white shadow-md scale-[1.02]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-[10px] sm:text-xs font-black tracking-tight">
                  {day.shortName}
                </span>
                {isToday && (
                  <span
                    className={`text-[8px] font-bold uppercase px-1 rounded mt-0.5 ${
                      isSelected ? "bg-[#d4af37] text-[#0d1527]" : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    Hoje
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
        <button
          onClick={() => setActiveSection("all")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "all"
              ? "bg-[#1e3a8a] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
          }`}
        >
          Tudo
        </button>

        <button
          onClick={() => setActiveSection("first")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "first"
              ? "bg-[#1e3a8a] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
          }`}
        >
          1ª Leitura
        </button>

        <button
          onClick={() => setActiveSection("psalm")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "psalm"
              ? "bg-[#1e3a8a] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
          }`}
        >
          Salmo
        </button>

        {selectedLiturgy.secondReading && (
          <button
            onClick={() => setActiveSection("second")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeSection === "second"
                ? "bg-[#1e3a8a] text-white shadow-sm"
                : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
            }`}
          >
            2ª Leitura
          </button>
        )}

        <button
          onClick={() => setActiveSection("gospel")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "gospel"
              ? "bg-[#1e3a8a] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
          }`}
        >
          Evangelho
        </button>

        <button
          onClick={() => setActiveSection("homily")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeSection === "homily"
              ? "bg-[#1e3a8a] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
          }`}
        >
          Homilia & Prática
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-[#fcfbf9] rounded-2xl p-4 border border-[#e2d9c8] flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
              Celebração do Dia
            </span>
            <h3 className="text-sm sm:text-base font-black text-[#0d1527]">
              {selectedLiturgy.celebrationTitle}
            </h3>
          </div>
          {isSelectedToday && (
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase shrink-0">
              Liturgia de Hoje
            </span>
          )}
        </div>

        {(activeSection === "all" || activeSection === "first") && (
          <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {selectedLiturgy.firstReading.title}
              </span>
              <span className="text-xs font-bold text-gray-700">
                {selectedLiturgy.firstReading.reference}
              </span>
            </div>
            <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed pt-2">
              {selectedLiturgy.firstReading.content}
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
                {selectedLiturgy.psalm.reference}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#d4af37]/40 shadow-sm">
              <span className="text-[11px] font-bold text-[#854d0e] uppercase tracking-wider block mb-1">
                Refrão do Povo:
              </span>
              <p className="text-sm sm:text-base font-serif font-bold text-[#0d1527] italic">
                — {selectedLiturgy.psalm.response}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {selectedLiturgy.psalm.verses.map((verse, idx) => (
                <p key={idx} className="text-sm font-serif text-gray-700 leading-relaxed pl-3 border-l-2 border-[#d4af37]/40">
                  {verse}
                </p>
              ))}
            </div>
          </section>
        )}

        {selectedLiturgy.secondReading && (activeSection === "all" || activeSection === "second") && (
          <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                {selectedLiturgy.secondReading.title}
              </span>
              <span className="text-xs font-bold text-gray-700">
                {selectedLiturgy.secondReading.reference}
              </span>
            </div>
            <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed pt-2">
              {selectedLiturgy.secondReading.content}
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
                {selectedLiturgy.gospel.reference}
              </span>
            </div>

            <div className="text-xs font-semibold text-gray-500 italic">
              — Proclamação do Evangelho de Jesus Cristo.
              <br />
              — Glória a vós, Senhor.
            </div>

            <p className="text-base font-serif text-gray-900 leading-relaxed pt-1 font-normal">
              {selectedLiturgy.gospel.content}
            </p>

            <div className="pt-2 text-xs font-bold text-gray-600 uppercase tracking-wider border-t border-gray-100">
              — Palavra da Salvação. / Glória a vós, Senhor.
            </div>
          </section>
        )}

        {(activeSection === "all" || activeSection === "homily") && (
          <>
            <div className="rounded-2xl bg-white p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#1e3a8a]">
                <BookOpen className="w-5 h-5 text-[#1e3a8a]" />
                <h3 className="text-base font-bold text-[#0d1527]">
                  Homilia do Evangelho: {selectedLiturgy.homily.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                {selectedLiturgy.homily.content}
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#faf6ee] to-[#f5eedc] border-2 border-[#d4af37]/50 p-5 sm:p-6 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-[#854d0e]">
                <Compass className="w-5 h-5 text-[#ca8a04]" />
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#854d0e]">
                  Como praticar o Evangelho no seu dia a dia
                </h4>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                {selectedLiturgy.homily.practicalApplication}
              </p>
            </div>

            <div className="rounded-2xl bg-[#0d1527] text-white p-5 sm:p-6 shadow-md border border-[#d4af37]/40 space-y-3">
              <div className="flex items-center gap-2 text-[#fef08a]">
                <MarianRoseIcon className="w-5 h-5 text-[#facc15]" />
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide">
                  {selectedLiturgy.marianReflection.title}
                </h3>
              </div>
              <p className="text-sm text-white/90 leading-relaxed font-sans">
                {selectedLiturgy.marianReflection.content}
              </p>
            </div>
          </>
        )}
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
