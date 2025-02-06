"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Translations = Record<string, any>;

const defaultLang = "en"; // Default language

export function useTranslation(p0?: string) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || defaultLang;
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const res = await fetch(`/locales/${lang}.json`);
        const data = await res.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translations", error);
      }
    };

    loadTranslations();
  }, [lang]);

  return { t: (key: string) => key.split(".").reduce((o: any, i) => o?.[i], translations) || key, lang };
}
