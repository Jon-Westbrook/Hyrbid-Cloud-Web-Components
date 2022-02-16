import { IntlProvider } from 'react-intl';

import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { DecoratorFunction } from '@storybook/csf';

const storyWithTranslationFromMessages =
  (
    localeOverride: string | void,
    messagesByLangcode: Record<string, any>,
  ): DecoratorFunction<ReactFramework> =>
  (story, { globals: { locale } }): ReactElement => {
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

export default storyWithTranslationFromMessages;
