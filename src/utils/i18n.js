import { i18n } from '@lingui/core';
import { en, es } from 'make-plural/plurals';

i18n.loadLocaleData('en', { plurals: en });
i18n.loadLocaleData('es', { plurals: es });

export async function activateLocale(locale) {
  const { messages } = await import(
    /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
    `../locales/${locale}/messages.js`
  );
  i18n.load(locale, messages);
  i18n.activate(locale);
}
