import { IntlProvider } from 'react-intl';

import messages_en from '../locales/compiledStrings/en.json';
import messages_es from '../locales/compiledStrings/es.json';
import messages_ar from '../locales/compiledStrings/ar.json';
import messages_ja from '../locales/compiledStrings/ja.json';
import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { DecoratorFunction } from '@storybook/csf';

const messagesByLangcode: Record<string, any> = {
  en: messages_en,
  es: messages_es,
  ar: messages_ar,
  ja: messages_ja,
};

const storyWithTranslation =
  (localeOverride: string | void): DecoratorFunction<ReactFramework> =>
  (story, { globals: { locale } }): ReactElement => {
    return (
      <IntlProvider
        locale={localeOverride || locale || 'en'}
        messages={messagesByLangcode[locale || 'en']}
      >
        {story()}
      </IntlProvider>
    );
  };

export default storyWithTranslation;
