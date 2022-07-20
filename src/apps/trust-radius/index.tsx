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
import { useTrustRadiusDispatch } from './lib/redux/hooks';

import './index.scss';

const widgetId = widgetConfig.shortcode;

// Add a wrapping component, so we can use hooks to dispatch the theme
// provided by the user input.
const TrustRadiusApp = ({
  useGoogleStars,
  trustRadiusIds,
  palette,
}: TrustRadiusProps & { palette: CarbonThemes }) => {
  const dispatch = useTrustRadiusDispatch();
  dispatch(setTheme(palette));
  return (
    <TrustRadius
      useGoogleStars={useGoogleStars}
      trustRadiusIds={trustRadiusIds}
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

  const trustRadiusIds = element
    .getAttribute('data-trust-radius-ids')
    ?.split(/[\r\n]/) || [''];

  // Googlestars not applicable if rendering multiple product ids.
  const useGoogleStars =
    trustRadiusIds.length > 1 ||
    element.getAttribute('data-google-stars') === 'false'
      ? false
      : true;

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
            trustRadiusIds={trustRadiusIds}
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
