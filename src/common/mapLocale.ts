export enum IBMLocale {
  AR = 'ar',
  DE = 'de',
  EN = 'en',
  ES = 'es',
  ESLA = 'esla',
  FR = 'fr',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  PL = 'pl',
  PT = 'pt',
  RU = 'ru',
  TR = 'tr',
  ZH_CN = 'zh-cn',
  ZH_TW = 'zh-tw',
}

const availableLangcodes: IBMLocale[] = [
  IBMLocale.AR,
  IBMLocale.DE,
  IBMLocale.EN,
  IBMLocale.ES,
  IBMLocale.ESLA,
  IBMLocale.FR,
  IBMLocale.IT,
  IBMLocale.JA,
  IBMLocale.KO,
  IBMLocale.PL,
  IBMLocale.PT,
  IBMLocale.RU,
  IBMLocale.TR,
  IBMLocale.ZH_CN,
  IBMLocale.ZH_TW,
];

const mapLocale = (langcode = ''): IBMLocale => {
  // Specific overrides.
  if (langcode === 'zhcn') {
    return IBMLocale.ZH_CN;
  }
  if (langcode === 'zhtw') {
    return IBMLocale.ZH_TW;
  }
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
    IBMLocale.EN
  );
};

export default mapLocale;
