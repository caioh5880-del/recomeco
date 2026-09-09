"use client";

import { useState, useEffect } from "react";
import { UserStats } from "../types";

const STATS_STORAGE_KEY = "recomeco_user_stats_v1";

const defaultStats: UserStats = {
  streakDays: 4,
  completedPrayersCount: 12,
  victoriesInBattle: 5,
  completedTrailDays: [1, 2],
  completedTodayPrayers: ["oferecimento-diario"],
  challengeCompletedToday: false,
  isPlusSubscriber: false
};

export function useUserStats() {
  const [stats, setStats] = useState<UserStats>(defaultStats);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STATS_STORAGE_KEY);
      if (stored) {
        const parsed: UserStats = JSON.parse(stored);
        queueMicrotask(() => {
          setStats(parsed);
        });
      }
    } catch {
      return;
    }
  }, []);

  const saveStats = (updated: UserStats) => {
    setStats(updated);
    try {
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      return;
    }
  };

  const togglePrayerCompletion = (prayerId: string) => {
    const isCompleted = stats.completedTodayPrayers.includes(prayerId);
    let updatedPrayers: string[];
    let countDelta = 0;

    if (isCompleted) {
      updatedPrayers = stats.completedTodayPrayers.filter((id) => id !== prayerId);
      countDelta = -1;
    } else {
      updatedPrayers = [...stats.completedTodayPrayers, prayerId];
      countDelta = 1;
    }

    const updated: UserStats = {
      ...stats,
      completedTodayPrayers: updatedPrayers,
      completedPrayersCount: Math.max(0, stats.completedPrayersCount + countDelta)
    };
    saveStats(updated);
  };

  const completeChallenge = () => {
    const updated: UserStats = {
      ...stats,
      challengeCompletedToday: !stats.challengeCompletedToday
    };
    saveStats(updated);
  };

  const completeTrailDay = (day: number) => {
    if (stats.completedTrailDays.includes(day)) return;
    const updated: UserStats = {
      ...stats,
      completedTrailDays: [...stats.completedTrailDays, day]
    };
    saveStats(updated);
  };

  const registerBattleVictory = () => {
    const updated: UserStats = {
      ...stats,
      victoriesInBattle: stats.victoriesInBattle + 1
    };
    saveStats(updated);
  };

  const restartWalkAfterFall = () => {
    const updated: UserStats = {
      ...stats,
      challengeCompletedToday: false
    };
    saveStats(updated);
  };

  const togglePlus = () => {
    const updated: UserStats = {
      ...stats,
      isPlusSubscriber: !stats.isPlusSubscriber
    };
    saveStats(updated);
  };

  return {
    stats,
    togglePrayerCompletion,
    completeChallenge,
    completeTrailDay,
    registerBattleVictory,
    restartWalkAfterFall,
    togglePlus
  };
}
