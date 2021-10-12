/** @jsxImportSource @emotion/react */
import React from 'react';

export interface CardSliderPagerProps {
  pageNumber: number;
}

const CardSliderPager: React.FC<CardSliderPagerProps> = ({ pageNumber }) => (
  <div
    className="page"
    style={{
      width: '30px',
      border: '0px blue solid',
    }}
  >
    {pageNumber + 1}
  </div>
);

export default CardSliderPager;
