/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './apps/trust-radius/lib/redux/store';
import TrustRadius from './apps/trust-radius/components/TrustRadius';
import { IntlProvider } from 'react-intl';

(async () => {
  const element = document.getElementById('root');
  const urlSearchParams = new URLSearchParams(window.location.search);
  const { langcode } = Object.fromEntries(urlSearchParams.entries());
  const response = await window.fetch(`/MSC-Cloud/hc-widgets/${langcode}.json`);
  const messages = await response.json();
  ReactDOM.render(
    <React.StrictMode>
      <IntlProvider locale={langcode || 'en'} messages={messages}>
        <Provider store={store}>
          <TrustRadius
            trustRadiusId={element?.getAttribute('data-trust-radius-id') || ''}
            useGoogleStars={
              element?.getAttribute('data-use-google-stars') === 'true' || false
            }
            theme={element?.getAttribute('data-theme') || ''}
          />
        </Provider>
      </IntlProvider>
    </React.StrictMode>,
    element,
  );
})();
