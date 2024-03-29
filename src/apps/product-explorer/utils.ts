import { LinkType, Product } from '../../common/explorer/lib/types';

export function buildUrl(
  product: Product,
  linkType: string | undefined,
  localeCode: string,
): string | null {
  const url = linkType === LinkType.pricing ? product.pricingUrl : product.url;

  if (url) {
    return url?.charAt(0) === '/'
      ? `${localeCode === 'us-en' ? '' : '/' + localeCode}${url}`
      : url;
  }

  return null;
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
