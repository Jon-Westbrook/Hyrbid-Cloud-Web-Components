/** @jsxImportSource @emotion/react */
import React from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import { css, SerializedStyles } from '@emotion/react';
import Card from './Card/Card';
import Googlestars from './Card/Googlestars';
import SliderHeading from './SliderHeading';
import { TrustRadiusPersonalReview, TrustRadiusReview } from './TrustRadius';
import { CarbonThemes } from '../../../types/carbon';
import { connect } from 'react-redux';
import { TrustRadiusReducersMapper } from '../lib/redux/store';

interface StateProps {
  /** Different color styles according to the IBM design guidelines. */
  theme?: CarbonThemes;
  reviews?: TrustRadiusReview[];
  product?: TrustRadiusPersonalReview;
}

interface CardSliderOwnProps {
  trustRadiusId: string;
  /** True if the component should include the Google Stars metadata. */
  stars: boolean;
  /** Settings for the React Slick Slider project. */
  sliderSettings: SliderSettings;
  setCustomSlider: React.Dispatch<Slider>;
}

export type CardSliderProps = CardSliderOwnProps & StateProps;
export const PureCardSlider: React.FC<CardSliderProps> = ({
  reviews,
  product,
  stars,
  theme = CarbonThemes.WHITE,
  sliderSettings,
  setCustomSlider,
}) => {
  if (!product || !reviews?.length) {
    return <></>;
  }
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
      className="Widget ibm-grid-seamless"
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
              ref={(slider) => {
                slider && setCustomSlider(slider);
                return slider;
              }}
              {...sliderSettings}
            >
              {reviews.map((review, i) => (
                <Card
                  reviewIndex={i}
                  trustRadiusId={product.id}
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
          Read all reviews{' '}
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

export default connect<
  StateProps,
  Record<string, never>,
  CardSliderOwnProps,
  TrustRadiusReducersMapper
>(
  (states, props) => ({
    theme: states?.palette?.theme,
    product: states?.prods?.products[props.trustRadiusId]?.product,
    reviews: states?.prods?.products[props.trustRadiusId]?.reviews || [],
  }),
  () => ({}),
)(PureCardSlider);
