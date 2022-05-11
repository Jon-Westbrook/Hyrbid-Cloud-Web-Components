/**
 * @file
 * Class to identify the correct language code.
 *
 * FIXME Langcode esla fallsback to es, because there is not a langcode
 *       to include all latin american Spanish variants on react-intl.
 */

import messages_ar from '../../locales/ar.json';
import messages_de from '../../locales/de.json';
import messages_en from '../../locales/en.json';
import messages_es from '../../locales/es.json';
import messages_esla from '../../locales/esla.json';
import messages_fr from '../../locales/fr.json';
import messages_it from '../../locales/it.json';
import messages_ja from '../../locales/ja.json';
import messages_ko from '../../locales/ko.json';
import messages_pl from '../../locales/pl.json';
import messages_pt from '../../locales/pt.json';
import messages_ru from '../../locales/ru.json';
import messages_tr from '../../locales/tr.json';
import messages_zhcn from '../../locales/zhcn.json';
import messages_zhtw from '../../locales/zhtw.json';

const localeData = {
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

export default class i18n {
  constructor(langcode) {
    this.locale = langcode;
  }

  mapLocale(langcode) {
    // Specific overrides.
    if (langcode === 'zhcn') {
      langcode = 'zh-cn';
    }
    if (langcode === 'zhtw') {
      langcode = 'zh-tw';
    }
    if (langcode === 'esla') {
      langcode = 'es-la';
    }
    const availableLangcodes = Object.keys(localeData);
    return (
      availableLangcodes.find((candidate) => candidate === langcode) ||
      // Check if there is a match when making the input lower case.
      availableLangcodes.find(
        (candidate) => candidate === langcode.toLowerCase(),
      ) ||
      // Check if there is a match when dropping the locale "fr-ca" becomes "fr".
      availableLangcodes.find(
        (candidate) => candidate === langcode.toLowerCase().replace(/-.*$/, ''),
      ) ||
      'en'
    );
  }

  set locale(langcode) {
    this._locale = this.mapLocale(langcode || 'en');
  }

  get locale() {
    return this._locale;
  }

  get messages() {
    return localeData[this.locale];
  }
}
