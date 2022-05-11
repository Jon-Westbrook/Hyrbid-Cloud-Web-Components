import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';
import ProductExplorer from './components/ProductExplorer';
import { IntlProvider } from 'react-intl';
import { RenderFn } from '../../types/widgets';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages } = await normalizeWidgetInput(
    instanceId,
    langCode,
    'product-explorer',
  );

  if (!element || !locale) {
    return;
  }
  console.log(element, 'element', locale);
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages}>
          <ProductExplorer
            linkType={element.getAttribute('data-link-type') || 'product'}
          />
        </IntlProvider>
      </Provider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
};

export default render;
