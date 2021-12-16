import React from 'react';

export type StarProps = { isEmpty: boolean };

const Star: React.FC<StarProps> = ({ isEmpty }) => (
  <svg
    viewBox="0 0 51 48"
    className={`dv-star-rating-star dv-star-rating-${
      isEmpty ? 'empty' : 'full'
    }-star`}
    style={{
      width: '12px',
      height: '12px',
      marginLeft: '1px',
      marginRight: '1px',
      fill: isEmpty ? '#CBD3E3' : '#1F71FF',
    }}
  >
    <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
  </svg>
);

export default Star;
