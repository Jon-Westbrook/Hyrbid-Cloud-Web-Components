/** @jsxImportSource @emotion/react */
import React from 'react';
import { IBMPalettes } from './TrustRadius';
import { css, SerializedStyles } from '@emotion/react';

export interface CardSliderPagerProps {
  /** The current page number. */
  pageNumber: number;
  /** Different color styles according to the IBM design guidelines. */
  theme?: IBMPalettes;
}

const CardSliderPager: React.FC<CardSliderPagerProps> = ({ pageNumber }) => (
  <div className="page" css={styles.pager}>
    {pageNumber + 1}
  </div>
);

const styles: Record<string, SerializedStyles> = {
  pager: css`
    width: 30px;
    border: 0px blue solid;
  `,
};

export default CardSliderPager;
