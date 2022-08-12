import { ArrowRight16 } from '@carbon/icons-react';
import { messageType } from '../../locales/messages';
import NavItem from '../NavItem/NavItem';
import Text from '../Text/Text';
import './NavLink.scss';

type NavLinkProps = {
  label: { intl: messageType };
  handler: () => void;
};
function NavLink({ label, handler }: NavLinkProps) {
  const textProps = {
    as: 'span',
    intl: label.intl,
    children: label.intl ? null : label,
  };

  return (
    <NavItem
      as="button"
      className="interactive-widget__nav-button"
      onClick={handler}
    >
      <Text className="interactive-widget__nav-link-label" {...textProps} />
      <ArrowRight16 className="interactive-widget__icon" />
    </NavItem>
  );
}

export default NavLink;
