/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import ProductExplorerItInfra from './components/ProductExplorerItInfra';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';

import { RenderFn } from '../../types/widgets';

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages } = await normalizeWidgetInput(
    instanceId,
    langCode,
    'product-explorer-it-infra',
  );

  if (!element || !locale) {
    return;
  }

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages}>
          <ProductExplorerItInfra />
        </IntlProvider>
      </Provider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
};

export default render;
