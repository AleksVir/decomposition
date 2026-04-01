import React from 'react';
import NewsItem from './NewsItem';

interface NewsListProps {
  news: Array<{
    id: number;
    title: string;
    link: string;
  }>;
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsItem
          key={item.id}
          title={item.title}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default NewsList;
