import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const events = [
    { year: '2001', title: 'How it all started', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.' },
    { year: '2006', title: 'How it all started', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.' },
    { year: '2010', title: 'How it all started', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.' },
    { year: '2012', title: 'How it all started', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.' },
  ];

  return (
    <div className="timeline-wrapper">
      {events.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <span className="timeline-year">{event.year}</span>
          <div className="timeline-content">
            <h3 className="timeline-title">{event.title} <em>started</em></h3>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
