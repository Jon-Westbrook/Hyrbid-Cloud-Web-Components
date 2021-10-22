import React from 'react';
import { default as Intro } from './Introduction';

export default {
  title: ' Introduction',
  component: Intro,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

export const Introduction = () => <Intro />;
