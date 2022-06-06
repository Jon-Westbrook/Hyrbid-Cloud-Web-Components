import { ReactFramework } from '@storybook/react';
import { DecoratorFunction } from '@storybook/csf';

import storyWithTranslationFromMessages, {
  MessagesByCode,
} from '../../../common/storybook/storyWithTranslationFromMessages';
import { IBMLocale } from '../../../common/locale/mapValidLocale';

import messages_en from '../locales/compiledStrings/en.json';
import messages_ar from '../locales/compiledStrings/en.json';
import messages_es from '../locales/compiledStrings/es.json';
import messages_ja from '../locales/compiledStrings/ja.json';

const messagesByLangcode: MessagesByCode = {
  [IBMLocale.EN]: messages_en,
  [IBMLocale.ES]: messages_es,
  [IBMLocale.AR]: messages_ar,
  [IBMLocale.JA]: messages_ja,
};

const storyWithTranslation = (
  localeOverride: IBMLocale | void,
): DecoratorFunction<ReactFramework> =>
  storyWithTranslationFromMessages(localeOverride, messagesByLangcode);

export default storyWithTranslation;
