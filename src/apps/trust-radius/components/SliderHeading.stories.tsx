import { PropsWithChildren } from 'react';
import SliderHeading, { SliderHeadingProps } from './SliderHeading';
import { Meta, Story } from '@storybook/react';
import storyWithClassNameWrapper from 'src/common/storyWithClassNameWrapper';

const stories: Meta = {
  component: SliderHeading,
  title: 'Widgets/Trust Radius/Components/Slider/Slider Heading',
};

const Template: Story<PropsWithChildren<SliderHeadingProps>> = (args) => (
  <SliderHeading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <span>This is a heading</span>,
};
Default.decorators = [
  storyWithClassNameWrapper('trust-radius-widget trust-radius-widget__WHITE'),
];

export default stories;
