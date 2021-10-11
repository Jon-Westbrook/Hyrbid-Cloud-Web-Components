/** @jsxImportSource @emotion/react */
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { css, SerializedStyles } from '@emotion/react';
import CardSlider from './CardSlider';
import { DataStatus, HOF } from 'hc-widgets';
import buildSliderSettings from '../lib/buildSliderSettings';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import Slider from 'react-slick';
import fetchReviews from '../lib/fetchReviews';

export type IBMPalettes = 'light' | 'gray' | 'dark';

export interface TrustRadiusPersonalReview {
  heading: string;
  modified: string;
  slug: string;
  name: string;
  count: number;
  score: number;
}

export interface TrustRadiusQuote {
  review: TrustRadiusPersonalReview;
  rating: number;
  text: string;
}

export interface TrustRadiusReview {
  quotes: TrustRadiusQuote[];
  name: { first: string; last: string };
  position?: { title: string };
  company?: {
    name: string;
    size?: string;
    industry?: { name: string };
  };
}

export interface TrustRadiusProps {
  /** Color palette to render the component. */
  palette: IBMPalettes;
  /** Weather or not to add the Google Stars JS to the page. */
  googleStars: boolean;
  /** Trust Radius ID. Mainly used to construct the URL for the data. */
  trustRadiusId: string;
  /** Error handler for the API response. Omit to use default. */
  onError?: (error: any) => void;
  /** Function to fetch the API data. Omit to use default. */
  fetcher?: (
    trustRadiusId: string,
  ) => Promise<[TrustRadiusReview[], TrustRadiusPersonalReview]>;
}

const TrustRadius: React.FC<TrustRadiusProps> = ({
  palette,
  googleStars,
  trustRadiusId,
  onError = console.error,
  fetcher = fetchReviews,
}) => {
  function getWidth(): number {
    return window.innerWidth;
  }

  function refreshWidth(): void {
    setWidth(getWidth());
  }

  useEffect(() => {
    window.addEventListener('resize', debounce(refreshWidth, 500));
    return () => window.removeEventListener('resize', refreshWidth);
  });

  const customSlider = useRef<Slider>();
  const [width, setWidth] = useState<number>(getWidth);
  const [status, setStatus] = useState<DataStatus>('loading');
  const [reviews, setReviews] = useState<TrustRadiusReview[]>([]);
  const [product, setProduct] = useState<TrustRadiusPersonalReview>();
  useEffect(() => {
    fetcher(trustRadiusId)
      .then(([reviews, product]) => {
        setReviews(reviews);
        setProduct(product);
        setStatus('ready');
      })
      .catch((reason) => {
        onError(reason);
        setStatus('error');
      });
  }, [trustRadiusId]);
  const wrapComponent: HOF<ReactElement> = (component) => (
    <div
      css={[styles.widget, styles[palette]]}
      className="Widget ibm-grid-seamless"
    >
      <div css={styles.widgetWrapper}>{component}</div>
    </div>
  );
  if (status === 'loading') {
    return wrapComponent(
      <div css={styles.message}>
        <p className="ibm-spinner ibm-p ibm-mt-2 ibm-mb-2 ibm-center" />
      </div>,
    );
  }
  if (status === 'error' || !product) {
    return wrapComponent(
      <div css={styles.message}>
        <p>
          The was a problem loading Trust Radius reviews. Please try again
          later.
        </p>
      </div>,
    );
  }
  const sliderSettings = buildSliderSettings(width);
  sliderSettings.appendDots = (dots) => {
    const noop = () => undefined;
    return (
      <CardSliderDots
        numRows={Math.ceil(reviews.length / (sliderSettings.slidesToShow || 1))}
        onPrevious={customSlider.current?.slickPrev || noop}
        onNext={customSlider.current?.slickNext || noop}
      >
        {dots}
      </CardSliderDots>
    );
  };
  sliderSettings.customPaging = (i) => <CardSliderPager pageNumber={i} />;
  return wrapComponent(
    <CardSlider
      product={product}
      reviews={reviews}
      stars={googleStars}
      theme={palette}
      sliderSettings={sliderSettings}
    />,
  );
};

const styles: Record<string, SerializedStyles> = {
  widget: css`
    @media (max-width: 32px) {
      height: 650px;
    }
    @media (min-width: 321px) {
      height: 622px;
    }
    & .slick-arrow {
      display: none !important;
    }
  `,
  widgetWrapper: css`
    max-width: 1584px;
    margin: 0 auto;
  `,
  light: css`
    background-color: #f2f4f8;
  `,
  dark: css`
    background-color: #161616;
  `,
  gray: css`
    background-color: #fff;
  `,
  message: css`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default TrustRadius;
