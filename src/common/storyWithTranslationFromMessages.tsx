import { IntlProvider } from 'react-intl';

import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { Args, DecoratorFunction } from '@storybook/csf';

function storyWithTranslationFromMessages<TArgs = Args>(
  localeOverride: string | void,
  messagesByLangcode: Record<string, any>,
): DecoratorFunction<ReactFramework, TArgs> {
  return (story, { globals: { locale } }): ReactElement => {
    // react-intl does not support langCode "esla", so we need to
    // switch it to "es" but still load the JSON for "esla"
    const requestedLocale = localeOverride || locale;
    const validLocale = requestedLocale === 'esla' ? 'es' : requestedLocale;
    return (
      <IntlProvider
        locale={validLocale || 'en'}
        messages={messagesByLangcode[requestedLocale || 'en']}
      >
        {story()}
      </IntlProvider>
    );
  };
}

export default storyWithTranslationFromMessages;
