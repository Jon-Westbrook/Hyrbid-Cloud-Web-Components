import CardProductName, { CardProductNameProps } from './CardProductName';
import { Meta, Story } from '@storybook/react';

const stories: Meta = {
  component: CardProductName,
  title: 'Widgets/Trust Radius/Components/Slider/Card/Product Name',
};

const Template: Story<CardProductNameProps> = (args) => (
  <CardProductName {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Foo is the bar',
};

export const Empty = Template.bind({});
Empty.args = {
  text: '',
};

export default stories;
