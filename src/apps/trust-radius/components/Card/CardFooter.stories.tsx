import CardFooter, { CardFooterProps } from './CardFooter';
import { Meta, Story } from '@storybook/react';

const stories: Meta = {
  component: CardFooter,
  title: 'Trust Radius/Components/Slider/Card/Footer',
};

const Template: Story<CardFooterProps> = (args) => <CardFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  jobTitle: 'Senior Digital Designer',
  companyName: 'Acme Inc.',
  industry: 'Science & Technology',
  companySize: '> 500',
};

export const MinimalData = Template.bind({});
MinimalData.args = {
  name: 'John Doe',
};

export const IncompleteData = Template.bind({});
IncompleteData.args = {
  name: 'John Doe',
  companyName: 'Acme Inc.',
  companySize: '< 100',
};

export default stories;
