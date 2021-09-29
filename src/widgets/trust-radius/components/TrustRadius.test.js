import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import TrustRadius from '../components/TrustRadius';
import { IntlProvider } from 'react-intl';
import i18n from '../../../util/i18n';

let obj = null;
const source = new i18n('en');
const locales = {
  ar: 'Arabic',
  de: 'German',
  es: 'Spanish',
  esla: 'Latin American Spanish',
  fr: 'French',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  tr: 'Turkish',
  zhcn: 'Simplified Chinese',
  zhtw: 'Traditional Chinese',
};

beforeEach(() => {
  obj = document.createElement('div');
  document.body.appendChild(obj);
});

afterEach(() => {
  unmountComponentAtNode(obj);
  obj.remove();
  obj = null;
});

it('Renders without crashing', () => {
  act(() => {
    render(
      <IntlProvider locale={source.locale} messages={source.messages}>
        <TrustRadius element={obj} />
      </IntlProvider>,
      obj,
    );
  });
});

Object.keys(locales).forEach(function (key) {
  try {
    const translation = new i18n(key);
    let id = null;
    for (id in source.messages) {
      if (
        typeof translation.messages[id] !== 'string' ||
        translation.messages[id] === source.messages[id]
      ) {
        throw new Error(
          'Invalid translation, ' + locales[key] + '(' + key + ')',
        );
      }
    }
  } catch (error) {
    console.warn(error.message);
  }
});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
