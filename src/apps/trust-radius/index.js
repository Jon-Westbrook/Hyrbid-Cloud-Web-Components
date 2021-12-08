/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TrustRadius from './components/TrustRadius';
import store from './lib/redux/store';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';

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
  );
  if (!element) {
    return;
  }
  const useGoogleStars =
    element.getAttribute('data-use-google-stars') !== 'false' ||
    element.getAttribute('data-use-google-stars') !== '0';
  ReactDOM.render(
    <React.StrictMode>
      <IntlProvider locale={locale} messages={messages}>
        <Provider store={store}>
          <TrustRadius
            trustRadiusId={element.getAttribute('data-trust-radius-id') || ''}
            theme={palette}
            useGoogleStars={useGoogleStars}
          />
        </Provider>
      </IntlProvider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
}
