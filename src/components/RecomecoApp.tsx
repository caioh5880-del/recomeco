"use client";

import React, { useState } from "react";
import { TabType, AuthMode } from "@/lib/types";
import { AuthProvider } from "@/lib/context/AuthContext";
import { PrayerLanguageProvider } from "@/lib/context/PrayerLanguageContext";
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
import { PlusView } from "./plus/PlusView";
import { AuthModal } from "./auth/AuthModal";

function RecomecoAppContent() {
  const [currentTab, setCurrentTab] = useState<TabType>("home");
  const [isBattleOpen, setIsBattleOpen] = useState(false);
  const [isRecoveryOpen, setIsRecoveryOpen] = useState(false);
  const [isPlusOpen, setIsPlusOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [successCelebration, setSuccessCelebration] = useState<string | null>(null);

  const {
    stats,
    togglePrayerCompletion,
    completeChallenge,
    completeTrailDay,
    registerBattleVictory,
    restartWalkAfterFall,
    activatePlus
  } = useUserStats();

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const urlParams = new URLSearchParams(window.location.search);
    const isSuccess = urlParams.get("plus_success");
    const sessionId = urlParams.get("session_id");
    const isCanceled = urlParams.get("plus_canceled");

    if (isCanceled === "true") {
      setSuccessCelebration("A operação de assinatura foi cancelada. Nenhum valor foi cobrado.");
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }

    if (isSuccess === "true" && sessionId) {
      fetch("/api/stripe/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.verified === true) {
            activatePlus(true);
            setSuccessCelebration(
              "🎉 Pagamento confirmado pela Stripe! O Recomeço Plus foi liberado com sucesso no seu perfil."
            );
          } else {
            setSuccessCelebration(
              "⚠️ Pagamento pendente ou não confirmado pela Stripe. O acesso só será liberado após a confirmação do pagamento."
            );
          }
        })
        .catch(() => {
          setSuccessCelebration(
            "⚠️ Não foi possível validar a confirmação do pagamento com a Stripe no momento."
          );
        })
        .finally(() => {
          window.history.replaceState({}, document.title, window.location.pathname);
        });
    } else if (isSuccess === "true" && !sessionId) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [activatePlus]);

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

      {successCelebration && (
        <div className="max-w-xl mx-auto w-full px-4 pt-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg flex items-center justify-between gap-3 animate-in fade-in">
            <span className="text-xs sm:text-sm font-bold leading-relaxed">
              {successCelebration}
            </span>
            <button
              onClick={() => setSuccessCelebration(null)}
              className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs px-2.5 py-1 font-bold cursor-pointer shrink-0"
            >
              OK
            </button>
          </div>
        </div>
      )}

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
            onOpenPlus={() => setIsPlusOpen(true)}
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

        {currentTab === "plus" && (
          <PlusView
            stats={stats}
            onNavigateToTab={(tab) => setCurrentTab(tab)}
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
          onOpenAuth={handleOpenAuth}
          onSuccessSubscribe={() => activatePlus(true)}
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
      <PrayerLanguageProvider>
        <RecomecoAppContent />
      </PrayerLanguageProvider>
    </AuthProvider>
  );
}
