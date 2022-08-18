import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TrustRadius, { TrustRadiusProps } from './components/TrustRadius';
import widgetDefinition from './TrustRadius.widget';
import { store } from './lib/redux/store';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import { RenderFn } from '../../types/widgets';
import { CarbonThemes } from '../../types/carbon';
import { setTheme } from './lib/redux/slices/setThemeSlice';
import { useTrustRadiusDispatch } from './lib/redux/hooks';

import './index.scss';

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

function refineInputTypes(input: Record<string, unknown>): TrustRadiusProps {
  // Convince TS that we have an array.
  const trIds = input?.trustRadiusIds || [];
  let trustRadiusIds = Array.isArray(trIds) ? trIds : [];
  trustRadiusIds = trustRadiusIds.map((id) => `${id}`);
  const useGoogleStars = trustRadiusIds.length === 1 && !!input.useGoogleStars;
  return { useGoogleStars, trustRadiusIds };
}

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages, palette, params } =
    await normalizeWidgetInput<TrustRadiusProps>(
      instanceId,
      langCode,
      widgetDefinition,
      refineInputTypes,
    );

  if (!element || !locale) {
    return;
  }

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
            trustRadiusIds={params.trustRadiusIds}
            useGoogleStars={params.useGoogleStars}
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
