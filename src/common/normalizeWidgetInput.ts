import camelize from 'lodash.camelcase';
import mapValidLocale, { IBMLocale } from './locale/mapValidLocale';
import mapPaletteToTheme from './mapPaletteToTheme';
import fetchTranslationMessages from './locale/fetchTranslationMessages';
import { ResolvedIntlConfig } from 'react-intl';
import { CarbonThemes } from '../types/carbon';
import { SchemaLite, WidgetDefinition } from '../types/widgets';

export type NormalizedWidgetInput<T> = Partial<{
  element: HTMLElement;
  locale: IBMLocale;
  messages: ResolvedIntlConfig['messages'];
  palette: CarbonThemes;
}> & { params: T };

async function normalizeWidgetInput<T>(
  instanceId: string,
  langCode: string,
  widgetDefinition: WidgetDefinition,
  refineInputTypes?: (input: Record<string, unknown>) => T,
): Promise<NormalizedWidgetInput<T>> {
  let element = document.getElementById(instanceId);
  element ||= new HTMLElement();
  const widgetId = widgetDefinition.shortcode;
  const locale = mapValidLocale(langCode);
  const palette = mapPaletteToTheme(element.getAttribute('data-palette') || '');
  const messages = await fetchTranslationMessages(widgetId, locale);
  const rawParams = parseUserInput(widgetDefinition, element);
  // If there is no refinement needed it may mean that the raw params parse
  // directly into T, or that there are no params.
  const params = refineInputTypes
    ? refineInputTypes(rawParams)
    : (rawParams as T);
  return { element, locale, palette, messages, params };
}

export function parseUserInput(
  widgetDefinition: WidgetDefinition,
  element: HTMLElement,
): Record<string, unknown> {
  // First we need to know what are the input options.
  const schemaProps =
    widgetDefinition?.settingsSchema?.properties?.fields?.properties || {};
  const propNames = Object.keys(schemaProps);
  return propNames.reduce(
    (params, propName: string): Record<string, unknown> => ({
      ...params,
      [camelize(propName)]: parseValue(
        propName,
        element,
        schemaProps?.[propName] || { type: 'null' },
      ),
    }),
    {},
  );
}

function parseValue(
  propName: string,
  element: HTMLElement,
  { type }: SchemaLite,
): any {
  type ||= 'null';
  let attribute = element.getAttribute(`data-${propName}`);
  if (type === 'string') {
    attribute ||= '';
    return attribute;
  }
  if (type === 'number') {
    attribute ||= '0';
    return attribute.includes('.')
      ? parseFloat(attribute)
      : parseInt(attribute, 10);
  }
  if (type === 'null') {
    return null;
  }
  if (type === 'boolean') {
    attribute ||= '0';
    // The CMS encodes booleans as '0' and '1'.
    return attribute !== '0';
  }
  attribute ||= 'null';
  return JSON.parse(attribute);
}

export default normalizeWidgetInput;
