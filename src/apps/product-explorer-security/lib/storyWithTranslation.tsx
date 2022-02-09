import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';

import messages_ar from '../locales/compiledStrings/ar.json';
import messages_de from '../locales/compiledStrings/de.json';
import messages_en from '../locales/compiledStrings/en.json';
import messages_es from '../locales/compiledStrings/es.json';
import messages_esla from '../locales/compiledStrings/esla.json';
import messages_fr from '../locales/compiledStrings/fr.json';
import messages_it from '../locales/compiledStrings/it.json';
import messages_ja from '../locales/compiledStrings/ja.json';
import messages_ko from '../locales/compiledStrings/ko.json';
import messages_pl from '../locales/compiledStrings/pl.json';
import messages_pt from '../locales/compiledStrings/pt.json';
import messages_ru from '../locales/compiledStrings/ru.json';
import messages_tr from '../locales/compiledStrings/tr.json';
import messages_zhcn from '../locales/compiledStrings/zhcn.json';
import messages_zhtw from '../locales/compiledStrings/zhtw.json';
import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { DecoratorFunction } from '@storybook/csf';

const messagesByLangcode: Record<string, any> = {
  ar: messages_ar,
  de: messages_de,
  en: messages_en,
  es: messages_es,
  esla: messages_esla,
  fr: messages_fr,
  it: messages_it,
  ja: messages_ja,
  ko: messages_ko,
  pl: messages_pl,
  pt: messages_pt,
  ru: messages_ru,
  tr: messages_tr,
  'zh-cn': messages_zhcn,
  'zh-tw': messages_zhtw,
};

const storyWithTranslation =
  (localeOverride: string | void): DecoratorFunction<ReactFramework> =>
  (story, { globals: { locale } }): ReactElement => {
    // react-intl does not support langCode "esla", so we need to
    // switch it to "es" but still load the JSON for "esla"
    const oneOff = locale === 'esla' ? 'es' : locale;
    return (
      <Provider store={store}>
        <IntlProvider
          locale={localeOverride || oneOff || 'en'}
          messages={messagesByLangcode[locale || 'en']}
        >
          {story()}
        </IntlProvider>
      </Provider>
    );
  };

export default storyWithTranslation;
