import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

const reactTestingLibrarySerializer: jest.SnapshotSerializerPlugin = {
  print: (val: any, serialize, indent) => serialize(val?.container?.firstChild),
  test: (val) => val && val.hasOwnProperty('container'),
};

initStoryshots({
  renderer: render,
  snapshotSerializers: [reactTestingLibrarySerializer],
});
