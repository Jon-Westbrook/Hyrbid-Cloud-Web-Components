import React from 'react';
import CardHeading from './CardHeading';
import CardFooter from './CardFooter';
import CardBody from './CardBody';
import EmptyCard from './EmptyCard';
import { useGetReviewsByIdQuery } from '../../lib/redux/slices/fetchReviewsSlice';
import { useAppSelector } from '../../lib/redux/hooks';
import './Card.scss';

export interface CardProps {
  /** Data for the review */
  reviewIndex: number;
  trustRadiusId: string;
}

export const Card: React.FC<CardProps> = ({ reviewIndex, trustRadiusId }) => {
  const { data } = useGetReviewsByIdQuery(trustRadiusId);
  const reviews = data?.reviews;
  const review = reviews ? reviews[reviewIndex] : undefined;
  const theme = useAppSelector((state) => state.theme);

  if (!review) {
    return <EmptyCard />;
  }
  const cardUrl = 'https://www.trustradius.com/reviews/';
  return (
    <>
      <a
        className="trust-radius-widget__card__cardlinks"
        href={`${cardUrl} ${review.slug}`}
        target="_new"
      >
        <div
          className={`trust-radius-widget__card__cardheight trust-radius-widget__card__${theme}`}
        >
          <div className="trust-radius-widget__card__content">
            <CardHeading text={review.heading} />
            <div className="trust-radius-widget__card__bodyfootercontainer">
              <CardBody
                text={review.quotes
                  .map((quote) => `${quote}<br/><br/> `)
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
