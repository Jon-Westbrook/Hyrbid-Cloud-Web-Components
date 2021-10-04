import React from 'react';
import { css, SerializedStyles } from '@emotion/core';
import CardHeading from './CardHeading';
import CardFooter from './CardFooter';
import CardBody from './CardBody';

export interface TrustRadiusPersonalReview {
  heading: string;
  modified: string;
  slug: string;
  name: string;
  count: number;
  score: number;
}

export interface TrustRadiusQuote {
  review: TrustRadiusPersonalReview;
  rating: number;
  text: string;
}

export interface TrustRadiusReview {
  quotes: TrustRadiusQuote[];
  name: { first: string; last: string };
  position?: { title: string };
  company?: {
    name: string;
    size?: string;
    industry?: { name: string };
  };
}

export interface CardProps {
  review: TrustRadiusReview;
  key: string;
}

const Card: React.FC<CardProps> = ({ review, key }) => {
  const cardUrl = 'https://www.trustradius.com/reviews/';
  const mainQuote = review.quotes[0];
  return (
    <>
      <a
        key={key}
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
