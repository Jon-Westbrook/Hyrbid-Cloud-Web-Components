import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
