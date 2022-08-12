import './NavItem.scss';

type NavItemProps = {
  as?: React.FC | string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function NavItem({ as, children, ...props }: NavItemProps) {
  const Component = as || 'div';

  return (
    <Component className="interactive-widget__nav-item-wrapper" {...props}>
      {children}
    </Component>
  );
}

export default NavItem;
