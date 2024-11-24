'use client';

import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

export default function StatsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-zinc-50 pt-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold">{t.nav.stats}</h1>
        {/* Add your stats content here */}
      </div>
    </main>
  );
}