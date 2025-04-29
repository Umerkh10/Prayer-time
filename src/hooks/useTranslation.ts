"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Translations = Record<string, any>;

const defaultLang = "en";

export function useTranslation(p0?: string) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || defaultLang;
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const res = await fetch(`/locales/${lang ? lang : "en"}.json`);
        const data = await res.json();
        setTranslations(data);
      } catch (error: any) {
        console.error("Error loading translations", error.message);
      }
    };

    loadTranslations();
  }, [lang]);

  // Updated t() function for fallback text
  const t = (key: string, fallback?: string): string => {
    const value = key
      .split(".")
      .reduce((o: any, i) => (o ? o[i] : undefined), translations);

    return value ?? fallback ?? key; // Return fallback or key if translation not found
  };

  return { t, lang };
}
