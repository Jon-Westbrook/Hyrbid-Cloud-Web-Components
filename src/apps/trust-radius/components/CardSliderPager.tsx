import React from 'react';
import { CarbonThemes } from '../../../types/carbon';
import './CardSliderPager.scss';

export interface CardSliderPagerProps {
  /** The current page number. */
  pageNumber: number;
  /** Different color styles according to the IBM design guidelines. */
  theme?: CarbonThemes;
}

const CardSliderPager: React.FC<CardSliderPagerProps> = ({ pageNumber }) => (
  <div className="trust-radius-widget__cardsliderpager__pager">
    {pageNumber + 1}
  </div>
);

export default CardSliderPager;
