// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from '../.storybook/preview'; // path of your preview.js file

setGlobalConfig(globalStorybookConfig);
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => undefined,
      removeListener: () => undefined,
    };
  };

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function (callback) {
    setTimeout(callback, 0);
  };
