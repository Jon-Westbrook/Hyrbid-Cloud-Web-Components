import React, { ReactNode } from 'react';
import CardSlider, { CardSliderProps } from './CardSlider';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import buildSliderSettings from '../lib/buildSliderSettings';
import { CarbonThemes } from '../../../types/carbon';
import { Provider } from 'react-redux';
import { ArgsStoryFn } from '@storybook/addons';
import fakeStore, { overrideFakeStore } from '../lib/redux/fakeStore';
import storyWithTranslation from '../lib/storyWithTranslation';

const stories = {
  component: CardSlider,
  title: 'Trust Radius/Slider',
  decorators: [storyWithTranslation()],
};

const Template: Story<CardSliderProps> = (args) => <CardSlider {...args} />;

export const Default = Template.bind({});
const sliderSettings = buildSliderSettings(4);
sliderSettings.appendDots = (dots) => {
  return (
    <CardSliderDots
      numRows={8}
      onPrevious={action('previous')}
      onNext={action('next')}
    >
      {dots}
    </CardSliderDots>
  );
};
sliderSettings.customPaging = (i) => <CardSliderPager pageNumber={i} />;
Default.args = {
  trustRadiusId: 'fake-trid',
  stars: true,
  sliderSettings,
  setCustomSlider: () => undefined,
};
Default.decorators = [
  (story: ArgsStoryFn<ReactNode>) => (
    <Provider store={fakeStore()}>{story()}</Provider>
  ),
];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
Gray.decorators = [
  (story: ArgsStoryFn<ReactNode>) => (
    <Provider
      store={overrideFakeStore({ themeOverride: CarbonThemes.GRAY_10 })}
    >
      {story()}
    </Provider>
  ),
];

export const Dark = Template.bind({});
Dark.args = Object.assign({}, Default.args);
Dark.decorators = [
  (story: ArgsStoryFn<ReactNode>) => (
    <Provider
      store={overrideFakeStore({ themeOverride: CarbonThemes.GRAY_100 })}
    >
      {story()}
    </Provider>
  ),
];

export const TwoColumns = Template.bind({});
TwoColumns.args = Object.assign({}, Default.args);
TwoColumns.decorators = Array.from(Default.decorators);
TwoColumns.args.stars = false;
TwoColumns.args.sliderSettings = {
  ...sliderSettings,
  slidesToShow: 2,
  slidesToScroll: 2,
};

export const OneColumn = Template.bind({});
OneColumn.args = Object.assign({}, Default.args);
OneColumn.decorators = Array.from(Default.decorators);
OneColumn.args.stars = false;
OneColumn.args.sliderSettings = {
  ...sliderSettings,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const MissingProduct = Template.bind({});
MissingProduct.args = Object.assign({}, Default.args);
MissingProduct.decorators = Array.from(Default.decorators);
MissingProduct.args.trustRadiusId = 'missing-fake-trid';

export default stories;
