import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { DecoratorFunction } from '@storybook/csf';

const storyWithClassNameWrapper =
  (className: string): DecoratorFunction<ReactFramework> =>
  (story, {}): ReactElement =>
    <div className={`${className}`}>{story()}</div>;

export default storyWithClassNameWrapper;
