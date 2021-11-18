import { ArgsStoryFn } from '@storybook/addons';
import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import messages_en from '../locales/compiledStrings/en.json';
import messages_es from '../locales/compiledStrings/es.json';
import messages_ar from '../locales/compiledStrings/ar.json';
import messages_ja from '../locales/compiledStrings/ja.json';

const messagesByLangcode: Record<string, any> = {
  en: messages_en,
  es: messages_es,
  ar: messages_ar,
  ja: messages_ja,
};

const storyWithTranslation = (locale: string | void) => (
  story: ArgsStoryFn<ReactNode>,
  { globals: { locale } }: { globals: { locale: string } },
) => {
  return (
    <IntlProvider
      locale={locale || 'en'}
      messages={messagesByLangcode[locale || 'en']}
    >
      {story()}
    </IntlProvider>
  );
};

export default storyWithTranslation;
