/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import CardHeading from './CardHeading';
import CardFooter from './CardFooter';
import CardBody from './CardBody';
import { TrustRadiusReview } from '../TrustRadius';

export interface CardProps {
  /** Data for the review */
  review: TrustRadiusReview;
}

const Card: React.FC<CardProps> = ({ review }) => {
  const cardUrl = 'https://www.trustradius.com/reviews/';
  const mainQuote = review.quotes[0];
  return (
    <>
      <a
        css={cardStyles.cardlinks}
        href={cardUrl + mainQuote.review.slug}
        target="_new"
      >
        <div className="ibm-card" css={cardStyles.cardheight}>
          <div className="ibm-card__content" css={cardStyles.cardcontent}>
            <CardHeading text={mainQuote.review.heading} />
            <CardBody
              text={review.quotes.reduce(
                (output, { text }) => output + `${text}<br/><br/> `,
                '',
              )}
              rating={mainQuote.rating}
              date={mainQuote.review.modified}
              maxLines={7}
            />
            <CardFooter
              firstName={review.name.first}
              lastName={review.name.last}
              jobTitle={review.position?.title}
              companyName={review.company?.name}
              companySize={review.company?.size}
              industry={review.company?.industry?.name}
            />
          </div>
        </div>
      </a>
    </>
  );
};

export const cardStyles: Record<string, SerializedStyles> = {
  cardlinks: css`
    text-decoration: none !important;
  `,
  cardheight: css`
    height: 450px;
    overflow: hidden;
    color: #000 !important;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      background-color: #e6e8ec;
    }
  `,
  cardcontent: css`
    height: 350px;
    overflow: hidden;
    padding: 16px !important;
    &:hover {
      text-decoration: none;
    }
  `,
};

export default Card;
