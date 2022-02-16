import storyWithTranslationFromMessages from '../../../common/storyWithTranslationFromMessages';

import { ReactFramework } from '@storybook/react';
import { DecoratorFunction } from '@storybook/csf';

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

export const storyWithTranslation = (
  localeOverride: string | void,
): DecoratorFunction<ReactFramework> =>
  storyWithTranslationFromMessages(localeOverride, messagesByLangcode);

export default storyWithTranslation;
