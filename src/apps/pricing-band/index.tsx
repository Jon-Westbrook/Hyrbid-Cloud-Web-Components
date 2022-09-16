import React from 'react';
import ReactDOM from 'react-dom';
import PricingBand from './components/PricingBand';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import { RenderFn } from '../../types/widgets';
import widgetDefinition from './PricingBand.widget';

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

  let greeting = element.getAttribute('data-greeting');
  switch (greeting) {
    case 'Hello':
    case 'Hi':
    case 'Howdy':
      break;
    default:
      greeting = null;
  }

  const userName = element.getAttribute('data-name');
  const excitement = element.getAttribute('data-excitement');

  ReactDOM.render(
    <React.StrictMode>
      <IntlProvider locale={locale} messages={messages}>
        <PricingBand
          greeting={greeting || 'Hello'}
          name={userName || ''}
          excitement={Boolean(excitement)}
        />
      </IntlProvider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
};

export default render;
