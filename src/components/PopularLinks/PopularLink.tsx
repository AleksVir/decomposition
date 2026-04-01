import React from 'react';

interface PopularLinkProps {
  title: string;
  href: string;
  description?: string;
}

const PopularLink: React.FC<PopularLinkProps> = ({ title, href, description }) => {
  return (
    <a href={href} className="popular-link-content">
      <span className="popular-link-title">{title}</span>
      {description && (
        <span className="popular-link-description">
          — {description}
        </span>
      )}
      <span className="link-arrow">→</span>
    </a>
  );
};

export default PopularLink;

