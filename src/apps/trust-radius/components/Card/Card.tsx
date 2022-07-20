import React from 'react';
import CardHeading from './CardHeading';
import CardProductName from './CardProductName';
import CardFooter from './CardFooter';
import CardBody from './CardBody';
import EmptyCard from './EmptyCard';
import { useGetReviewsByIdsQuery } from '../../lib/redux/slices/fetchReviewsSlice';
import { useTrustRadiusSelector } from '../../lib/redux/hooks';
import './Card.scss';

export interface CardProps {
  /** Data for the review */
  reviewIndex: number;
  trustRadiusIds: Array<string>;
}

export const Card: React.FC<CardProps> = ({ reviewIndex, trustRadiusIds }) => {
  const { data } = useGetReviewsByIdsQuery(trustRadiusIds);
  const review = data?.reviews ? data?.reviews[reviewIndex] : undefined;
  const theme = useTrustRadiusSelector((state) => state.theme);

  if (!review) {
    return <EmptyCard />;
  }
  const cardUrl = 'https://www.trustradius.com/reviews/';
  return (
    <>
      <a
        className="trust-radius-widget__card__cardlinks"
        href={`${cardUrl}${review.slug}`}
        target="_new"
      >
        <div
          className={`trust-radius-widget__card__cardheight trust-radius-widget__card__${theme}`}
        >
          <div className="trust-radius-widget__card__content">
            {data?.singleProduct ? (
              <CardHeading text={review.heading} />
            ) : (
              <CardProductName text={review.productName} />
            )}

            <div className="trust-radius-widget__card__bodyfootercontainer">
              <CardBody
                text={review.quotes
                  .map((quote: string) => `${quote}<br/><br/> `)
                  .join('')}
                rating={review.rating}
                createdDate={review.date}
                maxLines={7}
              />
              <CardFooter
                name={review.name}
                jobTitle={review.title}
                companyName={review.company?.name}
                companySize={review.company?.size}
                industry={review.company?.industry}
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
