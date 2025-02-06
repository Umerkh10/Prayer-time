"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const languages = ["en", "fr"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentLang = searchParams.get("lang") || "en";

  const changeLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  };  

  return (
    <div className="flex gap-4">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-4 rounded-lg py-2 border ${currentLang === lang ? "bg-blue-500 text-white" : "bg-black text-muted-foreground"}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
