import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { DecoratorFunction } from '@storybook/csf';

const storyWithWrapper =
  (): DecoratorFunction<ReactFramework> =>
  (story, {}): ReactElement =>
    <div className="product-explorer-it-infra">{story()}</div>;

export default storyWithWrapper;
