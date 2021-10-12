/** @jsxImportSource @emotion/react */
import React, { MutableRefObject } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import { css, SerializedStyles } from '@emotion/react';
import Card from './Card/Card';
import EmptyCard from './Card/EmptyCard';
import Googlestars from './Card/Googlestars';
import SliderHeading from './SliderHeading';
import {
  IBMPalettes,
  TrustRadiusPersonalReview,
  TrustRadiusReview,
} from './TrustRadius';

export interface CardSliderProps {
  reviews: TrustRadiusReview[];
  product: TrustRadiusPersonalReview;
  /** True if the component should include the Google Stars metadata. */
  stars: boolean;
  theme: IBMPalettes;
  sliderSettings: SliderSettings;
  customSlider: MutableRefObject<Slider | undefined>;
}

const CardSlider: React.FC<CardSliderProps> = ({
  reviews,
  product,
  stars,
  theme,
  sliderSettings,
  customSlider,
}) => {
  const reviewUrl = `https://www.trustradius.com/products/${product.slug}/reviews?rk=ibmcvs20181&utm_campaign=tqw&utm_medium=widget&utm_source=www.trustradius.com&trtid=36d1014e-506a-4f6f-950b-7b22b55ffdc6`;
  const starsComponent = stars ? (
    <Googlestars
      product={product.name}
      count={product.count}
      score={product.score}
    />
  ) : (
    <></>
  );
  return (
    <div
      css={[styles.widget, styles[theme]]}
      className="Widget ibm-grid-seamless ibm-background-gray-20"
    >
      {starsComponent}
      <SliderHeading reviewUrl={reviewUrl}>
        <span>What {product.name} customers are saying on</span>
      </SliderHeading>
      <div
        className="ibm-grid-container"
        data-items=".ibm-card"
        css={styles.gridwise}
      >
        <div className="ibm-grid-col-sm-4-4">
          <div className="cardContainer" css={styles.quidproquo}>
            <Slider
              ref={(slider) => (customSlider.current = slider || undefined)}
              {...sliderSettings}
            >
              {reviews.map(function (review, i) {
                return review.quotes.length ? (
                  <Card review={review} key={`card-${i}`} />
                ) : (
                  <EmptyCard />
                );
              })}
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
          Read all reviews{' '}
        </a>
      </div>
    </div>
  );
};

const styles: Record<string, SerializedStyles> = {
  light: css`
    background-color: #f2f4f8;
  `,
  dark: css`
    background-color: #161616;
  `,
  gray: css`
    background-color: #fff;
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
      content: '\f1ac';
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
