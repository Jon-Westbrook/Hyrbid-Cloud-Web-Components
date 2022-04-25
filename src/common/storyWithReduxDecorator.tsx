import React, { ReactElement } from 'react';
import mergeDeep from 'lodash.merge';
import { Provider } from 'react-redux';
import { DecoratorFn, Story } from '@storybook/react';
import { Store } from 'redux';
import produce from 'immer';
import { configureStore } from '@reduxjs/toolkit';

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U> ? Array<Value<U>> : Value<T[P]>;
};
type AllowedPrimitives = boolean | string | number;
type Value<T> = T extends AllowedPrimitives ? T : RecursivePartial<T>;

export function storyWithReduxFromStore<T extends Store>(fakeStore: T) {
  return (Story: Story): ReactElement => (
    <Provider store={fakeStore}>
      <Story />
    </Provider>
  );
}

export function buildStoreFromState<T>(state: T): Store {
  return configureStore({
    reducer: (s) => s,
    preloadedState: state,
  });
}

export function fakeStore<T>(
  defaultFakeState: T,
  overriddenState: RecursivePartial<T>,
): Store {
  const newState = produce(defaultFakeState, (draft) => {
    mergeDeep(draft, overriddenState);
  });
  return buildStoreFromState<T>(newState);
}

export default function storyWithReduxDecorator<T>(defaultFakeState: T) {
  return (overriddenState: RecursivePartial<T> = {}): DecoratorFn => {
    const store = fakeStore<T>(defaultFakeState, overriddenState);
    return storyWithReduxFromStore(store);
  };
}
