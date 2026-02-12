"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "id";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const saved = window.localStorage.getItem("athena-language");
    return saved === "id" || saved === "en" ? saved : "en";
  });

  const handleSetLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("athena-language", nextLanguage);
  };

  const value = useMemo(
    () => ({ language, setLanguage: handleSetLanguage }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
