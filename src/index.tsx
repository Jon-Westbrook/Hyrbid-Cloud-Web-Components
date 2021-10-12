/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './widgets/trust-radius/lib/redux/store';
import TrustRadius from './widgets/trust-radius/components/TrustRadius';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TrustRadius
        palette="light"
        useGoogleStars={true}
        trustRadiusId="5d9df1232f82250032904eb1"
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
