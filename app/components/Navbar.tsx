'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { translations } from '../i18n/translations';
import { useLanguage } from '../hooks/useLanguage';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language];

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/blogs', label: t.nav.blogs },
    { href: '/where-are-we', label: t.nav.whereAreWe },
    { href: '/stats', label: t.nav.stats },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-celadon/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold text-cognac hover:text-red transition-colors"
        >
          Bikepacking Patagonia
        </Link>

        <div className="flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm text-cognac/80 transition-colors hover:text-red',
                  pathname === link.href && 'text-red font-medium'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}