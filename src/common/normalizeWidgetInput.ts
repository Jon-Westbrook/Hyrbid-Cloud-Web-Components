import mapLocale, { IBMLocale } from './mapLocale';
import mapPaletteToTheme from './mapPaletteToTheme';
import fetchTranslationMessages from './fetchTranslationMessages';
import { ResolvedIntlConfig } from 'react-intl';
import { CarbonThemes } from '../types/carbon';

export type NormalizedWidgetInput = Partial<{
  element: HTMLElement;
  locale: IBMLocale;
  messages: ResolvedIntlConfig['messages'];
  palette: CarbonThemes;
}>;

async function normalizeWidgetInput(
  instanceId: string,
  langCode: string,
): Promise<NormalizedWidgetInput> {
  const element = document.getElementById(instanceId);
  if (!element) {
    return {};
  }
  const locale = mapLocale(langCode);
  const palette = mapPaletteToTheme(element.getAttribute('data-palette') || '');
  const messages = await fetchTranslationMessages('trust-radius', locale);
  return { element, locale, palette, messages };
}

export default normalizeWidgetInput;
