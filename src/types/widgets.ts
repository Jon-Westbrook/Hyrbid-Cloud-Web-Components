import { IBMLocale } from '../common/mapValidLocale';

/**
 * Renders the widget.
 *
 * @param {string} instanceId
 *   The already present HTML element ID where the react app will be rendered.
 * @param {string} langCode
 *   The language code for internationalization purposes.
 * @param {string} origin
 *   Protocol and hostname where a JSONAPI endpoint is available.
 * @param {Function} cb
 *   A callback that executes after the widget has been rendered.
 *
 * @return {Promise<void>}
 *   A promise that the app will be rendered.
 */
export type RenderFn = (
  instanceId: string,
  langCode: IBMLocale,
  origin: string,
  cb: (e: HTMLElement) => void,
) => Promise<void>;

export type WidgetMetadataBasic = {
  shortcode: string;
  title: string;
  status?: 'stable' | 'beta' | 'wip' | 'deprecated';
  settingsSchema?: {
    fields: Record<string, unknown>;
  };
  description?: string;
  additionalCustomProperties?: Record<string, unknown>;
};

export type WidgetDefinition = WidgetMetadataBasic & {
  entry: string;
  useExternalPeerDependencies: string[];
};
