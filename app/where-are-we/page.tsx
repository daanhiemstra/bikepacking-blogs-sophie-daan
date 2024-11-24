'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function WhereAreWePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [gpxFiles, setGpxFiles] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/gpx')
      .then(res => res.json())
      .then(data => setGpxFiles(data));
  }, []);

  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold">{t.nav.whereAreWe}</h1>
        <div className="h-[600px] w-full overflow-hidden rounded-2xl border border-celadon/20">
          <Map gpxFiles={gpxFiles} className="h-full w-full" />
        </div>
      </div>
    </main>
  );
}