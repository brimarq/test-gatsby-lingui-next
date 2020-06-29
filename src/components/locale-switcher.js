import React from "react"
import { useLingui } from '@lingui/react';

export default function LocaleSwitcher() {

  const { i18n } = useLingui();
  
  const locales = {
    en: "English",
    es: "Español",
  }

  const activate = async (locale) => {

    const { messages } = await import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */ 
      `../locales/${locale}/messages.js`
    );
  
    i18n.load(locale, messages);
    i18n.activate(locale);
  }

  return (
    <ul style={{listStyle: 'none', display: 'inline-flex'}}>
      {Object.keys(locales).map((locale) => (
        <li key={locale}>
          <button onClick={() => activate(locale)} style={{margin: '0 5px'}}>
            {locales[locale]}
          </button>
        </li>
      ))}
    </ul>
  );
}