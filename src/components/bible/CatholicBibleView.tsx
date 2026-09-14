"use client";

import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Search,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Share2,
  Check,
  RotateCcw,
  SlidersHorizontal,
  ArrowLeft
} from "lucide-react";
import {
  catholicCanonBooks,
  getBibleBook,
  getBibleChapter,
  cnbbOfficialBadge,
  cnbbCanonDescription
} from "@/lib/data/catholicBibleCNBB";
import { bibleIntroductoryPrayers } from "@/lib/data/biblePrayers";
import { BibleBook, BibleCategory, BibleFavoriteVerse } from "@/lib/types";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface CatholicBibleViewProps {
  initialBookId?: string;
  initialChapter?: number;
  onBackToLiturgy?: () => void;
}

const categoryLabels: Record<BibleCategory, string> = {
  pentateuco: "Pentateuco",
  historicos: "Históricos",
  sapienciais: "Sapienciais",
  profeticos: "Proféticos",
  evangelhos: "Evangelhos",
  atos: "Atos",
  cartas_paulinas: "Cartas Paulinas",
  cartas_catolicas: "Cartas Católicas",
  apocalipse: "Apocalipse"
};

export function CatholicBibleView({
  initialBookId,
  initialChapter = 1,
  onBackToLiturgy
}: CatholicBibleViewProps) {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(initialBookId || null);
  const [selectedChapter, setSelectedChapter] = useState<number>(initialChapter);
  const [testamentFilter, setTestamentFilter] = useState<"AT" | "NT" | "FAV">("AT");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [readingTheme, setReadingTheme] = useState<"creme" | "escuro">("creme");
  const [favorites, setFavorites] = useState<BibleFavoriteVerse[]>([]);
  const [copiedVerseNumber, setCopiedVerseNumber] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isChapterSelectorOpen, setIsChapterSelectorOpen] = useState(false);
  const [showIntroPrayers, setShowIntroPrayers] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("catholic_bible_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    if (initialBookId) {
      setSelectedBookId(initialBookId);
      setSelectedChapter(initialChapter || 1);
    }
  }, [initialBookId, initialChapter]);

  const saveFavoritesToStorage = (updated: BibleFavoriteVerse[]) => {
    setFavorites(updated);
    try {
      localStorage.setItem("catholic_bible_favorites", JSON.stringify(updated));
    } catch {}
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleFavoriteVerse = (verseNumber: number, verseText: string) => {
    if (!currentBook) return;
    const existingIndex = favorites.findIndex(
      (fav) =>
        fav.bookId === currentBook.id &&
        fav.chapter === selectedChapter &&
        fav.verseNumber === verseNumber
    );

    if (existingIndex >= 0) {
      const updated = favorites.filter((_, idx) => idx !== existingIndex);
      saveFavoritesToStorage(updated);
      showToast("Versículo removido dos favoritos.");
    } else {
      const newFav: BibleFavoriteVerse = {
        id: `${currentBook.id}_${selectedChapter}_${verseNumber}_${Date.now()}`,
        bookId: currentBook.id,
        bookName: currentBook.name,
        chapter: selectedChapter,
        verseNumber,
        text: verseText,
        savedAt: new Date().toISOString()
      };
      const updated = [newFav, ...favorites];
      saveFavoritesToStorage(updated);
      showToast("Versículo salvo nos favoritos!");
    }
  };

  const isVerseFavorited = (verseNumber: number) => {
    if (!currentBook) return false;
    return favorites.some(
      (fav) =>
        fav.bookId === currentBook.id &&
        fav.chapter === selectedChapter &&
        fav.verseNumber === verseNumber
    );
  };

  const handleCopyVerse = (verseNumber: number, verseText: string) => {
    if (!currentBook) return;
    const formatted = `«${verseText}» (${currentBook.name} ${selectedChapter}, ${verseNumber} — Bíblia CNBB)`;
    navigator.clipboard.writeText(formatted);
    setCopiedVerseNumber(verseNumber);
    showToast("Versículo copiado!");
    setTimeout(() => {
      setCopiedVerseNumber(null);
    }, 2000);
  };

  const currentBook = selectedBookId ? getBibleBook(selectedBookId) : null;
  const currentChapterData = currentBook
    ? getBibleChapter(currentBook.id, selectedChapter)
    : null;

  const filteredBooks = catholicCanonBooks.filter((book) => {
    if (testamentFilter !== "FAV" && book.testament !== testamentFilter) {
      return false;
    }
    if (categoryFilter !== "all" && book.category !== categoryFilter) {
      return false;
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const matchName = book.name.toLowerCase().includes(q);
      const matchAbbr = book.abbreviation.toLowerCase().includes(q);
      const matchDesc = book.description.toLowerCase().includes(q);
      return matchName || matchAbbr || matchDesc;
    }
    return true;
  });

  const availableCategories: BibleCategory[] =
    testamentFilter === "AT"
      ? ["pentateuco", "historicos", "sapienciais", "profeticos"]
      : testamentFilter === "NT"
      ? ["evangelhos", "atos", "cartas_paulinas", "cartas_catolicas", "apocalipse"]
      : [];

  const handleSelectBook = (book: BibleBook) => {
    setSelectedBookId(book.id);
    setSelectedChapter(1);
    setIsChapterSelectorOpen(false);
  };

  const handleNextChapter = () => {
    if (!currentBook) return;
    if (selectedChapter < currentBook.totalChapters) {
      setSelectedChapter(selectedChapter + 1);
    }
  };

  const handlePrevChapter = () => {
    if (selectedChapter > 1) {
      setSelectedChapter(selectedChapter - 1);
    }
  };

  return (
    <div className="space-y-5 max-w-xl mx-auto px-4 pt-2 pb-24">
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-[#0d1527] text-[#fef08a] border border-[#d4af37]/40 shadow-xl rounded-full text-xs font-bold animate-in fade-in slide-in-from-top-3 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] via-[#142347] to-[#1e3a8a] text-white p-5 sm:p-6 shadow-xl border border-[#d4af37]/35 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 rounded-full bg-[#d4af37]/15 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-base sm:text-lg font-black text-white leading-snug tracking-tight">
              Tradução oficial — Conferência Nacional dos Bispos do Brasil (CNBB)
            </h1>

            {onBackToLiturgy && (
              <button
                onClick={onBackToLiturgy}
                className="text-xs text-white/80 hover:text-white flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full border border-white/15 transition-all cursor-pointer shrink-0"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Voltar à Liturgia</span>
              </button>
            )}
          </div>

          <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#fef08a]">
            <span>{cnbbCanonDescription}</span>
          </div>
        </div>
      </div>

      {currentBook && currentChapterData ? (
        <div className="space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between gap-2 bg-white rounded-2xl p-3 border border-[#e2d9c8] shadow-sm">
            <button
              onClick={() => setSelectedBookId(null)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:text-[#0d1527] py-1.5 px-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Índice de Livros</span>
            </button>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center bg-gray-100 rounded-xl p-0.5 border border-gray-200 text-xs">
                <button
                  onClick={() => setFontSize("sm")}
                  className={`px-2 py-1 rounded-lg font-bold cursor-pointer transition-all ${
                    fontSize === "sm" ? "bg-white text-[#0d1527] shadow-sm" : "text-gray-500"
                  }`}
                  title="Fonte pequena"
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize("base")}
                  className={`px-2 py-1 rounded-lg font-bold cursor-pointer transition-all ${
                    fontSize === "base" ? "bg-white text-[#0d1527] shadow-sm" : "text-gray-500"
                  }`}
                  title="Fonte padrão"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize("lg")}
                  className={`px-2 py-1 rounded-lg font-bold cursor-pointer transition-all ${
                    fontSize === "lg" ? "bg-white text-[#0d1527] shadow-sm" : "text-gray-500"
                  }`}
                  title="Fonte grande"
                >
                  A+
                </button>
              </div>

              <button
                onClick={() => setReadingTheme(readingTheme === "creme" ? "escuro" : "creme")}
                className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                  readingTheme === "creme"
                    ? "bg-[#faf7f0] border-[#d8cfbe] text-[#854d0e]"
                    : "bg-[#0d1527] border-[#1e3a8a] text-white"
                }`}
                title="Alternar tema de leitura"
              >
                {readingTheme === "creme" ? "☀️ Creme" : "🌙 Noite"}
              </button>
            </div>
          </div>

          <div
            className={`rounded-3xl p-6 sm:p-7 border shadow-md space-y-5 transition-colors ${
              readingTheme === "creme"
                ? "bg-[#fcfaf6] border-[#d4af37]/35 text-[#1c1917]"
                : "bg-[#0d1527] border-[#1e3a8a]/50 text-white"
            }`}
          >
            <div className="border-b pb-4 flex flex-col gap-2.5 border-current/15">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="gold">{currentBook.categoryLabel}</Badge>
                  {currentBook.isDeuterocanonical && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-900 border border-amber-500/40">
                      Livro Deuterocanônico
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold opacity-70">
                  {cnbbOfficialBadge}
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-2 pt-1">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight">
                    {currentBook.name}
                  </h2>
                  <p className="text-xs opacity-75 font-serif italic mt-0.5">
                    {currentBook.description}
                  </p>
                </div>

                <button
                  onClick={() => setIsChapterSelectorOpen(!isChapterSelectorOpen)}
                  className="px-3 py-1.5 rounded-xl border border-current/25 font-bold text-xs flex items-center gap-1.5 hover:bg-current/10 cursor-pointer shrink-0"
                >
                  <span>Capítulo {selectedChapter}</span>
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </button>
              </div>

              {isChapterSelectorOpen && (
                <div className="pt-3 border-t border-current/15 animate-in fade-in">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">
                    Selecione o Capítulo:
                  </div>
                  <div className="grid grid-cols-6 sm:grid-cols-10 gap-1.5 max-h-48 overflow-y-auto p-1 custom-scrollbar">
                    {Array.from({ length: currentBook.totalChapters }, (_, i) => i + 1).map((ch) => (
                      <button
                        key={ch}
                        onClick={() => {
                          setSelectedChapter(ch);
                          setIsChapterSelectorOpen(false);
                        }}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          ch === selectedChapter
                            ? "bg-[#d4af37] text-[#0d1527] shadow-sm scale-105"
                            : "bg-current/5 hover:bg-current/15 border border-current/10"
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className={`rounded-2xl border transition-all ${
                readingTheme === "creme"
                  ? "border-[#d4af37]/45 bg-gradient-to-br from-[#faf8f4] via-[#f7f2e7] to-[#f2e8d5] text-[#1c1917]"
                  : "border-[#d4af37]/40 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e1b4b] text-white"
              }`}
            >
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🕊️</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ca8a04]">
                        Orações Introdutórias • Preparação do Coração
                      </h3>
                      <p className="text-[11px] opacity-75 font-serif italic mt-0.5">
                        Reze antes de abrir as Sagradas Escrituras para acolher a Palavra de Deus com docilidade
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowIntroPrayers(!showIntroPrayers)}
                    className="px-2.5 py-1 rounded-lg border border-current/25 text-[11px] font-bold hover:bg-current/10 transition-colors cursor-pointer shrink-0"
                  >
                    {showIntroPrayers ? "Ocultar Orações" : "Ver Orações"}
                  </button>
                </div>

                {showIntroPrayers && (
                  <div className="space-y-3 pt-4 border-t border-current/15 mt-3 animate-in fade-in">
                    {bibleIntroductoryPrayers.map((prayer) => (
                      <div
                        key={prayer.id}
                        className={`rounded-xl border p-3.5 sm:p-4 space-y-2.5 shadow-xs ${
                          readingTheme === "creme"
                            ? "bg-white/95 border-[#d4af37]/35 text-[#1c1917]"
                            : "bg-white/5 border-white/10 text-white"
                        }`}
                      >
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#ca8a04]">
                            {prayer.title}
                          </h4>
                          <p className="text-[11px] opacity-70 italic font-serif">
                            {prayer.subtitle}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-current/10">
                          <div>
                            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-0.5">
                              🇧🇷 Português:
                            </span>
                            <p className="text-xs sm:text-sm font-serif leading-relaxed whitespace-pre-line opacity-95">
                              {prayer.portuguese}
                            </p>
                          </div>

                          <div className="pt-1.5 border-t border-dashed border-current/10">
                            <span className="text-[10px] font-bold text-[#ca8a04] uppercase tracking-wider block mb-0.5">
                              📜 Latim:
                            </span>
                            <p className="text-xs sm:text-sm font-serif italic leading-relaxed whitespace-pre-line opacity-80">
                              {prayer.latin}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-current/15 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-serif font-black text-base sm:text-lg">
                  {currentBook.name}, Capítulo {selectedChapter} — Texto Sagrado Completo
                </h3>
              </div>
              {currentChapterData.verses.length > 0 ? (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#ca8a04]">
                  Versículos 1 ao {currentChapterData.verses.length} na íntegra
                </span>
              ) : (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-700 dark:text-amber-300">
                  Edição Oficial CNBB
                </span>
              )}
            </div>

            {currentChapterData.verses.length > 0 ? (
              <div
                className={`space-y-3 font-serif leading-loose tracking-wide ${
                  fontSize === "sm"
                    ? "text-sm"
                    : fontSize === "base"
                    ? "text-base sm:text-lg"
                    : "text-lg sm:text-xl"
                }`}
              >
                {currentChapterData.verses.map((verse) => {
                  const isFav = isVerseFavorited(verse.number);
                  const isCopied = copiedVerseNumber === verse.number;

                  return (
                    <div
                      key={verse.number}
                      className={`group relative rounded-xl p-2 sm:p-2.5 transition-all ${
                        isFav
                          ? readingTheme === "creme"
                            ? "bg-amber-100/60 border border-amber-300/60"
                            : "bg-amber-950/40 border border-amber-500/40"
                          : "hover:bg-current/5"
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="flex-1">
                          <span className="font-bold text-[#d4af37] select-none text-xs sm:text-sm mr-2 align-super">
                            {verse.number}
                          </span>
                          <span>{verse.text}</span>
                        </p>

                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 sm:opacity-40 transition-opacity shrink-0">
                          <button
                            onClick={() => toggleFavoriteVerse(verse.number, verse.text)}
                            className="p-1 rounded-md hover:bg-current/15 transition-colors cursor-pointer"
                            title={isFav ? "Remover dos favoritos" : "Salvar versículo"}
                          >
                            {isFav ? (
                              <BookmarkCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                            ) : (
                              <Bookmark className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <button
                            onClick={() => handleCopyVerse(verse.number, verse.text)}
                            className="p-1 rounded-md hover:bg-current/15 transition-colors cursor-pointer"
                            title="Copiar citação"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Share2 className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-12 px-6 rounded-2xl border border-dashed border-current/25 text-center space-y-3 my-4">
                <span className="text-3xl">📖</span>
                <h4 className="text-base sm:text-lg font-bold font-serif">
                  {currentBook.name}, Capítulo {selectedChapter}
                </h4>
                <p className="text-xs sm:text-sm opacity-80 max-w-md mx-auto font-serif">
                  A versão integral oficial da CNBB deste capítulo está sendo sincronizada para leitura versículo por versículo, preservando a fidelidade da Sagrada Escritura sem cortes nem substituições.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-500/30">
                    Evangelho de São Mateus Disponível na Íntegra (Caps. 1 a 7, 18, 25, 28)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#d4af37]/15 text-[#ca8a04] font-semibold border border-[#d4af37]/30">
                    São Marcos 7 na Íntegra
                  </span>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-current/15 flex items-center justify-between gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={handlePrevChapter}
                disabled={selectedChapter <= 1}
                leftIcon={<ChevronLeft className="w-4 h-4" />}
              >
                Capítulo anterior
              </Button>

              <span className="text-xs font-serif italic opacity-70">
                {currentBook.name} {selectedChapter} de {currentBook.totalChapters}
              </span>

              <Button
                variant="secondary"
                size="sm"
                onClick={handleNextChapter}
                disabled={selectedChapter >= currentBook.totalChapters}
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                Próximo capítulo
              </Button>
            </div>

            <div className="text-center pt-2 text-[11px] opacity-60 font-medium">
              Texto Sagrado Oficial — CNBB (Conferência Nacional dos Bispos do Brasil)
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-1 p-1 bg-white rounded-2xl border border-[#e2d9c8] shadow-sm">
            <button
              onClick={() => {
                setTestamentFilter("AT");
                setCategoryFilter("all");
              }}
              className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                testamentFilter === "AT"
                  ? "bg-[#0d1527] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Antigo Testamento (46)
            </button>

            <button
              onClick={() => {
                setTestamentFilter("NT");
                setCategoryFilter("all");
              }}
              className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                testamentFilter === "NT"
                  ? "bg-[#0d1527] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Novo Testamento (27)
            </button>

            <button
              onClick={() => setTestamentFilter("FAV")}
              className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                testamentFilter === "FAV"
                  ? "bg-[#0d1527] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Favoritos ({favorites.length})</span>
            </button>
          </div>

          {testamentFilter !== "FAV" && (
            <>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar livro por nome ou sigla (ex: Mt, Tb, Is, Sl)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#e2d9c8] bg-white text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#1e3a8a] shadow-sm"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                <button
                  onClick={() => setCategoryFilter("all")}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    categoryFilter === "all"
                      ? "bg-[#1e3a8a] text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  Todos os livros
                </button>

                {availableCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      categoryFilter === cat
                        ? "bg-[#1e3a8a] text-white shadow-sm"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredBooks.map((book) => (
                  <button
                    key={book.id}
                    onClick={() => handleSelectBook(book)}
                    className="p-4 rounded-2xl bg-white border border-[#e2d9c8] hover:border-[#d4af37] shadow-sm text-left transition-all hover:scale-[1.01] cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="space-y-1 w-full">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-sm text-[#0d1527] group-hover:text-[#1e3a8a]">
                          {book.name}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            {book.abbreviation}
                          </span>
                          {book.isDeuterocanonical && (
                            <span className="text-[9px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300 px-1.5 py-0.5 rounded-md">
                              Deut.
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 line-clamp-2 font-serif">
                        {book.description}
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 w-full">
                      <span className="font-medium">{book.categoryLabel}</span>
                      <span className="font-bold text-[#1e3a8a] flex items-center gap-0.5">
                        <span>{book.totalChapters} cap.</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {filteredBooks.length === 0 && (
                <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-gray-300 space-y-2">
                  <p className="text-sm font-bold text-gray-700">
                    Nenhum livro encontrado para essa busca.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setCategoryFilter("all");
                    }}
                  >
                    Limpar filtros
                  </Button>
                </div>
              )}
            </>
          )}

          {testamentFilter === "FAV" && (
            <div className="space-y-3">
              {favorites.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-3xl border border-[#e2d9c8] shadow-sm space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 text-[#d4af37] flex items-center justify-center">
                    <Bookmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0d1527]">
                      Nenhum versículo salvo ainda
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                      Ao ler qualquer capítulo da Bíblia CNBB, clique no ícone de marcador para guardar seus versículos prediletos para oração.
                    </p>
                  </div>
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => setTestamentFilter("NT")}
                  >
                    Explorar Evangelhos
                  </Button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between px-1 text-xs text-gray-500 font-medium">
                    <span>Versículos marcados para meditação:</span>
                    <span>{favorites.length} salvos</span>
                  </div>

                  {favorites.map((fav) => (
                    <div
                      key={fav.id}
                      className="p-4 rounded-2xl bg-white border border-[#d4af37]/35 shadow-sm space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#1e3a8a]">
                          {fav.bookName} {fav.chapter}, {fav.verseNumber}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              setSelectedBookId(fav.bookId);
                              setSelectedChapter(fav.chapter);
                            }}
                            className="text-[11px] font-bold text-gray-600 hover:text-[#0d1527] px-2 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors"
                          >
                            Ler capítulo
                          </button>
                          <button
                            onClick={() => toggleFavoriteVerse(fav.verseNumber, fav.text)}
                            className="p-1 rounded-lg text-red-500 hover:bg-red-50 cursor-pointer transition-colors"
                            title="Remover"
                          >
                            <BookmarkCheck className="w-4 h-4 text-[#d4af37]" />
                          </button>
                        </div>
                      </div>

                      <p className="text-sm font-serif italic text-gray-800 leading-relaxed pl-3 border-l-2 border-[#d4af37]">
                        «{fav.text}»
                      </p>

                      <div className="text-[10px] text-gray-400 text-right">
                        {cnbbOfficialBadge}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
