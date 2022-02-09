/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';
import ProductExplorerSecurity from './components/ProductExplorerSecurity';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import widgetConfig from './ProductExplorerSecurity.widget';

const widgetId = widgetConfig.shortcode;

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
export default async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages, palette } = await normalizeWidgetInput(
    instanceId,
    langCode,
    widgetId,
  );
  if (!element) {
    return;
  }
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages}>
          <ProductExplorerSecurity />
        </IntlProvider>
      </Provider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
}
