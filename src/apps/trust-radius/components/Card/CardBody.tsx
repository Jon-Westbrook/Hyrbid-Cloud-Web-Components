import React from 'react';
import StarRating from '../StarRating/StarRating';
import Truncate from 'react-truncate';
import parse from 'html-react-parser';
import { useIntl } from 'react-intl';
import './CardBody.scss';

export interface CardBodyProps {
  /** Shown as the main text on the card. */
  text: string;
  /** Rating from 0 to 10. */
  rating: number;
  /** Date this review was written at. */
  createdDate?: string;
  /** Maximum number of lines before collapsing. */
  maxLines: number;
}

const CardBody: React.FC<CardBodyProps> = ({
  text,
  rating,
  createdDate,
  maxLines,
}) => {
  const { formatDate } = useIntl();
  let created: Date | null = new Date(createdDate ?? '');
  if (created.toTimeString() === 'Invalid Date') {
    created = null;
  }
  return (
    <>
      <div>
        <StarRating starCount={5} value={rating / 2.0} />

        <span className="trust-radius-widget__cardbody__dateline">
          {' '}
          {created ? (
            formatDate(created, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
          ) : (
            <></>
          )}
        </span>
      </div>
      <div className="trust-radius-widget__cardbody__cardhr" />
      <div className="trust-radius-widget__cardbody__content">
        <Truncate lines={maxLines} ellipsis={<span>... </span>}>
          {parse(text)}
        </Truncate>
      </div>
    </>
  );
};

export default CardBody;
