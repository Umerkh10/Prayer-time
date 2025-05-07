"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { checkIsPathnameIsEqualToLang, urlSplitter } from '@/lib';

export default function DuaSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const currentLang = urlSplitter(pathname)
    const isLang = checkIsPathnameIsEqualToLang(currentLang)
    const { t } = useTranslation("duasection")
    const isArabic = pathname.split("/")[1]
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        localStorage.setItem("loading", "true");
        setIsLoading(true);

        const timer = setTimeout(() => {
            localStorage.setItem("loading", "false");
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative  bg-gradient-to-b from-background via-background/95 to-background lg:py-8 px-4 overflow-hidden lg:scale-100 scale-90">
            <div className="max-w-4xl mx-auto">
                <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 ">
                        {t('duasection.title')}
                    </h1>
                    <p className="text-sm md:text-base text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        {t('duasection.desc')}
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="group relative">
                        <div className={cn(
                            "relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-on-scroll opacity-0 -translate-x-4 transition-all duration-700",
                            "before:absolute before:inset-0 before:rounded-2xl before:border before:border-primary/10 before:transition-transform before:duration-300",
                            "hover:before:scale-[1.02] hover:before:border-primary/20"
                        )}>
                            <h2 className="text-xl  font-semibold mb-4">  {t('duasection.heading2')}</h2>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {t('duasection.desc2')}
                            </p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className={cn(
                            "relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-on-scroll opacity-0 translate-x-4 transition-all duration-700",
                            "before:absolute before:inset-0 before:rounded-2xl before:border before:border-primary/10 before:transition-transform before:duration-300",
                            "hover:before:scale-[1.02] hover:before:border-primary/20"
                        )}>
                            <h2 className="text-xl  font-semibold  mb-4"> {t('duasection.heading3')} </h2>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {t('duasection.desc3')}
                            </p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className={cn(
                            "relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-on-scroll opacity-0 -translate-x-4 transition-all duration-700",
                            "before:absolute before:inset-0 before:rounded-2xl before:border before:border-primary/10 before:transition-transform before:duration-300",
                            "hover:before:scale-[1.02] hover:before:border-primary/20"
                        )}>
                            <h2 className="text-xl  font-semibold mb-4"> {t('duasection.heading4')} </h2>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {t('duasection.desc4')}
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center  items-center '>
                        <Link className='rounded-lg border-2 border-emerald-600 py-2 px-7 hover:bg-emerald-700 hover:text-white transition-all' href={isLang ? `/${currentLang}/duas` : '/duas'}> {t("duasection.button")} </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}