import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { Args, DecoratorFunction } from '@storybook/csf';

function storyWithClassNameWrapper<TArgs = Args>(
  className: string,
): DecoratorFunction<ReactFramework, TArgs> {
  return (story, {}): ReactElement => (
    <div className={`${className}`}>{story()}</div>
  );
}

export default storyWithClassNameWrapper;
