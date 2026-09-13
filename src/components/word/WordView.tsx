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
  currentSundayVerse,
  currentLiturgicalSeason
} from "@/lib/data/liturgy";
import { parseLiturgyReferenceToBible, cnbbOfficialBadge } from "@/lib/data/catholicBibleCNBB";
import { CatholicBibleView } from "../bible/CatholicBibleView";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function WordView() {
  const todayDayIndex = new Date().getDay();
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(todayDayIndex);
  const [activeSection, setActiveSection] = useState<"all" | "first" | "psalm" | "second" | "gospel" | "homily">("all");
  const [hasMeditated, setHasMeditated] = useState(false);
  const [mainTab, setMainTab] = useState<"bible" | "liturgy">("bible");
  const [targetBibleBook, setTargetBibleBook] = useState<string | undefined>(undefined);
  const [targetBibleChapter, setTargetBibleChapter] = useState<number>(1);

  const selectedLiturgy = weekLiturgies[selectedDayIndex] || weekLiturgies[0];

  const handleOpenBibleFromReference = (reference: string) => {
    const parsed = parseLiturgyReferenceToBible(reference);
    if (parsed) {
      setTargetBibleBook(parsed.bookId);
      setTargetBibleChapter(parsed.chapter);
    }
    setMainTab("bible");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-6 pb-28 max-w-xl mx-auto px-4 pt-4">
      <div className="grid grid-cols-2 gap-1.5 p-1 bg-white rounded-2xl border border-[#e2d9c8] shadow-sm">
        <button
          onClick={() => {
            setTargetBibleBook(undefined);
            setTargetBibleChapter(1);
            setMainTab("bible");
          }}
          className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            mainTab === "bible"
              ? "bg-[#0d1527] text-white shadow-md scale-[1.01]"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Bíblia Sagrada (CNBB)</span>
        </button>

        <button
          onClick={() => setMainTab("liturgy")}
          className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            mainTab === "liturgy"
              ? "bg-[#0d1527] text-white shadow-md scale-[1.01]"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Liturgia de Hoje</span>
        </button>
      </div>

      {mainTab === "bible" ? (
        <CatholicBibleView
          initialBookId={targetBibleBook}
          initialChapter={targetBibleChapter}
          onBackToLiturgy={() => setMainTab("liturgy")}
        />
      ) : (
        <>
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
                  {currentSundayVerse}
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
            {(activeSection === "all" || activeSection === "first") && (
              <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    {selectedLiturgy.firstReading.title}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-gray-500 text-right">
                    {selectedLiturgy.firstReading.reference}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed pt-2">
                  {selectedLiturgy.firstReading.content}
                </p>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    — Palavra do Senhor. / Graças a Deus.
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleOpenBibleFromReference(selectedLiturgy.firstReading.reference)}
                    leftIcon={<BookOpen className="w-3.5 h-3.5 text-[#1e3a8a]" />}
                  >
                    Ler capítulo completo na Bíblia
                  </Button>
                </div>
              </section>
            )}

            {(activeSection === "all" || activeSection === "psalm") && (
              <section className="bg-[#faf8f5] rounded-3xl p-6 sm:p-7 border border-[#d4af37]/35 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                  <span className="text-base">📖</span>
                  <span>Salmo Responsorial</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0d1527] leading-tight">
                    {selectedLiturgy.psalm.title || selectedLiturgy.psalm.reference}
                  </h3>

                  {selectedLiturgy.psalm.versesReference && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-xs font-bold text-[#854d0e] tracking-wide">
                      <span>►</span>
                      <span>{selectedLiturgy.psalm.versesReference}</span>
                      <span>◄</span>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#d4af37]/40 shadow-sm">
                  <span className="text-[10px] font-bold text-[#854d0e] uppercase tracking-wider block mb-1">
                    Resposta do Povo:
                  </span>
                  <p className="text-sm sm:text-base font-serif font-bold text-[#0d1527] italic leading-relaxed">
                    — {selectedLiturgy.psalm.response}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {selectedLiturgy.psalm.verses.map((verse, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base font-serif text-gray-800 leading-loose pl-4 border-l-2 border-[#d4af37]/50 tracking-wide font-normal"
                    >
                      {verse}
                    </p>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#d4af37]/20 flex items-center justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleOpenBibleFromReference(selectedLiturgy.psalm.reference)}
                    leftIcon={<BookOpen className="w-3.5 h-3.5 text-[#854d0e]" />}
                  >
                    Ler Salmo completo na Bíblia
                  </Button>
                </div>
              </section>
            )}

            {selectedLiturgy.secondReading && (activeSection === "all" || activeSection === "second") && (
              <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 shrink-0">
                    {selectedLiturgy.secondReading.title}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-gray-500 text-right">
                    {selectedLiturgy.secondReading.reference}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed pt-2">
                  {selectedLiturgy.secondReading.content}
                </p>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    — Palavra do Senhor. / Graças a Deus.
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => selectedLiturgy.secondReading && handleOpenBibleFromReference(selectedLiturgy.secondReading.reference)}
                    leftIcon={<BookOpen className="w-3.5 h-3.5 text-[#1e3a8a]" />}
                  >
                    Ler capítulo completo na Bíblia
                  </Button>
                </div>
              </section>
            )}

            {(activeSection === "all" || activeSection === "gospel") && (
              <section className="bg-gradient-to-br from-white to-[#f7f9ff] rounded-2xl p-5 sm:p-6 border-2 border-[#1e3a8a]/40 shadow-md space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-[#1e3a8a] px-2.5 py-0.5 rounded-full shadow-sm shrink-0">
                    Santo Evangelho
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-[#1e3a8a] text-right">
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

                <div className="pt-3 border-t border-[#1e3a8a]/20 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    — Palavra da Salvação. / Glória a vós, Senhor.
                  </span>
                  <Button
                    variant="marian"
                    size="sm"
                    onClick={() => handleOpenBibleFromReference(selectedLiturgy.gospel.reference)}
                    leftIcon={<BookOpen className="w-3.5 h-3.5 text-[#fef08a]" />}
                  >
                    Ler capítulo completo na Bíblia
                  </Button>
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
        </>
      )}
    </div>
  );
}
