import React from 'react';
import ProgramItem from './ProgramItem';

interface TVProgramProps {
  programs: {
    id: number;
    time: string;
    title: string;
    channel: string;
  }[];
}

const TVProgram: React.FC<TVProgramProps> = ({ programs }) => {
  return (
    <div className="tv-program card">
      <div className="tv-program-header">
        <h3 className="tv-program-title">Телепрограмма</h3>
        <p className="tv-program-subtitle">Расписание на сегодня</p>
      </div>
      <ul className="tv-program-list">
        {programs.map((program) => (
          <li key={program.id} className="tv-program-item">
            <ProgramItem
              time={program.time}
              title={program.title}
              channel={program.channel}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TVProgram;
