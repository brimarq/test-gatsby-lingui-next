import React, { useEffect } from 'react';
import { I18nProvider, useLingui } from '@lingui/react';
import { i18n } from '@lingui/core';
import { activateLocale } from '../utils/i18n';
import './index.css';

// h/t VinSpee https://github.com/lingui/js-lingui/issues/334#issuecomment-620001227
const I18nLocaleWatcher = ({children}) => {
  const { i18n: currentI18n } = useLingui();

  // Skip render when locale isn't loaded
  if (!currentI18n.locale) return null;

  // Force re-render when locale changes. Otherwise string translations (e.g.
  // t`Macro`) won't be updated.
  return <React.Fragment >{children}</React.Fragment>;

};

export default function Layout(props) {

  useEffect(() => {
    activateLocale('en');
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <I18nLocaleWatcher>
        { props.children }
      </I18nLocaleWatcher>
    </I18nProvider>
  )
};
