/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TrustRadius from './components/TrustRadius';
import { store } from './lib/redux/store';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import widgetConfig from './TrustRadius.widget';
import { RenderFn } from '../../types/widgets';
import { CarbonThemes } from '../../types/carbon';

const widgetId = widgetConfig.shortcode;

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages, palette } = await normalizeWidgetInput(
    instanceId,
    langCode,
    widgetId,
  );
  if (!element || !locale) {
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
            theme={palette || CarbonThemes.WHITE}
            useGoogleStars={useGoogleStars}
          />
        </Provider>
      </IntlProvider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
};

export default render;
