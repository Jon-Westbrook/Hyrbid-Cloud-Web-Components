/** @jsxImportSource @emotion/react */
import React from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import { css, SerializedStyles } from '@emotion/react';
import Card from './Card/Card';
import Googlestars from './Card/Googlestars';
import SliderHeading from './SliderHeading';
import { FormattedMessage } from 'react-intl';
import { useAppSelector } from '../lib/redux/hooks';
import { useGetReviewsByIdQuery } from '../lib/redux/slices/fetchReviewsSlice';

interface CardSliderProps {
  trustRadiusId: string;
  /** True if the component should include the Google Stars metadata. */
  stars: boolean;
  /** Settings for the React Slick Slider project. */
  sliderSettings: SliderSettings;
  setCustomSlider: React.Dispatch<Slider>;
}

export const CardSlider: React.FC<CardSliderProps> = ({
  trustRadiusId,
  stars,
  sliderSettings,
  setCustomSlider,
}) => {
  const { data, error, isLoading } = useGetReviewsByIdQuery(trustRadiusId);
  const reviews = data?.quotes;
  const theme = useAppSelector((state) => state.theme);

  if (!data || !reviews?.length) {
    return <></>;
  }
  const reviewUrl = `https://www.trustradius.com/products/${data.slug}/reviews?rk=ibmcvs20181&utm_campaign=tqw&utm_medium=widget&utm_source=www.trustradius.com&trtid=36d1014e-506a-4f6f-950b-7b22b55ffdc6`;
  const starsComponent = stars ? (
    <Googlestars
      product={data.productName}
      count={data.totalCount}
      score={data.trScore}
    />
  ) : (
    <></>
  );
  return (
    <div
      css={[styles.widget, styles[theme]]}
      className="Widget ibm-grid-seamless"
    >
      {starsComponent}
      <SliderHeading reviewUrl={reviewUrl}>
        <span>
          <FormattedMessage
            defaultMessage="What {name} customers are saying on"
            id="cJvElh"
            values={{ name: data.name }}
          />
        </span>
      </SliderHeading>
      <div
        className="ibm-grid-container"
        data-items=".ibm-card"
        css={styles.gridwise}
      >
        <div className="ibm-grid-col-sm-4-4">
          <div className="cardContainer" css={styles.quidproquo}>
            <Slider
              ref={(slider) => {
                slider && setCustomSlider(slider);
                return slider;
              }}
              {...sliderSettings}
            >
              {reviews.map((review, i) => (
                <Card
                  reviewIndex={i}
                  trustRadiusId={data.id}
                  key={`card-${i}`}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div css={styles.readlinkcont}>
        <a
          css={styles.readlink}
          className="ibm-ind-link ibm-pb-1 ibm-type-c"
          href={reviewUrl}
          target="_new"
        >
          <FormattedMessage defaultMessage="Read all reviews" id="PU1OGb" />{' '}
        </a>
      </div>
    </div>
  );
};

const styles: Record<string, SerializedStyles> = {
  WHITE: css`
    background-color: #f2f4f8;
    .slick-dots {
      .navdiv {
        background-color: #f2f4f8;
      }
    }
    .page {
      color: #000;
    }
  `,
  GRAY_10: css`
    background-color: #fff;
    .slick-dots {
      background-color: #161616 !important;
      .navdiv {
        background-color: #f2f4f8;
      }
    }
    .page {
      color: #000;
    }
    .cardContainer {
      background-color: #f2f4f8;
    }
  `,
  GRAY_100: css`
    background-color: #161616;
    .slick-dots {
      background-color: #161616 !important;
      .navdiv {
        background-color: #161616;
      }
    }
    .page {
      color: #f3f3f3;
    }
    .heading,
    .footer,
    .headlink {
      color: #c6c6c6;
    }
    .ibm-ind-link {
      background-color: #161616;
    }
  `,
  readlink: css`
    margin-left: 55px;
    position: relative;
    position: relative;
    background-color: #f3f4f8;
    bottom: 95px;
    text-decoration: none !important;
    font-family: 'IBM Plex Sans';
    &:after {
      font-family: icons-ibm-v12;
      content: '';
      font-size: 15px;
      top: 1px;
      position: relative;
    }
  `,
  readlinkcont: css`
    border: 0px;
    &:hover {
      text-decoration: none !important;
    }
  `,
  quidproquo: css`
    padding: 0px !important;
    & .slick-dots {
      padding: 0px !important;
    }
  `,
  widget: css`
    height: 597px;
    & .slick-arrow {
      display: none !important;
    }
    & .slick-slider {
      height: 515px;
    }
  `,
  gridwise: css`
    @media (min-width: 1584px) {
      margin-left: 16px !important;
      margin-right: 16px !important;
    }
  `,
};

export default CardSlider;
