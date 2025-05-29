"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Translations = Record<string, any>;

const defaultLang = "en";

export function useTranslation(p0?: string) {


  const pathname = usePathname();
  const lang = pathname.split("/")[1] || defaultLang

  // const searchParams = useSearchParams();
  // const lang = searchParams.get("lang") || defaultLang;
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const res = await fetch(`/locales/${lang ? lang : "en"}.json`);
        const data = await res.json();
        setTranslations(data);
      } catch (error:any) {
        console.error("Error loading translations", error.message);
      }
    };

    loadTranslations();
  }, [lang]);

  return { t: (key: string) => key?.split(".").reduce((o: any, i) => o?.[i], translations) || key, lang };
}