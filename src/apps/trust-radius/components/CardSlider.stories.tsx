import React from 'react';
import CardSlider, { CardSliderProps } from './CardSlider';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import buildSliderSettings from '../lib/buildSliderSettings';
import { CarbonThemes } from '../../../types/carbon';
import { Provider } from 'react-redux';
import overrideStore from '../lib/redux/overrideStore';
import storyWithTranslation from '../lib/storyWithTranslation';
import { TrustRadiusReducersMapper } from '../lib/redux/store';
import defaultFakeState from '../lib/redux/defaultFakeState';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';

const storyWithRedux =
  storyWithReduxDecorator<TrustRadiusReducersMapper>(defaultFakeState);
const stories: Meta = {
  component: CardSlider,
  title: 'Trust Radius/Components/Slider',
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
Default.decorators = [storyWithRedux()];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
Gray.decorators = [
  storyWithRedux({ palette: { theme: CarbonThemes.GRAY_10 } }),
];

export const Dark = Template.bind({});
Dark.args = Object.assign({}, Default.args);
Dark.decorators = [
  storyWithRedux({ palette: { theme: CarbonThemes.GRAY_100 } }),
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
