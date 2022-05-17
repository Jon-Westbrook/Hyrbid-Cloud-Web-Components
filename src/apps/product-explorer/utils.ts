import { Product } from '../../common/product-explorer/lib/types';

export function buildUrl(
  product: Product,
  linkType: string,
  localeCode: string,
): string | null | undefined {
  const url = linkType === 'pricing' ? product.pricingUrl : product.url;

  if (url === null) {
    return null;
  }

  return url?.charAt(0) === '/'
    ? `${localeCode === 'us-en' ? '' : '/' + localeCode}${url}`
    : url;
}

export function swapCountryAndLanguage(localeCode: string): string {
  // IBM's Drupal changes the url prefix to be `country-language`,
  // so we need to adapt the provided langcode.
  let swappedLocaleCode = localeCode;

  if (localeCode.indexOf('-') > -1) {
    swappedLocaleCode = `${localeCode.split('-')[1]}-${
      localeCode.split('-')[0]
    }`;
  }

  return swappedLocaleCode;
}
