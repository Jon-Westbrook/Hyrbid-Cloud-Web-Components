import React from 'react';
import './CardProductName.scss';

export interface CardProductNameProps {
  /** Product name text to display. */
  text: string | undefined;
}

const CardProductName: React.FC<CardProductNameProps> = ({ text }) => (
  <p className="trust-radius-widget__cardproductname">{text || ''}</p>
);

export default CardProductName;
