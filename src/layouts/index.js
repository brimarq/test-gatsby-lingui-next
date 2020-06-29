import React from 'react';
import { I18nProvider, useLingui } from '@lingui/react';
import { messages } from '../locales/en/messages'
import { en, es } from "make-plural/plurals"
import { i18n } from '@lingui/core';
import './index.css';



// h/t VinSpee https://github.com/lingui/js-lingui/issues/334#issuecomment-620001227
const I18nLocaleWatcher = ({children}) => {
  const { i18n: currentI18n } = useLingui();

  // Skip render when locale isn't loaded
  if (!currentI18n.locale) return null;

  // Force re-render when locale changes. Otherwise string translations (e.g.
  // t`Macro`) won't be updated.
  return <React.Fragment key={i18n.locale}>{children}</React.Fragment>;

}

export default function Layout({ children }) {

  i18n.loadLocaleData('en', { plurals: en })
  i18n.loadLocaleData('es', { plurals: es })
  i18n.load('en', messages);
  i18n.activate('en');
  
  return (
    <I18nProvider i18n={i18n}>
      <I18nLocaleWatcher>
        { children }
      </I18nLocaleWatcher>
    </I18nProvider>

  )
}
