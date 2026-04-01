import React from 'react';
import PopularLink from './PopularLink';

interface PopularLinksProps {
  links: {
    id: number;
    title: string;
    href: string;
    description?: string;
  }[];
}

const PopularLinks: React.FC<PopularLinksProps> = ({ links }) => {
  return (
    <div className="popular-links card">
      <div className="popular-links-header">
        <h3 className="popular-links-title">Посещаемое</h3>
        <p className="popular-links-subtitle">Популярные ссылки сегодня</p>
      </div>
      <ul className="popular-links-list">
        {links.map((link) => (
          <li key={link.id} className="popular-link-item">
            <PopularLink
              title={link.title}
              href={link.href}
              description={link.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularLinks;

