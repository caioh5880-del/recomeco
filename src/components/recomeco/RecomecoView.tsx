import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Heart } from "lucide-react";
import { marianTrailDays } from "@/lib/data/marianTrail";
import { MarianTrailDay, UserStats } from "@/lib/types";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { MarianTrailModal } from "./MarianTrailModal";
import { MarianCalendarSection } from "./MarianCalendarSection";
import { ConsecrationSection } from "./ConsecrationSection";
import { FallRecoveryModal } from "./FallRecoveryModal";

interface RecomecoViewProps {
  stats: UserStats;
  onCompleteTrailDay: (day: number) => void;
  onRestartWalk: () => void;
}

export function RecomecoView({
  stats,
  onCompleteTrailDay,
  onRestartWalk
}: RecomecoViewProps) {
  const [activeTab, setActiveTab] = useState<"trail" | "calendar" | "consecration">("trail");
  const [selectedDay, setSelectedDay] = useState<MarianTrailDay | null>(null);
  const [isRecoveryOpen, setIsRecoveryOpen] = useState(false);

  return (
    <div className="space-y-6 pb-28 max-w-xl mx-auto px-4 pt-4">
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] to-[#1e3a8a] text-white p-6 shadow-xl border border-[#d4af37]/35">
        <div className="flex items-center gap-2 text-[#fef08a] mb-2">
          <MarianRoseIcon className="w-5 h-5 text-[#facc15]" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Caminhada de Graça
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
          Recomeçar todos os dias
        </h2>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-4">
          A santidade é uma caminhada de passos perseverantes. Com Maria, aprendemos que cada nascer do sol traz uma nova chance de amar a Deus.
        </p>

        <button
          onClick={() => setIsRecoveryOpen(true)}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-rose-500/20 hover:bg-rose-500/30 border border-rose-300/30 text-rose-200 flex items-center justify-between transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-300" />
            <span>Tive uma queda ou preciso de alento?</span>
          </div>
          <span className="underline">Acolhimento aqui</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1.5 p-1 bg-white rounded-2xl border border-[#e2d9c8] shadow-sm">
        <button
          onClick={() => setActiveTab("trail")}
          className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            activeTab === "trail"
              ? "bg-[#0d1527] text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Trilha 7 Dias
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            activeTab === "calendar"
              ? "bg-[#0d1527] text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Calendário
        </button>
        <button
          onClick={() => setActiveTab("consecration")}
          className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            activeTab === "consecration"
              ? "bg-[#0d1527] text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Consagração
        </button>
      </div>

      {activeTab === "trail" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <div>
              <h3 className="text-base font-bold text-[#0d1527]">
                Trilha: Aprendendo com Maria
              </h3>
              <p className="text-xs text-gray-500">
                7 dias com Palavra, Maria, Oração e Ação concreta
              </p>
            </div>
            <span className="text-xs font-bold text-[#854d0e] bg-[#fef9c3] px-2.5 py-1 rounded-full border border-[#facc15]/40">
              {stats.completedTrailDays.length}/7 Concluídos
            </span>
          </div>

          <div className="space-y-2.5">
            {marianTrailDays.map((dayItem) => {
              const isCompleted = stats.completedTrailDays.includes(dayItem.day);
              return (
                <div
                  key={dayItem.day}
                  onClick={() => setSelectedDay(dayItem)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isCompleted
                      ? "bg-emerald-50/40 border-emerald-300"
                      : "bg-white border-[#e2d9c8] hover:border-[#d4af37] shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                        isCompleted
                          ? "bg-emerald-600 text-white"
                          : "bg-[#0d1527] text-white"
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : `D${dayItem.day}`}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-[#0d1527]">
                          Dia {dayItem.day} — {dayItem.themeTitle}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-1">
                        {dayItem.themeSubtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === "calendar" && <MarianCalendarSection />}

      {activeTab === "consecration" && <ConsecrationSection />}

      {selectedDay && (
        <MarianTrailModal
          dayData={selectedDay}
          isCompleted={stats.completedTrailDays.includes(selectedDay.day)}
          onCompleteDay={() => onCompleteTrailDay(selectedDay.day)}
          onClose={() => setSelectedDay(null)}
        />
      )}

      {isRecoveryOpen && (
        <FallRecoveryModal
          onRestart={onRestartWalk}
          onClose={() => setIsRecoveryOpen(false)}
        />
      )}
    </div>
  );
}
