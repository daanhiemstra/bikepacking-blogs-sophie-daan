export const translations = {
  en: {
    nav: {
      home: 'Home',
      blogs: 'Blogs',
      whereAreWe: 'Where Are We',
      stats: 'Stats'
    },
    hero: {
      title: 'Bikepacking Patagonia',
      subtitle: 'Adventures on two wheels through South America\'s wild frontier',
      imageAlt: 'Scenic mountain landscape in Patagonia with a bicycle in the foreground'
    }
  },
  nl: {
    nav: {
      home: 'Home',
      blogs: 'Blogs',
      whereAreWe: 'Waar Zijn We',
      stats: 'Statistieken'
    },
    hero: {
      title: 'Bikepacking Patagonië',
      subtitle: 'Avonturen op twee wielen door Zuid-Amerika\'s wilde grens',
      imageAlt: 'Schilderachtig berglandschap in Patagonië met een fiets op de voorgrond'
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;