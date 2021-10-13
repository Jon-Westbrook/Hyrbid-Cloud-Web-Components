/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import CardHeading from './CardHeading';
import CardFooter from './CardFooter';
import CardBody from './CardBody';
import { IBMPalettes, TrustRadiusReview } from '../TrustRadius';

export interface CardProps {
  /** Data for the review */
  review: TrustRadiusReview;
  /** Different color styles according to the IBM design guidelines. */
  theme: IBMPalettes;
}

const Card: React.FC<CardProps> = ({ review, theme = 'light' }) => {
  const cardUrl = 'https://www.trustradius.com/reviews/';
  const mainQuote = review.quotes[0];
  return (
    <>
      <a
        css={cardStyles.cardlinks}
        href={cardUrl + mainQuote.review.slug}
        target="_new"
      >
        <div
          className="ibm-card"
          css={[cardStyles.cardheight, cardStyles[theme]]}
        >
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
  light: css`
    border: 1px solid #f4f4f4;
  `,
  gray: css`
    border: 1px solid #fff;
    background: #f2f4f8;
  `,
  dark: css`
    color: #f3f3f3;
    border: 1px solid #161616;
    background: #252525;
    &:hover {
      background-color: #353535;
    }
    .ibm-card__content,
    .body-short-01 {
      color: #c6c6c6;
    }
    .ibm-rule,
    .ibm-rule hr {
      border-top: 1px solid #565656;
    }
    .heading,
    .content,
    .caption-01,
    .footer {
      color: #c6c6c6;
    }
    .ibm-ind-link {
      background-color: #161616;
    }
  `,
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
