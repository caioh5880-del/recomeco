"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type PrayerLanguage = "pt" | "la";

interface PrayerLanguageContextType {
  language: PrayerLanguage;
  setLanguage: (lang: PrayerLanguage) => void;
  toggleLanguage: () => void;
}

const PrayerLanguageContext = createContext<PrayerLanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  toggleLanguage: () => {}
});

const STORAGE_KEY = "recomeco_prayer_language";

export function PrayerLanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<PrayerLanguage>("pt");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY) as PrayerLanguage | null;
      if (saved === "pt" || saved === "la") {
        setLanguageState(saved);
      }
    }
  }, []);

  const setLanguage = (lang: PrayerLanguage) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const toggleLanguage = () => {
    const next = language === "pt" ? "la" : "pt";
    setLanguage(next);
  };

  return (
    <PrayerLanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </PrayerLanguageContext.Provider>
  );
}

export function usePrayerLanguage() {
  return useContext(PrayerLanguageContext);
}
