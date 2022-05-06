import { ReactElement } from 'react';
import mergeDeep from 'lodash.merge';
import { Provider } from 'react-redux';
import { Story } from '@storybook/react';
import { Store } from 'redux';
import produce from 'immer';
import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U> ? Array<Value<U>> : Value<T[P]>;
};
type AllowedPrimitives = boolean | string | number;
type Value<T> = T extends AllowedPrimitives ? T : RecursivePartial<T>;
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
// make reducer property optional in ConfigureStoreOptions type
type OptionalCSO = Optional<ConfigureStoreOptions, 'reducer'>;

export interface StoryWithMockStoreParams<T> {
  defaultFakeState?: T;
  overriddenState?: RecursivePartial<T>;
  // name used to identify specific store for story in Redux devtools
  // preface with widget name (ex. "Trust Radius - Card")
  identifier: string;
}

export default function storyWithReduxDecorator<T>(
  params?: StoryWithMockStoreParams<T>,
  config?: OptionalCSO,
): (Story: Story) => ReactElement {
  const newState = mergeStateOverrides(
    params?.defaultFakeState || {},
    params?.overriddenState || {},
  );
  const newConfig = {
    ...config,
    preloadedState: newState,
    devTools: { name: params?.identifier || 'MIT Widget' },
  };
  const store = createStoreFromConfig(newConfig);

  return wrapStoryInProvider(store);
}

function createStoreFromConfig(config: OptionalCSO): Store {
  const { reducer, devTools, preloadedState, middleware } = config;

  return configureStore({
    reducer: typeof reducer === 'undefined' ? (s) => s : { ...reducer },
    devTools,
    preloadedState,
    middleware,
  });
}

function mergeStateOverrides<T>(
  defaultFakeState: T,
  overriddenState: RecursivePartial<T>,
) {
  return produce(defaultFakeState, (draft) => {
    mergeDeep(draft, overriddenState);
  });
}

function wrapStoryInProvider<T extends Store>(fakeStore: T) {
  return (Story: Story): ReactElement => (
    <Provider store={fakeStore}>
      <Story />
    </Provider>
  );
}
