import React from 'react';
import HalfStar from './HalfStar';
import Star from './Star';

export type StarRatingProps = {
  starCount: number;
  value: number;
};

const StarRating: React.FC<StarRatingProps> = ({ starCount, value }) => (
  <div
    className="dv-star-rating"
    style={{
      position: 'relative',
      boxSizing: 'border-box',
      display: 'inline-block',
    }}
  >
    {Array(starCount)
      .fill(0)
      .map((v, i) => i + 1)
      .map((position) => {
        const roundValue = Math.round(2 * value) / 2;
        // Render half a star if necessary.
        if (
          Math.floor(roundValue) < position &&
          Math.ceil(roundValue) === position
        ) {
          return <HalfStar key={position} />;
        }
        return <Star isEmpty={roundValue < position} key={position} />;
      })}
  </div>
);

export default StarRating;
