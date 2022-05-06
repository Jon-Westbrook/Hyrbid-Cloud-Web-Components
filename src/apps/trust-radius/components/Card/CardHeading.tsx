import React from 'react';
import Truncate from 'react-truncate';
import './CardHeading.scss';

export interface CardHeadingProps {
  /** Heading text to display. */
  text: string | undefined;
}

const CardHeading: React.FC<CardHeadingProps> = ({ text }) => (
  <p className="trust-radius-widget__cardheading__heading">
    <Truncate lines={3} ellipsis={<span>... </span>}>
      {text || ''}
    </Truncate>
  </p>
);

export default CardHeading;
