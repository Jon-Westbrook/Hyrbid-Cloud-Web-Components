import React from 'react';

import { Story } from '@storybook/react';

export default {
  component: <div />,
  title: 'Product Explorer/Product Detail',
};

const Template: Story = (args) => <div {...args} />;

export const Default = Template.bind({});
Default.args = {};
