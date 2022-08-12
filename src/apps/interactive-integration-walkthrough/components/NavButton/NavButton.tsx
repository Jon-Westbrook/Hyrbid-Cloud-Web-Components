import { ArrowRight16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { FormattedMessage } from 'react-intl';
import { messages, messageType } from '../../locales/messages';
import './NavButton.scss';

type NavButtonProps = {
  label: { intl: messageType };
  handler: () => void;
};

export const NavButton = ({ label, handler }: NavButtonProps) => {
  return (
    <>
      <Button
        onClick={handler}
        renderIcon={ArrowRight16}
        className="interactive-widget__nav-button"
      >
        <span className="interactive-widget__nav-button-text">
          <FormattedMessage {...messages[label.intl]} />
        </span>
      </Button>
    </>
  );
};
