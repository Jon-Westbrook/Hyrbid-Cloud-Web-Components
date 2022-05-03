import { Link } from 'gatsby';
import React from 'react';
import Home from '../../../../images/home.svg';
import Table from '../../../../images/table.svg';
import Archive from '../../../../images/archive.svg';

type SidebarLinkProps = {
  to: string;
  current: boolean;
  name: string;
  iconName: string | undefined;
};

const icons: Record<string, string> = {
  Home,
  Archive,
  Table,
};

export default function SidebarLink({
  to,
  current,
  name,
  iconName,
}: SidebarLinkProps) {
  const LinkIcon = iconName ? icons[iconName] ?? Home : Home;
  return (
    <Link
      to={to}
      className={[
        current ? 'bg-charcoal-800' : 'hover:bg-charcoal-800 hover:text-white',
        'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium uppercase font-sans text-white',
      ].join(' ')}
      aria-current={current ? 'page' : undefined}
    >
      <img
        src={LinkIcon}
        alt={name}
        className="h-4 xl:h-6 xl:w-6 w-4"
        aria-current={current ? 'page' : undefined}
      />
      <span className="mt-2">{name}</span>
    </Link>
  );
}
