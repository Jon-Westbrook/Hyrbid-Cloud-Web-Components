/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import CardHeading from './CardHeading';
import CardFooter from './CardFooter';
import CardBody from './CardBody';
import EmptyCard from './EmptyCard';
import { useGetReviewsByIdQuery } from '../../lib/redux/slices/fetchReviewsSlice';
import { useAppSelector } from '../../lib/redux/hooks';

interface CardProps {
  /** Data for the review */
  reviewIndex: number;
  trustRadiusId: string;
}

export const Card: React.FC<CardProps> = ({ reviewIndex, trustRadiusId }) => {
  const { data, error, isLoading } = useGetReviewsByIdQuery(trustRadiusId);
  const review = data?.reviews[reviewIndex];
  const theme = useAppSelector((state) => state.theme);

  if (!review) {
    return <EmptyCard />;
  }
  const cardUrl = 'https://www.trustradius.com/reviews/';
  return (
    <>
      <a
        css={cardStyles.cardlinks}
        href={`${cardUrl} ${review.slug}`}
        target="_new"
      >
        <div
          className="ibm-card"
          css={[cardStyles.cardheight, cardStyles[theme]]}
        >
          <div className="ibm-card__content" css={cardStyles.cardcontent}>
            <CardHeading text={review.heading} />
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
      </a>
    </>
  );
};

export const cardStyles: Record<string, SerializedStyles> = {
  WHITE: css`
    border: 1px solid #f4f4f4;
  `,
  GRAY_10: css`
    border: 1px solid #fff;
    background: #f2f4f8;
  `,
  GRAY_100: css`
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

// export default connect<
//   StateProps,
//   Record<string, never>,
//   CardOwnProps,
//   TrustRadiusReducersMapper
// >(
//   (states, props) => ({
//     theme: states?.palette?.theme,
//     review:
//       states?.prods?.products[props.trustRadiusId]?.reviews[props.reviewIndex],
//   }),
//   () => ({}),
// )(PureCard);
