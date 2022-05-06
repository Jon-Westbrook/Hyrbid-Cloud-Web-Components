/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TrustRadius, { TrustRadiusProps } from './components/TrustRadius';
import { store } from './lib/redux/store';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import widgetConfig from './TrustRadius.widget';
import { RenderFn } from '../../types/widgets';
import { CarbonThemes } from '../../types/carbon';
import { setTheme } from './lib/redux/slices/setThemeSlice';
import { useAppDispatch } from './lib/redux/hooks';

import './index.scss';

const widgetId = widgetConfig.shortcode;

// Add a wrapping component, so we can use hooks to dispatch the theme
// provided by the user input.
const TrustRadiusApp = ({
  useGoogleStars,
  trustRadiusId,
  palette,
}: TrustRadiusProps & { palette: CarbonThemes }) => {
  const dispatch = useAppDispatch();
  dispatch(setTheme(palette));
  return (
    <TrustRadius
      useGoogleStars={useGoogleStars}
      trustRadiusId={trustRadiusId}
    />
  );
};

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
    element.getAttribute('data-google-stars') === 'true' ? true : false;
  // Check the theme from input data. If it is not a valid theme, use the
  // palette from context.
  let theme = element.getAttribute('data-theme') || '';
  if (!Object.values<string>(CarbonThemes).includes(theme)) {
    theme = palette || CarbonThemes.WHITE;
  }

  ReactDOM.render(
    <React.StrictMode>
      <IntlProvider locale={locale} messages={messages}>
        <Provider store={store}>
          <TrustRadiusApp
            trustRadiusId={element.getAttribute('data-trust-radius-id') || ''}
            useGoogleStars={useGoogleStars}
            palette={theme as CarbonThemes}
          />
        </Provider>
      </IntlProvider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
};

export default render;
