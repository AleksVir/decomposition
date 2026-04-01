import React from 'react';

interface NewsItemProps {
  title: string;
  link: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, link }) => {
  return (
    <div className="news-item">
      <a href={link} className="news-link">
        {title}
      </a>
    </div>
  );
};

export default NewsItem;
