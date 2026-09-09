import React from "react";
import { Shield } from "lucide-react";
import { UserStats } from "@/lib/types";
import { HomeGreeting } from "./HomeGreeting";
import { ComMariaCard } from "./ComMariaCard";
import { MessageForYouCard } from "./MessageForYouCard";
import { LiturgySummaryCard } from "./LiturgySummaryCard";
import { HomilyCard } from "./HomilyCard";
import { DailyOfferingCard } from "./DailyOfferingCard";
import { WalkingWithMaryCard } from "./WalkingWithMaryCard";
import { SaintOfTheDayCard } from "./SaintOfTheDayCard";
import { RecomecoProgressCard } from "./RecomecoProgressCard";

interface HomeViewProps {
  stats: UserStats;
  onNavigateToTab: (tab: "home" | "word" | "prayers" | "recomeco" | "profile") => void;
  onTogglePrayer: (prayerId: string) => void;
  onToggleChallenge: () => void;
  onOpenBattle: () => void;
}

export function HomeView({
  stats,
  onNavigateToTab,
  onTogglePrayer,
  onToggleChallenge,
  onOpenBattle
}: HomeViewProps) {
  const isOfferingCompleted = stats.completedTodayPrayers.includes("oferecimento-diario");

  return (
    <div className="space-y-5 pb-24 max-w-xl mx-auto px-4 pt-4">
      <HomeGreeting />

      <ComMariaCard />

      <MessageForYouCard />

      <LiturgySummaryCard onNavigateToWord={() => onNavigateToTab("word")} />

      <HomilyCard />

      <DailyOfferingCard
        isCompleted={isOfferingCompleted}
        onToggleCompleted={() => onTogglePrayer("oferecimento-diario")}
      />

      <WalkingWithMaryCard
        isCompleted={stats.challengeCompletedToday}
        onToggleChallenge={onToggleChallenge}
      />

      <SaintOfTheDayCard />

      <RecomecoProgressCard
        stats={stats}
        onNavigateToRecomeco={() => onNavigateToTab("recomeco")}
      />

      <div className="pt-2">
        <button
          onClick={onOpenBattle}
          className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-red-700 via-rose-800 to-[#1e3a8a] text-white flex items-center justify-between shadow-lg shadow-red-950/20 border border-red-400/30 hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="p-2 rounded-xl bg-white/20">
              <Shield className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-rose-200 font-bold">
                Momento de Tentação ou Angústia?
              </span>
              <span className="text-sm sm:text-base font-black tracking-tight">
                🛡️ MODO BATALHA — ESTOU SENDO TENTADO
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
