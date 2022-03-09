import { ReactFramework } from '@storybook/react';
import { DecoratorFunction } from '@storybook/csf';

import messages_en from '../locales/compiledStrings/en.json';
import messages_es from '../locales/compiledStrings/es.json';
import messages_ar from '../locales/compiledStrings/ar.json';
import messages_ja from '../locales/compiledStrings/ja.json';

import storyWithTranslationFromMessages from '../../../common/storyWithTranslationFromMessages';

const messagesByLangcode: Record<string, any> = {
  en: messages_en,
  es: messages_es,
  ar: messages_ar,
  ja: messages_ja,
};

const storyWithTranslation = (
  localeOverride: string | void,
): DecoratorFunction<ReactFramework> =>
  storyWithTranslationFromMessages(localeOverride, messagesByLangcode);

export default storyWithTranslation;
