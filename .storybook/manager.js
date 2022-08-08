import { addons, types } from '@storybook/addons';
import { toggleCSS } from './customTools';
import hybridCloud from './hybridCloud';

addons.setConfig({
  theme: hybridCloud,
});

addons.register('toggle_css_addon', () => {
  addons.add('toggle_css_tool', {
    type: types.TOOL,
    title: 'Toggle www stylesheet',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: toggleCSS,
  });
});
