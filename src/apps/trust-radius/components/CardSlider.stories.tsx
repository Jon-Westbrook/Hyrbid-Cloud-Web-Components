import CardSlider, { CardSliderProps } from './CardSlider';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import buildSliderSettings from '../lib/buildSliderSettings';
import { CarbonThemes } from '../../../types/carbon';
import storyWithTranslation from '../lib/storyWithTranslation';
import { storyWithMockStore, handlers } from './TrustRadius.stories';

const stories: Meta = {
  component: CardSlider,
  title: 'Widgets/Trust Radius/Components/Slider',
  decorators: [storyWithTranslation()],
  parameters: { msw: { handlers } },
};

const Template: Story<CardSliderProps> = (args) => <CardSlider {...args} />;

export const Default = Template.bind({});
const sliderSettings = buildSliderSettings(4, window.innerWidth);
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
Default.decorators = [storyWithMockStore()];

export const Gray = Template.bind({});
Gray.args = { ...Default.args };
Gray.decorators = [
  storyWithMockStore({ overriddenState: { theme: CarbonThemes.GRAY_10 } }),
];

export const Dark = Template.bind({});
Dark.args = { ...Default.args };
Dark.decorators = [
  storyWithMockStore({ overriddenState: { theme: CarbonThemes.GRAY_100 } }),
];

export const TwoColumns = Template.bind({});
TwoColumns.args = { ...Default.args };
TwoColumns.decorators = [...Default.decorators];
TwoColumns.args.stars = false;
TwoColumns.args.sliderSettings = {
  ...sliderSettings,
  slidesToShow: 2,
  slidesToScroll: 2,
};

export const OneColumn = Template.bind({});
OneColumn.args = { ...Default.args };
OneColumn.decorators = [...Default.decorators];
OneColumn.args.stars = false;
OneColumn.args.sliderSettings = {
  ...sliderSettings,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default stories;
