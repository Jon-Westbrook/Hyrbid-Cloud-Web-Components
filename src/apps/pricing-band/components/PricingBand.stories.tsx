import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PricingBand, { PricingBandProps } from './PricingBand';
import storyWithTranslation from '../lib/storyWithTranslation';
import { IBMLocale } from 'src/common/locale/mapValidLocale';

const stories: Meta = {
  title: 'Widgets/Pricing Band/Components',
  component: PricingBand,
  decorators: [storyWithTranslation()],
};

const Template: StoryFn<PricingBandProps> = (args) => <PricingBand {...args} />;

export const Default = Template.bind({});
Default.args = {
  greeting: 'Hello',
  name: 'Alice',
  excitement: false,
};

export const Hi = Template.bind({});
Hi.args = {
  greeting: 'Hi',
  name: 'Alice',
  excitement: false,
};

export const Howdy = Template.bind({});
Howdy.args = {
  greeting: 'Howdy',
  name: 'Alice',
  excitement: false,
};

export const WithExcitement = Template.bind({});
WithExcitement.args = {
  greeting: 'Howdy',
  name: 'Alice',
  excitement: true,
};

export const WithExcitementHi = Template.bind({});
WithExcitementHi.args = {
  greeting: 'Hi',
  name: 'Bob',
  excitement: true,
};

export const WithExcitementEmoji = Template.bind({});
WithExcitementEmoji.args = {
  greeting: 'Hi',
  name: '🎉',
  excitement: true,
};

export const Spanish = Template.bind({});
Spanish.args = { greeting: 'Hi', name: 'Alícia', excitement: false };
Spanish.decorators = [storyWithTranslation(IBMLocale.ES)];

export default stories;
