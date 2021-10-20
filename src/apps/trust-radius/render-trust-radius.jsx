/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TrustRadius from './components/TrustRadius';
import store from './lib/redux/store';
import 'regenerator-runtime/runtime';

/**
 * Renders the widget.
 *
 * @param {string} instanceId
 *   The already present HTML element ID where the react app will be rendered.
 * @param {string} langCode
 *   The language code for internationalization purposes.
 * @param {string} origin
 *   Protocol and hostname where a JSONAPI endpoint is available.
 * @param {Function} cb
 *   A callback that executes after the widget has been rendered.
 */
function render(instanceId, langCode, origin, cb) {
  const element = document.getElementById(instanceId);
  if (!element) {
    return;
  }
  const useGoogleStars =
    element.getAttribute('data-use-google-stars') !== 'false' ||
    element.getAttribute('data-use-google-stars') !== '0';
  const mapPaletteToTheme = (serializedPalette) => {
    try {
      const { id } = JSON.parse(serializedPalette);
      switch (id) {
        case 'palette-grey-light':
          return 'GRAY_10';
        case 'palette-black':
          return 'GRAY_100';
        default:
          return 'WHITE';
      }
    } catch (e) {
      return 'WHITE';
    }
  };
  const palette =
    mapPaletteToTheme(element.getAttribute('data-palette')) || 'WHITE';
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <TrustRadius
          trustRadiusId={element.getAttribute('data-trust-radius-id') || ''}
          theme={palette}
          useGoogleStars={useGoogleStars}
        />
      </Provider>
    </React.StrictMode>,
    element,
    () => cb(element),
  );
}

window.renderTrustRadius = render;
