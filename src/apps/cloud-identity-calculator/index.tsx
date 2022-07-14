import React from 'react';
import ReactDOM from 'react-dom';
import CloudIdentityCalculator from './components/CloudIdentityCalculator';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';

import { RenderFn } from '../../types/widgets';

import './index.scss';

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages } = await normalizeWidgetInput(
    instanceId,
    langCode,
    'cloud-identity-calculator',
  );

  if (!element || !locale) {
    return;
  }

  ReactDOM.render(
    <React.StrictMode>
      <IntlProvider locale={locale} messages={messages}>
        <CloudIdentityCalculator />
      </IntlProvider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
};

export default render;
