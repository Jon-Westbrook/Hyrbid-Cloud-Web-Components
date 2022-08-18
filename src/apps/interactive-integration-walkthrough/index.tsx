import React from 'react';
import ReactDOM from 'react-dom';
import InteractiveIntegrationWalkthrough from './components/InteractiveIntegrationWalkthrough/Widget';
import { IntlProvider } from 'react-intl';
import { RenderFn } from '../../types/widgets';
import widgetDefinition from './InteractiveIntegrationWalkthrough.widget';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
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
      <IntlProvider locale={locale} messages={messages}>
        <InteractiveIntegrationWalkthrough />
      </IntlProvider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
};

export default render;
