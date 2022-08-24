import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

const reactTestingLibrarySerializer: jest.SnapshotSerializerPlugin = {
  print: (val: unknown, serialize: (i: unknown) => string) =>
    serialize(val?.container?.firstChild),
  test: (val) => val && val.hasOwnProperty('container'),
};

initStoryshots({
  renderer: render,
  storyKindRegex: /^Widgets\//,
  snapshotSerializers: [reactTestingLibrarySerializer],
});
