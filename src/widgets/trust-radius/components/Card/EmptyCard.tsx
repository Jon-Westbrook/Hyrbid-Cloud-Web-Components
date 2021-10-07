/** @jsxImportSource @emotion/react */
import React from 'react';
import CardHeading from './CardHeading';
import { cardStyles } from './Card';

const EmptyCard: React.FC = () => (
  <div className="ibm-card" css={cardStyles.cardheight}>
    <div className="ibm-card__content">
      <CardHeading text="" />
      <div className="ibm-rule" css={cardStyles.cardhr}>
        <hr css={cardStyles.cardhr}></hr>
      </div>
      <div css={cardStyles.content} className="content ibm-pb-1">
        <em>This review contains no quotes.</em>
      </div>
    </div>
  </div>
);

export default EmptyCard;
