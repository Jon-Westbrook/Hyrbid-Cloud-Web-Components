import React from 'react';
import ReactDOM from 'react-dom';
import SolutionsExplorerItInfra from './components/SolutionsExplorerItInfra';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from 'src/common/normalizeWidgetInput';
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';
import { RenderFn } from '../../types/widgets';
import widgetDefinition from './SolutionsExplorerITInfra.widget';

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
          <SolutionsExplorerItInfra />
        </IntlProvider>
      </Provider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
};

export default render;
