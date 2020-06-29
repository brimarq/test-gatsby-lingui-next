import React from "react";
import { Link } from 'gatsby';
import { useLingui } from '@lingui/react';
import { t, Trans, Plural } from '@lingui/macro';


const LinguiExample = ({ messages, markAsRead, user }) => {
  const { i18n } = useLingui();
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
};

LinguiExample.defaultProps = {
  messages: ['message 1', 'message 2'], 
  markAsRead: () => alert('READ'),
  user: { 
    name: 'testUser', 
    lastLogin: new Date(1593198827286)
  }
}



export default LinguiExample;