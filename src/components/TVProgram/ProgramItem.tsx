import React from 'react';

interface ProgramItemProps {
  time: string;
  title: string;
  channel: string;
}

const ProgramItem: React.FC<ProgramItemProps> = ({ time, title, channel }) => {
  return (
    <div className="program-item-content">
      <span className="program-time">{time}</span>
      <div className="program-info">
        <h4 className="program-title">{title}</h4>
        <span className="program-channel">{channel}</span>
      </div>
    </div>
  );
};

export default ProgramItem;

