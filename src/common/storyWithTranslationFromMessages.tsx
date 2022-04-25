import { IntlProvider } from 'react-intl';

import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { Args, DecoratorFunction } from '@storybook/csf';
import { IBMLocale } from './mapValidLocale';

export type MessagesByCode = Partial<
  Record<IBMLocale, Record<string, { type: number; value: string }[]>>
>;

function storyWithTranslationFromMessages<TArgs = Args>(
  localeOverride: IBMLocale | void,
  messagesByLangcode: MessagesByCode,
): DecoratorFunction<ReactFramework, TArgs> {
  return (story, { globals: { locale } }): ReactElement => {
    // react-intl does not support langCode "esla", so we need to
    // switch it to "es" but still load the JSON for "esla"
    const requestedLocale = (localeOverride || locale) as IBMLocale | void;
    const validLocale = requestedLocale === 'esla' ? 'es' : requestedLocale;
    return (
      <IntlProvider
        locale={validLocale || 'en'}
        messages={messagesByLangcode[requestedLocale || IBMLocale.EN]}
      >
        {story()}
      </IntlProvider>
    );
  };
}

export default storyWithTranslationFromMessages;
