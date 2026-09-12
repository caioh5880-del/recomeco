"use client";

import React, { useState } from "react";
import { UserStats } from "@/lib/types";
import { HomeGreeting } from "./HomeGreeting";
import { RecomecoProgressCard } from "./RecomecoProgressCard";
import { ComMariaCard } from "./ComMariaCard";
import { HourlyPrayersCard } from "./HourlyPrayersCard";
import { WalkingWithMaryCard } from "./WalkingWithMaryCard";
import { RosaryInteractiveModal } from "../rosary/RosaryInteractiveModal";

interface HomeViewProps {
  stats: UserStats;
  onNavigateToTab: (tab: "home" | "word" | "prayers" | "recomeco" | "profile") => void;
  onTogglePrayer: (prayerId: string) => void;
  onToggleChallenge?: () => void;
  onOpenBattle?: () => void;
}

export function HomeView({
  stats,
  onNavigateToTab,
  onTogglePrayer
}: HomeViewProps) {
  const [isRosaryOpen, setIsRosaryOpen] = useState(false);

  return (
    <div className="space-y-5 pb-24 max-w-xl mx-auto px-4 pt-4">
      <HomeGreeting />

      <RecomecoProgressCard
        stats={stats}
        onNavigateToRecomeco={() => onNavigateToTab("recomeco")}
      />

      <ComMariaCard />

      <HourlyPrayersCard
        completedPrayers={stats.completedTodayPrayers}
        onTogglePrayer={onTogglePrayer}
      />

      <WalkingWithMaryCard onOpenRosary={() => setIsRosaryOpen(true)} />

      {isRosaryOpen && (
        <RosaryInteractiveModal onClose={() => setIsRosaryOpen(false)} />
      )}
    </div>
  );
}
