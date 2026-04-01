import React from 'react';
import MenuItem from './MenuItem';

interface NavigationMenuProps {
  items: Array<{
    id: number;
    label: string;
    href: string;
  }>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ items }) => {
  return (
    <nav className="navigation-menu">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          label={item.label}
          href={item.href}
        />
      ))}
    </nav>
  );
};

export default NavigationMenu;