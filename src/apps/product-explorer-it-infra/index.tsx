/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import ProductExplorer from './components/ProductExplorer';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';

import { RenderFn } from '../../types/widgets';

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages, palette } = await normalizeWidgetInput(
    instanceId,
    langCode,
    'product-explorer-it-infra',
  );

  if (!element || !locale) {
    return;
  }

  ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
      <ProductExplorer element={element} />
    </IntlProvider>,
    element,
    () => cb(element),
  );
};

export default render;
