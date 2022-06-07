import mapValidLocale, { IBMLocale } from './mapValidLocale';
import { ResolvedIntlConfig } from 'react-intl';

const fetchTranslationMessages = async (
  widgetId: string,
  langCode: string,
): Promise<ResolvedIntlConfig['messages']> => {
  const locale = mapValidLocale(langCode);
  // We don't want to do the extra fetching for English since it's the default.
  if (locale === IBMLocale.EN) {
    return {};
  }
  try {
    // This relies on the CRA convention for PUBLIC_URL.
    // react-intl does not support langCode "esla", so we need to
    // load the JSON for "esla" even though the locale is "es"
    const response = await window.fetch(
      `${process.env.PUBLIC_URL}/translations/${widgetId}/${
        langCode === 'esla' ? langCode : locale
      }.json`,
    );
    return response.json();
  } catch (e) {
    // If something went wrong do not fail the widget, use the default language.
    return {};
  }
};

export default fetchTranslationMessages;
