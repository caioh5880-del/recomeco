"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Compass,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sun
} from "lucide-react";
import {
  getLiturgyForDate,
  currentSundayVerse,
  currentLiturgicalSeason
} from "@/lib/data/liturgy";
import { parseLiturgyReferenceToBible, cnbbOfficialBadge } from "@/lib/data/catholicBibleCNBB";
import { CatholicBibleView } from "../bible/CatholicBibleView";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { LiturgyDay } from "@/lib/types";

export function WordView() {
  const getTodayString = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [mainTab, setMainTab] = useState<"bible" | "liturgy">("liturgy");
  const [selectedDateStr, setSelectedDateStr] = useState<string>(getTodayString());
  const [activeSection, setActiveSection] = useState<"all" | "first" | "psalm" | "second" | "gospel" | "reflection">("all");
  const [hasMeditated, setHasMeditated] = useState(false);
  const [targetBibleBook, setTargetBibleBook] = useState<string | undefined>(undefined);
  const [targetBibleChapter, setTargetBibleChapter] = useState<number>(1);
  const [selectedReadingOptionIndex, setSelectedReadingOptionIndex] = useState<number>(0);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const initialLiturgy = useMemo(() => {
    const [y, m, d] = selectedDateStr.split("-").map(Number);
    return getLiturgyForDate(new Date(y, m - 1, d), "cnbb");
  }, [selectedDateStr]);

  const [currentLiturgy, setCurrentLiturgy] = useState<LiturgyDay>(initialLiturgy);

  useEffect(() => {
    let isMounted = true;
    const [y, m, d] = selectedDateStr.split("-").map(Number);
    const local = getLiturgyForDate(new Date(y, m - 1, d), "cnbb");
    setCurrentLiturgy(local);

    async function fetchLiturgy() {
      try {
        const res = await fetch(`/api/liturgy?date=${selectedDateStr}&source=cnbb`);
        if (res.ok) {
          const data: LiturgyDay = await res.json();
          if (isMounted && data && (data.firstReading || data.gospel)) {
            setCurrentLiturgy(data);
          }
        }
      } catch {
      }
    }

    fetchLiturgy();

    return () => {
      isMounted = false;
    };
  }, [selectedDateStr]);

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

  const shiftDate = (days: number) => {
    const [y, m, d] = selectedDateStr.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    dateObj.setDate(dateObj.getDate() + days);
    const newYear = dateObj.getFullYear();
    const newMonth = String(dateObj.getMonth() + 1).padStart(2, "0");
    const newDay = String(dateObj.getDate()).padStart(2, "0");
    setSelectedDateStr(`${newYear}-${newMonth}-${newDay}`);
    setSelectedReadingOptionIndex(0);
    setActiveSection("all");
  };

  const handleSetToday = () => {
    setSelectedDateStr(getTodayString());
    setSelectedReadingOptionIndex(0);
    setActiveSection("all");
  };

  const weekStrip = useMemo(() => {
    const [y, m, d] = selectedDateStr.split("-").map(Number);
    const baseDate = new Date(y, m - 1, d);
    const currentDow = baseDate.getDay();
    const startSunday = new Date(baseDate);
    startSunday.setDate(baseDate.getDate() - currentDow);

    const days = [];
    const shortNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
    for (let i = 0; i < 7; i++) {
      const iter = new Date(startSunday);
      iter.setDate(startSunday.getDate() + i);
      const iterYear = iter.getFullYear();
      const iterMonth = String(iter.getMonth() + 1).padStart(2, "0");
      const iterDay = String(iter.getDate()).padStart(2, "0");
      const iterDateStr = `${iterYear}-${iterMonth}-${iterDay}`;
      days.push({
        dateStr: iterDateStr,
        dayNum: iter.getDate(),
        dow: i,
        shortName: shortNames[i],
        isSelected: iterDateStr === selectedDateStr,
        isToday: iterDateStr === getTodayString()
      });
    }
    return days;
  }, [selectedDateStr]);

  const hasSecondReading = Boolean(currentLiturgy.secondReading);

  const displayedFirstReading = useMemo(() => {
    if (currentLiturgy.firstReadingOptions && currentLiturgy.firstReadingOptions.length > 0) {
      const idx = Math.min(selectedReadingOptionIndex, currentLiturgy.firstReadingOptions.length - 1);
      return currentLiturgy.firstReadingOptions[idx];
    }
    return currentLiturgy.firstReading;
  }, [currentLiturgy, selectedReadingOptionIndex]);

  return (
    <div className="space-y-6 pb-28 max-w-xl mx-auto px-4 pt-4">
      <div className="grid grid-cols-2 gap-1.5 p-1 bg-white rounded-2xl border border-[#e2d9c8] shadow-sm">
        <button
          onClick={() => setMainTab("liturgy")}
          className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            mainTab === "liturgy"
              ? "bg-[#0d1527] text-white shadow-md scale-[1.01]"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Liturgia Diária</span>
        </button>

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
      </div>

      {mainTab === "bible" ? (
        <CatholicBibleView
          initialBookId={targetBibleBook}
          initialChapter={targetBibleChapter}
          onBackToLiturgy={() => setMainTab("liturgy")}
        />
      ) : (
        <>
          <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] via-[#142347] to-[#1e3a8a] text-white p-5 sm:p-6 shadow-xl border border-[#d4af37]/35 relative overflow-hidden space-y-3.5">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 rounded-full bg-[#d4af37]/15 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
              <Badge variant="gold">{currentLiturgicalSeason}</Badge>
              <div className="flex items-center gap-1.5 text-xs text-[#fef08a] bg-white/10 px-2.5 py-1 rounded-full border border-white/10 font-medium">
                <span
                  className={`w-2 h-2 rounded-full ${
                    currentLiturgy.liturgicalColor.toLowerCase().includes("vermelho")
                      ? "bg-red-400"
                      : currentLiturgy.liturgicalColor.toLowerCase().includes("branco")
                      ? "bg-amber-100"
                      : currentLiturgy.liturgicalColor.toLowerCase().includes("roxo")
                      ? "bg-purple-400"
                      : "bg-emerald-400"
                  }`}
                />
                <span>Cor: {currentLiturgy.liturgicalColor}</span>
              </div>
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block">
                Liturgia da Igreja Católica
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mt-0.5">
                {currentLiturgy.celebrationTitle}
              </h2>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-serif italic mt-1.5">
                {currentSundayVerse}
              </p>
            </div>

            <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-xs text-white/75">
              <span className="font-semibold text-[#fef08a]">
                {cnbbOfficialBadge}
              </span>
              <span>
                Ano Litúrgico Oficial
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#e2d9c8] p-3.5 sm:p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => shiftDate(-1)}
                  className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer"
                  title="Dia anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => shiftDate(1)}
                  className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer"
                  title="Dia seguinte"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                  className="px-2.5 py-1.5 rounded-xl border border-[#d4af37]/40 bg-amber-50/70 hover:bg-amber-100 text-[#854d0e] font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#ca8a04]" />
                  <span>Escolher Data</span>
                </button>

                {selectedDateStr !== getTodayString() && (
                  <button
                    type="button"
                    onClick={handleSetToday}
                    className="px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                  >
                    <Sun className="w-3 h-3" />
                    <span>Hoje</span>
                  </button>
                )}
              </div>
            </div>

            {isDatePickerOpen && (
              <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/70 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-gray-700">
                  Navegar para qualquer dia do ano:
                </span>
                <input
                  type="date"
                  value={selectedDateStr}
                  onChange={(e) => {
                    if (e.target.value) {
                      setSelectedDateStr(e.target.value);
                      setIsDatePickerOpen(false);
                      setSelectedReadingOptionIndex(0);
                      setActiveSection("all");
                    }
                  }}
                  className="px-2.5 py-1 text-xs border border-gray-300 rounded-lg bg-white font-medium text-gray-800"
                />
              </div>
            )}

            <div className="grid grid-cols-7 gap-1 p-1 bg-gray-50/80 rounded-xl border border-gray-200">
              {weekStrip.map((item) => (
                <button
                  key={item.dateStr}
                  type="button"
                  onClick={() => {
                    setSelectedDateStr(item.dateStr);
                    setSelectedReadingOptionIndex(0);
                    setActiveSection("all");
                  }}
                  className={`py-2 rounded-lg text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    item.isSelected
                      ? "bg-[#1e3a8a] text-white font-bold shadow-xs scale-105"
                      : item.isToday
                      ? "bg-amber-100 text-amber-900 font-bold border border-amber-300"
                      : "text-gray-600 hover:bg-white/80"
                  }`}
                >
                  <span className="text-[10px] uppercase font-semibold">
                    {item.shortName}
                  </span>
                  <span className="text-xs font-bold mt-0.5">
                    {item.dayNum}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-center text-xs text-gray-600 font-medium">
              {currentLiturgy.date}
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
              Todas as Partes
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

            {hasSecondReading && (
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
              onClick={() => setActiveSection("reflection")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeSection === "reflection"
                  ? "bg-[#1e3a8a] text-white shadow-sm"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
              }`}
            >
              Nossa Reflexão
            </button>
          </div>

          <div className="space-y-4">
            {(activeSection === "all" || activeSection === "first") && (
              <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    {displayedFirstReading.title}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-gray-500 text-right">
                    {displayedFirstReading.reference}
                  </span>
                </div>

                {currentLiturgy.firstReadingOptions && currentLiturgy.firstReadingOptions.length > 1 && (
                  <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl w-fit">
                    {currentLiturgy.firstReadingOptions.map((opt, optIdx) => (
                      <button
                        key={opt.optionLabel}
                        type="button"
                        onClick={() => setSelectedReadingOptionIndex(optIdx)}
                        className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                          selectedReadingOptionIndex === optIdx
                            ? "bg-white text-[#1e3a8a] shadow-xs"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {opt.optionLabel}
                      </button>
                    ))}
                  </div>
                )}

                <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed pt-2 whitespace-pre-line">
                  {displayedFirstReading.content}
                </p>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    — Palavra do Senhor. / Graças a Deus.
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleOpenBibleFromReference(displayedFirstReading.reference)}
                    leftIcon={<BookOpen className="w-3.5 h-3.5 text-gray-600" />}
                  >
                    Ler capítulo completo na Bíblia
                  </Button>
                </div>
              </section>
            )}

            {(activeSection === "all" || activeSection === "psalm") && (
              <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      Salmo Responsorial
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-gray-500">
                      {currentLiturgy.psalm.title || currentLiturgy.psalm.reference}
                    </span>
                  </div>

                  {currentLiturgy.psalm.versesReference && (
                    <div className="pt-1 flex items-center gap-1.5 text-xs text-amber-900 font-semibold bg-amber-100/60 px-2.5 py-1 rounded-lg border border-amber-200/80">
                      <span>►</span>
                      <span>{currentLiturgy.psalm.versesReference}</span>
                      <span>◄</span>
                    </div>
                  )}
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 space-y-1 text-center">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest block">
                    Refrão do Povo:
                  </span>
                  <p className="font-serif italic font-bold text-amber-950 text-sm sm:text-base">
                    — {currentLiturgy.psalm.response}
                  </p>
                </div>

                <div className="space-y-3 font-serif text-gray-800 leading-relaxed pt-1">
                  {currentLiturgy.psalm.verses.map((verse, idx) => (
                    <p key={idx} className="text-sm sm:text-base pl-2 border-l-2 border-amber-300">
                      {verse}
                    </p>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-100 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleOpenBibleFromReference(currentLiturgy.psalm.reference)}
                    leftIcon={<BookOpen className="w-3.5 h-3.5 text-gray-600" />}
                  >
                    Ler salmo completo na Bíblia
                  </Button>
                </div>
              </section>
            )}

            {hasSecondReading && (activeSection === "all" || activeSection === "second") && currentLiturgy.secondReading && (
              <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200 shrink-0">
                    {currentLiturgy.secondReading.title}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-gray-500 text-right">
                    {currentLiturgy.secondReading.reference}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-serif text-gray-800 leading-relaxed pt-2 whitespace-pre-line">
                  {currentLiturgy.secondReading.content}
                </p>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    — Palavra do Senhor. / Graças a Deus.
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => currentLiturgy.secondReading && handleOpenBibleFromReference(currentLiturgy.secondReading.reference)}
                    leftIcon={<BookOpen className="w-3.5 h-3.5 text-gray-600" />}
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
                    {currentLiturgy.gospel.reference}
                  </span>
                </div>

                <div className="text-xs font-semibold text-gray-500 italic">
                  — Proclamação do Evangelho de Jesus Cristo.
                  <br />
                  — Glória a vós, Senhor.
                </div>

                <p className="text-base font-serif text-gray-900 leading-relaxed pt-1 font-normal whitespace-pre-line">
                  {currentLiturgy.gospel.content}
                </p>

                <div className="pt-3 border-t border-[#1e3a8a]/20 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    — Palavra da Salvação. / Glória a vós, Senhor.
                  </span>
                  <Button
                    variant="marian"
                    size="sm"
                    onClick={() => handleOpenBibleFromReference(currentLiturgy.gospel.reference)}
                    leftIcon={<BookOpen className="w-3.5 h-3.5 text-[#fef08a]" />}
                  >
                    Ler capítulo completo na Bíblia
                  </Button>
                </div>
              </section>
            )}

            {(activeSection === "all" || activeSection === "reflection") && (
              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-5 sm:p-6 border border-[#e2d9c8] shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#1e3a8a]">
                    <BookOpen className="w-5 h-5 text-[#1e3a8a]" />
                    <h3 className="text-base font-bold text-[#0d1527]">
                      {currentLiturgy.homily.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-sans whitespace-pre-line">
                    {currentLiturgy.homily.content}
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
                    {currentLiturgy.homily.practicalApplication}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#0d1527] text-white p-5 sm:p-6 shadow-md border border-[#d4af37]/40 space-y-3">
                  <div className="flex items-center gap-2 text-[#fef08a]">
                    <MarianRoseIcon className="w-5 h-5 text-[#facc15]" />
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide">
                      {currentLiturgy.marianReflection.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed font-sans">
                    {currentLiturgy.marianReflection.content}
                  </p>
                </div>
              </div>
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
