import { Product } from '../../common/product-explorer/lib/types';

export function generateRowNumArray(
  categories: string[],
  multiple: number,
): number[] {
  if (multiple < 1 || multiple > 3) multiple = 1;
  const rowNumArray: number[] = [];
  for (let i = 1; i <= categories.length; i++) {
    for (let j = 1; j <= multiple; j++) {
      rowNumArray.push(i);
    }
  }
  return rowNumArray;
}

export function generateIndexArray(categories: string[], multiple: number) {
  if (multiple < 1 || multiple > 3) multiple = 1;
  return Array(categories.length + multiple)
    .fill(0)
    .map((num, i) => (i % multiple === 0 ? i : null))
    .filter((item) => item !== null);
}

export function defineGridRow(
  width: number | undefined,
  index: number,
  categories: string[],
): any {
  if (width === undefined) return '1';
  let indexArray;
  let rowNumArray;

  if (width >= 1056) {
    // 3 cols
    indexArray = generateIndexArray(categories, 3);
    rowNumArray = generateRowNumArray(categories, 3);
    for (const el of indexArray) {
      if (el !== null && index < el) {
        return String(rowNumArray[el]);
      }
    }
  } else if (width >= 672) {
    // 2 cols
    indexArray = generateIndexArray(categories, 2);
    rowNumArray = generateRowNumArray(categories, 2);
    for (const el of indexArray) {
      if (el !== null && index < el) {
        return String(rowNumArray[el]);
      }
    }
  } else {
    // 1 col
    return String(index + 2);
  }
}

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

export function getTargetAndLinkIconStatus(
  isLinkExternal: boolean | undefined,
): any {
  let target;
  let linkicon;

  if (isLinkExternal === true) {
    target = '_new';
    linkicon = 'icon-show';
  } else {
    target = '_self';
    linkicon = 'icon-hidden';
  }

  return { target: target, linkIcon: linkicon };
}
