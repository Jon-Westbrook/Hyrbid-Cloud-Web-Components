/** @jsxImportSource @emotion/react */
import React from 'react';
import StarRating from '../StarRating/StarRating';
import Truncate from 'react-truncate';
import parse from 'html-react-parser';
import { css, SerializedStyles } from '@emotion/react';
import { useIntl } from 'react-intl';

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

        <span className="caption-01" css={styles.dateline}>
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
