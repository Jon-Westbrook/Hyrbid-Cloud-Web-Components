import React from 'react';
import { useGlobals } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';

export const toggleCSS = () => {
  const [{ CSSAdded }, updateGlobals] = useGlobals();
  const iframe = document.getElementById('storybook-preview-iframe');

  const toggle = () => {
    const linkElements = iframe.contentDocument.querySelectorAll(
      '[title="ibm-www-css"]',
    );

    for (let i = 0; i < linkElements.length; i++) {
      const element = linkElements[i];

      if (element.title === 'ibm-www-css') {
        element.disabled = !element.disabled;
      }
    }

    updateGlobals({ CSSAdded: !CSSAdded });
  };

  return (
    <IconButton
      active={CSSAdded}
      onClick={toggle}
      title="Toggle IBM v18/v19 stylesheets on/off"
    >
      <Icons icon="markup" />
    </IconButton>
  );
};
