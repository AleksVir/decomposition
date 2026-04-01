import React from 'react';

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  return (
    <a href={href} className="menu-item">
      {label}
    </a>
  );
};

export default MenuItem;
