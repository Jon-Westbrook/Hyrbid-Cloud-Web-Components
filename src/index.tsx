/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './apps/trust-radius/lib/redux/store';
import TrustRadius from './apps/trust-radius/components/TrustRadius';

const element = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TrustRadius
        trustRadiusId={element?.getAttribute('data-trust-radius-id') || ''}
        useGoogleStars={
          element?.getAttribute('data-use-google-stars') === 'true' || false
        }
        theme={element?.getAttribute('data-theme') || ''}
      />
    </Provider>
  </React.StrictMode>,
  element,
);
