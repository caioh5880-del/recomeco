"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { UserStats } from "../types";
import { useAuth } from "../context/AuthContext";
import { getSupabaseBrowserClient } from "../supabase/client";

const STATS_STORAGE_KEY = "recomeco_user_stats_v2";

const cleanStats: UserStats = {
  streakDays: 0,
  completedPrayersCount: 0,
  victoriesInBattle: 0,
  completedTrailDays: [],
  completedTodayPrayers: [],
  challengeCompletedToday: false,
  isPlusSubscriber: false,
  lastActivityDate: new Date().toISOString().split("T")[0]
};

export function useUserStats() {
  const { user, isConfigured } = useAuth();
  const [stats, setStats] = useState<UserStats>(cleanStats);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const currentUserIdRef = useRef<string | null>(null);

  const getLocalDate = () => new Date().toISOString().split("T")[0];

  const loadLocalStats = useCallback((): UserStats => {
    try {
      const stored = localStorage.getItem(STATS_STORAGE_KEY);
      if (stored) {
        const parsed: UserStats = JSON.parse(stored);
        const today = getLocalDate();
        if (parsed.lastActivityDate && parsed.lastActivityDate !== today) {
          return {
            ...parsed,
            completedTodayPrayers: [],
            challengeCompletedToday: false,
            lastActivityDate: today
          };
        }
        return parsed;
      }
    } catch {
      return cleanStats;
    }
    return cleanStats;
  }, []);

  const saveLocalStats = (updated: UserStats) => {
    try {
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      return;
    }
  };

  const saveCloudStats = useCallback(async (userId: string, updated: UserStats) => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    try {
      await supabase.from("user_spiritual_stats").upsert({
        user_id: userId,
        streak_days: updated.streakDays,
        completed_prayers_count: updated.completedPrayersCount,
        victories_in_battle: updated.victoriesInBattle,
        completed_trail_days: updated.completedTrailDays,
        completed_today_prayers: updated.completedTodayPrayers,
        challenge_completed_today: updated.challengeCompletedToday,
        is_plus_subscriber: updated.isPlusSubscriber,
        last_activity_date: updated.lastActivityDate || getLocalDate(),
        updated_at: new Date().toISOString()
      });
    } catch {
      return;
    }
  }, []);

  const loadCloudStats = useCallback(async (userId: string) => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    try {
      const { data, error } = await supabase
        .from("user_spiritual_stats")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) {
        return;
      }

      const today = getLocalDate();

      if (data) {
        const isNewDay = data.last_activity_date && data.last_activity_date !== today;
        const cloudStats: UserStats = {
          streakDays: data.streak_days ?? 0,
          completedPrayersCount: data.completed_prayers_count ?? 0,
          victoriesInBattle: data.victories_in_battle ?? 0,
          completedTrailDays: data.completed_trail_days ?? [],
          completedTodayPrayers: isNewDay ? [] : (data.completed_today_prayers ?? []),
          challengeCompletedToday: isNewDay ? false : (data.challenge_completed_today ?? false),
          isPlusSubscriber: data.is_plus_subscriber ?? false,
          lastActivityDate: today
        };
        setStats(cloudStats);

        if (isNewDay) {
          saveCloudStats(userId, cloudStats);
        }
      } else {
        const local = loadLocalStats();
        const initialUserStats: UserStats = {
          ...local,
          lastActivityDate: today
        };
        setStats(initialUserStats);
        await saveCloudStats(userId, initialUserStats);
      }
    } catch {
      return;
    } finally {
      setIsLoadingStats(false);
    }
  }, [loadLocalStats, saveCloudStats]);

  useEffect(() => {
    if (!user) {
      currentUserIdRef.current = null;
      queueMicrotask(() => {
        const local = loadLocalStats();
        setStats(local);
        setIsLoadingStats(false);
      });
      return;
    }

    if (currentUserIdRef.current !== user.id) {
      currentUserIdRef.current = user.id;
      queueMicrotask(() => {
        setIsLoadingStats(true);
      });
      loadCloudStats(user.id);
    }
  }, [user, isConfigured, loadLocalStats, loadCloudStats]);

  const persistStats = (updated: UserStats) => {
    setStats(updated);
    if (user) {
      saveCloudStats(user.id, updated);
    } else {
      saveLocalStats(updated);
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
      completedPrayersCount: Math.max(0, stats.completedPrayersCount + countDelta),
      streakDays: Math.max(stats.streakDays, updatedPrayers.length > 0 ? Math.max(1, stats.streakDays) : stats.streakDays),
      lastActivityDate: getLocalDate()
    };
    persistStats(updated);
  };

  const completeChallenge = () => {
    const nextState = !stats.challengeCompletedToday;
    const updated: UserStats = {
      ...stats,
      challengeCompletedToday: nextState,
      streakDays: nextState ? Math.max(1, stats.streakDays) : stats.streakDays,
      lastActivityDate: getLocalDate()
    };
    persistStats(updated);
  };

  const completeTrailDay = (day: number) => {
    if (stats.completedTrailDays.includes(day)) return;
    const updated: UserStats = {
      ...stats,
      completedTrailDays: [...stats.completedTrailDays, day],
      lastActivityDate: getLocalDate()
    };
    persistStats(updated);
  };

  const registerBattleVictory = () => {
    const updated: UserStats = {
      ...stats,
      victoriesInBattle: stats.victoriesInBattle + 1,
      lastActivityDate: getLocalDate()
    };
    persistStats(updated);
  };

  const restartWalkAfterFall = () => {
    const updated: UserStats = {
      ...stats,
      challengeCompletedToday: false,
      lastActivityDate: getLocalDate()
    };
    persistStats(updated);
  };

  const togglePlus = () => {
    const updated: UserStats = {
      ...stats,
      isPlusSubscriber: !stats.isPlusSubscriber
    };
    persistStats(updated);
  };

  const activatePlus = (active = true) => {
    const updated: UserStats = {
      ...stats,
      isPlusSubscriber: active
    };
    persistStats(updated);
  };

  return {
    stats,
    isLoadingStats,
    togglePrayerCompletion,
    completeChallenge,
    completeTrailDay,
    registerBattleVictory,
    restartWalkAfterFall,
    togglePlus,
    activatePlus
  };
}
