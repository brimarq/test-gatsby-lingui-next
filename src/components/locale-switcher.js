import React from "react";
import { activateLocale } from '../utils/i18n';

export default function LocaleSwitcher() {
  
  const locales = {
    en: "English",
    es: "Español",
  };

  return (
    <ul style={{listStyle: 'none', display: 'inline-flex'}}>
      {Object.keys(locales).map((locale) => (
        <li key={locale}>
          <button onClick={() => activateLocale(locale)} style={{margin: '0 5px'}}>
            {locales[locale]}
          </button>
        </li>
      ))}
    </ul>
  );
};