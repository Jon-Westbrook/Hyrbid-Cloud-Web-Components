import storyWithTranslationFromMessages, {
  MessagesByCode,
} from '../../../common/storybook/storyWithTranslationFromMessages';
import { IBMLocale } from '../../../common/locale/mapValidLocale';

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

const messagesByLangcode: MessagesByCode = {
  [IBMLocale.AR]: messages_ar,
  [IBMLocale.DE]: messages_de,
  [IBMLocale.EN]: messages_en,
  [IBMLocale.ES]: messages_es,
  [IBMLocale.ESLA]: messages_esla,
  [IBMLocale.FR]: messages_fr,
  [IBMLocale.IT]: messages_it,
  [IBMLocale.JA]: messages_ja,
  [IBMLocale.KO]: messages_ko,
  [IBMLocale.PL]: messages_pl,
  [IBMLocale.PT]: messages_pt,
  [IBMLocale.RU]: messages_ru,
  [IBMLocale.TR]: messages_tr,
  [IBMLocale.ZH_CN]: messages_zhcn,
  [IBMLocale.ZH_TW]: messages_zhtw,
};

export const storyWithTranslation = (
  localeOverride: IBMLocale | void,
): DecoratorFunction<ReactFramework> =>
  storyWithTranslationFromMessages(localeOverride, messagesByLangcode);

export default storyWithTranslation;
