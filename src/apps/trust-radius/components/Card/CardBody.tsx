/** @jsxImportSource @emotion/react */
import React from 'react';
import StarRatings from 'react-star-ratings';
import moment from 'moment';
import Truncate from 'react-truncate';
import parse from 'html-react-parser';
import { css, SerializedStyles } from '@emotion/react';

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
  return (
    <>
      <div>
        <StarRatings
          rating={rating / 2}
          starRatedColor="#1f71ff"
          numberOfStars={5}
          starDimension="12px"
          starSpacing="1px"
        />

        <span className="caption-01" css={styles.dateline}>
          {' '}
          {moment(createdDate).format('MMM Do YYYY')}
        </span>
      </div>
      <div className="ibm-rule" css={styles.cardhr}>
        <hr css={styles.cardhr} />
      </div>

      <div css={styles.content} className="content ibm-pb-1">
        <Truncate lines={maxLines} ellipsis={<span>... </span>}>
          {parse(text)}
        </Truncate>
      </div>
    </>
  );
};

const styles: Record<string, SerializedStyles> = {
  content: css`
    color: #282828;
    font-family: 'IBM Plex Sans';
    font-size: 16px;
    letter-spacing: 0;
    line-height: 22px;
  `,
  dateline: css`
    float: right;
    font-family: 'IBM Plex Sans';
    font-size: 12px;
    letter-spacing: 0.32px;
    color: #393939;
  `,
  cardhr: css`
    border-top: 1px solid #bebebe;
    &:hover {
      text-decoration: none;
    }
  `,
};
export default CardBody;
