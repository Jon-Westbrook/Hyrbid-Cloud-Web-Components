import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

export interface CardSliderPagerProps {
  pageNumber: number;
}

const CardSliderPager: React.FC<CardSliderPagerProps> = ({ pageNumber }) => (
  <div className="page" css={styles.pager}>
    {pageNumber + 1}
  </div>
);

const styles: Record<string, SerializedStyles> = {
  pager: css`
    width: '30px';
    border: '0px blue solid';
  `,
};

export default CardSliderPager;
