import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';
import ProductExplorerSecurity from './components/ProductExplorerSecurity';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import { RenderFn } from '../../types/widgets';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import widgetDefinition from './ProductExplorerSecurity.widget';

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
};
export default render;
