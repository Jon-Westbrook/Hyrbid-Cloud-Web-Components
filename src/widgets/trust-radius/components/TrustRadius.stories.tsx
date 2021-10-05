import React from 'react';
import TrustRadius, {
  TrustRadiusPersonalReview,
  TrustRadiusProps,
  TrustRadiusReview,
} from './TrustRadius';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const stories = {
  component: TrustRadius,
  title: 'Trust Radius',
};

const Template: Story<TrustRadiusProps> = (args) => <TrustRadius {...args} />;

export const Default = Template.bind({});
const fetcher = async (
  trustRadiusId: string,
): Promise<[TrustRadiusReview[], TrustRadiusPersonalReview]> => {
  const response = await import('./api-data-example.json');
  const parsed = response.default;
  const {
    data: reviews,
    config: {
      products: [product],
    },
  } = parsed;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return [reviews, product];
};
Default.args = {
  palette: 'light',
  googleStars: false,
  trustRadiusId: 'fake-trid',
  onError: action('error'),
  fetcher,
};

export const SlowResponse = Template.bind({});
SlowResponse.args = Object.assign({}, Default.args);
SlowResponse.args.fetcher = (trustRadiusId) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(fetcher(trustRadiusId)), Infinity);
  });

export const DarkPalette = Template.bind({});
DarkPalette.args = Object.assign({}, Default.args);
DarkPalette.args.palette = 'dark';

export const GrayPalette = Template.bind({});
GrayPalette.args = Object.assign({}, Default.args);
GrayPalette.args.palette = 'dark';

export const FailedRequest = Template.bind({});
FailedRequest.args = Object.assign({}, Default.args);
FailedRequest.args.fetcher = (trustRadiusId) =>
  new Promise((resolve, reject) => {
    reject('Error: manual error triggered for story');
  });

export default stories;
