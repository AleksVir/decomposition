// components/Header/Header.tsx
import React from 'react';

interface HeaderProps {
  title?: string;
  dateTime?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Сейчас в СМИ в Германии",
  dateTime = "31 июля, среда 02:32"
}) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p className="date-time">{dateTime}</p>
    </div>
  );
};

export default Header;
