import {LocalePrefix, Pathnames} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'es'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    es: '/rutas'
  }
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';