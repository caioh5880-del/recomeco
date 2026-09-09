"use client";

import React, { useState } from "react";
import { TabType, AuthMode } from "@/lib/types";
import { AuthProvider } from "@/lib/context/AuthContext";
import { useUserStats } from "@/lib/hooks/useUserStats";
import { Header } from "./layout/Header";
import { BottomNav } from "./layout/BottomNav";
import { BattleButton } from "./layout/BattleButton";
import { HomeView } from "./home/HomeView";
import { WordView } from "./word/WordView";
import { PrayersView } from "./prayers/PrayersView";
import { RecomecoView } from "./recomeco/RecomecoView";
import { ProfileView } from "./profile/ProfileView";
import { BattleModeModal } from "./battle/BattleModeModal";
import { FallRecoveryModal } from "./recomeco/FallRecoveryModal";
import { PlusModal } from "./plus/PlusModal";
import { AuthModal } from "./auth/AuthModal";

function RecomecoAppContent() {
  const [currentTab, setCurrentTab] = useState<TabType>("home");
  const [isBattleOpen, setIsBattleOpen] = useState(false);
  const [isRecoveryOpen, setIsRecoveryOpen] = useState(false);
  const [isPlusOpen, setIsPlusOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  const {
    stats,
    togglePrayerCompletion,
    completeChallenge,
    completeTrailDay,
    registerBattleVictory,
    restartWalkAfterFall,
    togglePlus
  } = useUserStats();

  const handleOpenAuth = (mode: AuthMode = "login") => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#0d1527] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#0d1527]">
      <Header
        stats={stats}
        onOpenBattle={() => setIsBattleOpen(true)}
        onOpenPlus={() => setIsPlusOpen(true)}
        onOpenAuth={handleOpenAuth}
        onNavigateToTab={(tab) => setCurrentTab(tab)}
      />

      <main className="flex-1 w-full max-w-2xl mx-auto">
        {currentTab === "home" && (
          <HomeView
            stats={stats}
            onNavigateToTab={(tab) => setCurrentTab(tab)}
            onTogglePrayer={togglePrayerCompletion}
            onToggleChallenge={completeChallenge}
            onOpenBattle={() => setIsBattleOpen(true)}
          />
        )}

        {currentTab === "word" && <WordView />}

        {currentTab === "prayers" && (
          <PrayersView
            completedPrayers={stats.completedTodayPrayers}
            onTogglePrayer={togglePrayerCompletion}
          />
        )}

        {currentTab === "recomeco" && (
          <RecomecoView
            stats={stats}
            onCompleteTrailDay={completeTrailDay}
            onRestartWalk={restartWalkAfterFall}
          />
        )}

        {currentTab === "profile" && (
          <ProfileView
            stats={stats}
            onOpenPlus={() => setIsPlusOpen(true)}
            onOpenRecovery={() => setIsRecoveryOpen(true)}
            onOpenAuth={handleOpenAuth}
          />
        )}
      </main>

      <BattleButton onClick={() => setIsBattleOpen(true)} />

      <BottomNav
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
      />

      {isBattleOpen && (
        <BattleModeModal
          onVictory={registerBattleVictory}
          onOpenFallRecovery={() => setIsRecoveryOpen(true)}
          onClose={() => setIsBattleOpen(false)}
        />
      )}

      {isRecoveryOpen && (
        <FallRecoveryModal
          onRestart={restartWalkAfterFall}
          onClose={() => setIsRecoveryOpen(false)}
        />
      )}

      {isPlusOpen && (
        <PlusModal
          isSubscriber={stats.isPlusSubscriber}
          onToggleSubscribe={togglePlus}
          onClose={() => setIsPlusOpen(false)}
        />
      )}

      {isAuthOpen && (
        <AuthModal
          initialMode={authMode}
          onClose={() => setIsAuthOpen(false)}
        />
      )}
    </div>
  );
}

export function RecomecoApp() {
  return (
    <AuthProvider>
      <RecomecoAppContent />
    </AuthProvider>
  );
}
