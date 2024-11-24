'use client';

import ScrollDownButton from './ScrollDownButton';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import Image from 'next/image';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative h-screen w-full">
      <Image
        src="/assets/hero.jpg"
        alt={t.hero.imageAlt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex h-full items-center justify-center text-center">
        <div className="px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-xl text-white/90 sm:text-2xl">
            {t.hero.subtitle}
          </p>
        </div>
      </div>
      <ScrollDownButton />
    </div>
  );
}