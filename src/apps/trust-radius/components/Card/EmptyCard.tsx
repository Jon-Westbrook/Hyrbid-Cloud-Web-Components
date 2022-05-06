/** @jsxImportSource @emotion/react */
import React from 'react';
import CardHeading from './CardHeading';
import './Card.scss';

const EmptyCard: React.FC = () => (
  <div className="trust-radius-widget__card__cardheight">
    <div>
      <CardHeading text="" />
      <div className="trust-radius-widget__card__cardhr">
        <hr className="trust-radius-widget__card__cardhr"></hr>
      </div>
      <div className="trust-radius-widget__card__content">
        <em>This review contains no quotes.</em>
      </div>
    </div>
  </div>
);

export default EmptyCard;
