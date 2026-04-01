import React from 'react';

interface LiveItemProps {
  title: string;
  channel: string;
  isLive: boolean;
  viewers?: number; // viewers — необязательное поле
}

const LiveItem: React.FC<LiveItemProps> = ({
  title,
  channel,
  isLive = false,
  viewers
}) => {
  return (
    <div className="live-item-content">
      <div className="live-item-header">
        <span className={`live-status ${isLive ? 'is-live' : 'not-live'}`}>
          {isLive ? '📺 ПРЯМОЙ ЭФИР' : 'ЗАПИСЬ'}
        </span>
        <h4 className="live-title">{title}</h4>
      </div>
      <p className="live-channel">Канал: {channel}</p>
      {viewers !== undefined && (
        <span className="viewers-count">
          Зрителей: {viewers.toLocaleString()}
        </span>
      )}
    </div>
  );
};

export default LiveItem;
