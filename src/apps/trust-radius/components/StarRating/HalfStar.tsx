import React from 'react';

const HalfStar: React.FC = () => (
  <svg
    viewBox="0 0 51 48"
    className="dv-star-rating-star dv-star-rating-half-star"
    style={{
      width: '12px',
      height: '12px',
      marginLeft: '1px',
      marginRight: '1px',
      fill: '#CBD3E3',
    }}
  >
    <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
    <path
      style={{ fill: '#1F71FF' }}
      d="M 25 1 L 19 18 L 1 18 L 15 29 L 10 46 L 25 36 L 25 1 z "
    />
  </svg>
);

export default HalfStar;
