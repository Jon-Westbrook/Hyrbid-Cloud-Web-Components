import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import JourneyAi from './components/JourneyAi';
import { RenderFn } from '../../types/widgets';
import widgetDefinition from './JourneyAi.widget';

import './index.scss';

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages } = await normalizeWidgetInput(
    instanceId,
    langCode,
    widgetDefinition,
  );
  if (!element || !locale) {
    return;
  }
  ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
      <Provider store={store}>
        <JourneyAi />
      </Provider>
    </IntlProvider>,
    element,
    () => cb(element),
  );
};

export default render;
