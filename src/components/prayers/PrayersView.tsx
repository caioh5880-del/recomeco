import React, { useState } from "react";
import {
  Sun,
  Moon,
  Cross,
  Sparkles,
  ChevronRight,
  Search,
  CheckCircle,
  Circle
} from "lucide-react";
import { prayersList } from "@/lib/data/prayers";
import { Prayer, PrayerCategory } from "@/lib/types";
import { MarianRoseIcon, MarianLilyIcon } from "../ui/MarianRoseIcon";
import { PrayerDetailModal } from "./PrayerDetailModal";
import { MarianCentralSection } from "./MarianCentralSection";
import { RosaryInteractiveModal } from "../rosary/RosaryInteractiveModal";
import { Button } from "../ui/Button";

interface PrayersViewProps {
  completedPrayers: string[];
  onTogglePrayer: (id: string) => void;
}

export function PrayersView({ completedPrayers, onTogglePrayer }: PrayersViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<PrayerCategory | "all" | "central">("marian");
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);
  const [isRosaryOpen, setIsRosaryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrayers = prayersList.filter((prayer) => {
    const matchesCategory =
      selectedCategory === "all" ||
      selectedCategory === "central" ||
      prayer.category === selectedCategory;
    const matchesSearch =
      prayer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prayer.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-28 max-w-xl mx-auto px-4 pt-4">
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] to-[#1e3a8a] text-white p-6 shadow-xl border border-[#d4af37]/35">
        <div className="flex items-center gap-2 text-[#fef08a] mb-2">
          <MarianRoseIcon className="w-5 h-5 text-[#facc15]" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Biblioteca de Oração
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
          Rezar é aprender a amar
        </h2>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-4">
          Com Maria, aprendemos a fazer da nossa oração um diálogo sincero e filial com Deus.
        </p>

        <Button
          variant="gold"
          size="md"
          onClick={() => setIsRosaryOpen(true)}
          className="w-full justify-between"
          leftIcon={<MarianLilyIcon className="w-5 h-5 text-[#0d1527]" />}
          rightIcon={<ChevronRight className="w-4 h-4 text-[#0d1527]" />}
        >
          Rezar o Santo Rosário / Terço Interativo
        </Button>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
        <button
          onClick={() => setSelectedCategory("marian")}
          className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedCategory === "marian"
              ? "bg-[#1e3a8a] text-white shadow-sm"
              : "bg-white text-[#1e3a8a] border border-[#1e3a8a]/30"
          }`}
        >
          <MarianRoseIcon className="w-3.5 h-3.5" />
          <span>Com Nossa Senhora</span>
        </button>

        <button
          onClick={() => setSelectedCategory("central")}
          className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedCategory === "central"
              ? "bg-[#0d1527] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Central Mariana</span>
        </button>

        <button
          onClick={() => setSelectedCategory("morning")}
          className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedCategory === "morning"
              ? "bg-[#0d1527] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Começar o dia</span>
        </button>

        <button
          onClick={() => setSelectedCategory("night")}
          className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedCategory === "night"
              ? "bg-[#0d1527] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          <span>Terminar o dia</span>
        </button>

        <button
          onClick={() => setSelectedCategory("traditional")}
          className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedCategory === "traditional"
              ? "bg-[#0d1527] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          <Cross className="w-3.5 h-3.5 text-blue-500" />
          <span>Tradicionais</span>
        </button>

        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedCategory === "all"
              ? "bg-[#0d1527] text-white shadow-sm"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          Todas
        </button>
      </div>

      {selectedCategory === "central" ? (
        <MarianCentralSection />
      ) : (
        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar oração pelo nome..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#e2d9c8] rounded-2xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-[#0d1527] placeholder:text-gray-400 focus:outline-none focus:border-[#1e3a8a] shadow-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="space-y-2.5">
            {filteredPrayers.map((prayer) => {
              const isCompleted = completedPrayers.includes(prayer.id);
              return (
                <div
                  key={prayer.id}
                  className={`rounded-2xl border p-4 sm:p-5 transition-all flex items-center justify-between gap-3 ${
                    isCompleted
                      ? "bg-emerald-50/40 border-emerald-300"
                      : "bg-white border-[#e2d9c8] hover:border-[#d4af37] shadow-sm"
                  }`}
                >
                  <div
                    onClick={() => setSelectedPrayer(prayer)}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-[#0d1527]">
                        {prayer.title}
                      </h4>
                      {prayer.latinTitle && (
                        <span className="text-[10px] text-gray-400 italic font-serif hidden sm:inline">
                          ({prayer.latinTitle})
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-1">
                      {prayer.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onTogglePrayer(prayer.id)}
                      title={isCompleted ? "Marcada como rezada" : "Marcar como rezada"}
                      className="p-1.5 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-300" />
                      )}
                    </button>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setSelectedPrayer(prayer)}
                      className="text-xs"
                    >
                      Rezar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedPrayer && (
        <PrayerDetailModal
          prayer={selectedPrayer}
          isCompleted={completedPrayers.includes(selectedPrayer.id)}
          onToggleCompleted={() => onTogglePrayer(selectedPrayer.id)}
          onClose={() => setSelectedPrayer(null)}
        />
      )}

      {isRosaryOpen && (
        <RosaryInteractiveModal onClose={() => setIsRosaryOpen(false)} />
      )}
    </div>
  );
}
