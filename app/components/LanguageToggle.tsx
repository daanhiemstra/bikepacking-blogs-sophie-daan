'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { type Language } from '../i18n/translations';

export default function LanguageToggle() {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'nl' : 'en';
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 rounded-full bg-cream/90 px-3 py-1 text-sm text-cognac backdrop-blur-sm transition-colors hover:bg-cream"
    >
      <Globe size={16} className="text-red" />
      <span className="uppercase">{language}</span>
    </button>
  );
}