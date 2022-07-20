import React from 'react';
import { Button } from 'carbon-components-react';
import { ChevronLeft32, ChevronRight32 } from '@carbon/icons-react';
import { allReviewsButton } from './CardSlider';
import './CardSliderDots.scss';

export interface CardSliderDotsProps {
  /** Number of rows for the nav section. */
  numRows: number;
  /** Action to perform when the previous button is triggered. */
  onPrevious: () => void;
  /** Action to perform when the next button is triggered. */
  onNext: () => void;
  reviewUrl: string | undefined;
  dotsClass?: string;
}

const CardSliderDots: React.FC<CardSliderDotsProps> = ({
  children,
  numRows,
  onPrevious,
  onNext,
  reviewUrl,
  dotsClass,
}) => {
  return (
    <div className={dotsClass}>
      {reviewUrl && allReviewsButton(reviewUrl)}
      <div className="trust-radius-widget__cardsliderdots__dotscontainer">
        <Button
          renderIcon={ChevronLeft32}
          iconDescription="Previous"
          hasIconOnly
          onClick={() => onPrevious()}
        />
        <ul className="trust-radius-widget__cardsliderdots__numlist">
          {children}
        </ul>
        <ul className="trust-radius-widget__cardsliderdots__numlist">
          <div>/</div>
        </ul>
        <ul className="trust-radius-widget__cardsliderdots__numlist">
          <div className="trust-radius-widget__cardsliderpager__pager">
            {numRows}
          </div>
        </ul>
        <Button
          renderIcon={ChevronRight32}
          iconDescription="Next"
          hasIconOnly
          onClick={() => onNext()}
        />
      </div>
    </div>
  );
};

export default CardSliderDots;
