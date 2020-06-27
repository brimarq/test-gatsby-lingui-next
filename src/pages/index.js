import React from "react";
import { Link } from 'gatsby';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { t, Trans, Plural } from '@lingui/macro';

// Load & activate English only
// import { messages } from '../locales/en/messages';
// import { en } from 'make-plural/plurals';
// i18n.loadLocaleData('en', { plurals: en });
// i18n.load('en', messages);
// i18n.activate('en');

// Load & activate Spanish only
// import { messages } from '../locales/es/messages';
// import { es } from 'make-plural/plurals';
// i18n.loadLocaleData('es', { plurals: es });
// i18n.load('es', messages);
// i18n.activate('es');

// Load catalogs and plurals for both en & es, activate only one
import catalogEn from '../locales/en/messages';
import catalogEs from '../locales/es/messages';
import { en, es } from 'make-plural/plurals';

// https://js-lingui-git-next.lingui-js.now.sh/releases/migration-3.html#i18n-load-loads-a-catalog-for-a-single-locale
i18n.load({
  en: catalogEn.messages,
  es: catalogEs.messages
});

i18n.loadLocaleData({
  en: { plurals: en },
  es: { plurals: es }
});

// i18n.activate('en');
i18n.activate('es');


const Inbox = ({ messages, markAsRead, user }) => {
  const messagesCount = messages.length;
  const { name, lastLogin } = user;

  return (
    <div>
      <h1>{t`Lingui Example`}</h1>
      <h2>{t`Message Inbox`}</h2>
      <p>{t`Hi, ${name}`}</p>
      <Trans>
        <p>
          See all <Link to="/unread">unread messages</Link>{' or '}
          <button onClick={markAsRead}>mark them</button> as read.
        </p>
      </Trans>
      
      <p>
        {/* https://js-lingui-git-next.lingui-js.now.sh/tutorials/react.html#plurals */}
        <Plural 
          value = {messagesCount} 
          _0 = "There are no messages in your inbox." 
          one = "There's # message in your inbox." 
          other = "There are # messages in your inbox."
        />
      </p>
      <footer>
        {/* number and date formatting use i18n.date, i18n.number (from '@lingui/core') */}
        {t`Last login on ${i18n.date(lastLogin)}.`}
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <I18nProvider i18n={i18n}>
      <Inbox 
        messages = {['message 1', 'message 2']} 
        markAsRead = {() => alert('READ')} 
        user = {{ 
          name: 'testUser', 
          lastLogin: new Date(1593198827286)
        }}
      />
    </I18nProvider>
  );
}


