export default function prefixUrlWithLocale(
  url: string,
  localeCode: string,
): string {
  if (url.charAt(0) === '/') {
    return localeCode === 'us-en' ? '' : `/${localeCode}${url}`;
  } else {
    return url;
  }
}
