import React from 'react';
import LiveItem from './LiveItem';

interface LiveBlockProps {
  broadcasts: {
    id: number;
    title: string;
    channel: string;
    viewers?: number; // Поле viewers теперь необязательное
  }[];
}

const LiveBlock: React.FC<LiveBlockProps> = ({ broadcasts }) => {
  return (
    <div className="live-block">
      <div className="live-block-header">
        <h3 className="live-block-title">Эфир</h3>
        <p className="live-block-subtitle">Текущие трансляции</p>
      </div>
      <ul className="live-list">
        {broadcasts.map((broadcast) => (
          <li key={broadcast.id} className="live-item">
            <LiveItem
              title={broadcast.title}
              channel={broadcast.channel}
              isLive={true}
              viewers={broadcast.viewers} // Передаём viewers, если есть
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveBlock;
