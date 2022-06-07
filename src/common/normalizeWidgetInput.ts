import mapValidLocale, { IBMLocale } from './locale/mapValidLocale';
import mapPaletteToTheme from './mapPaletteToTheme';
import fetchTranslationMessages from './locale/fetchTranslationMessages';
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
  widgetId: string,
): Promise<NormalizedWidgetInput> {
  const element = document.getElementById(instanceId);
  if (!element) {
    return {};
  }
  const locale = mapValidLocale(langCode);
  const palette = mapPaletteToTheme(element.getAttribute('data-palette') || '');
  const messages = await fetchTranslationMessages(widgetId, locale);
  return { element, locale, palette, messages };
}

export default normalizeWidgetInput;
