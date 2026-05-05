import React from 'react';

const items = [
  'Software Engineering',
  'Bloomberg LP',
  'USC Trojans',
  'React',
  'Python',
  'Computer Vision',
  'CI / CD',
  'Embedded Systems',
  'AI / ML',
  'TypeScript',
  'Docker',
  'Raspberry Pi',
];

function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
