/** @jsxImportSource @emotion/react */
import React, { ReactElement, useState } from 'react';
import { useWindowSize } from '../../../common/hooks/useWindowSize';
import { css, SerializedStyles } from '@emotion/react';
import buildSliderSettings from '../lib/buildSliderSettings';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import CardSlider from './CardSlider';
import Slider from 'react-slick';
import { CarbonThemes } from '../../../types/carbon';
import { FormattedMessage } from 'react-intl';
import { useGetReviewsByIdQuery } from '../lib/redux/slices/fetchReviewsSlice';

export type HOF<T> = (input: T) => T;

export interface TrustRadiusProps {
  useGoogleStars: boolean;
  trustRadiusId: string;
  theme: string;
}

export interface TrustRadiusMetadata {
  id: string;
  productName: string;
  slug: string;
  totalCount: number;
  trScore: number;
}

export interface TrustRadiusReview {
  company?: {
    name: string;
    size?: string;
    industry?: string;
  };
  date: string;
  heading: string;
  name: string;
  title: string;
  quotes: string[];
  rating: number;
  slug: string;
}

export const TrustRadius: React.FC<TrustRadiusProps> = ({
  theme = CarbonThemes.WHITE,
  useGoogleStars = false,
  trustRadiusId,
}) => {
  const { data, error, isLoading } = useGetReviewsByIdQuery(trustRadiusId);
  const [customSlider, setCustomSlider] = useState<Slider>();
  const size = useWindowSize();

  const wrapComponent: HOF<ReactElement> = (component) => (
    <div
      css={[isLoading || error ? {} : styles.widget, styles[theme]]}
      className="Widget ibm-grid-seamless"
    >
      <div css={styles.widgetWrapper}>{component}</div>
    </div>
  );

  if (isLoading) {
    return wrapComponent(
      <div css={styles.message}>
        <p className="ibm-spinner ibm-p ibm-mt-2 ibm-mb-2 ibm-center" />
      </div>,
    );
  }

  if (error) {
    return wrapComponent(
      <div css={styles.message}>
        <FormattedMessage
          defaultMessage="There was a problem loading Trust Radius reviews. Please try again later."
          id="/WpBBe"
        />
      </div>,
    );
  }

  const sliderSettings = buildSliderSettings(
    data!.metadata.totalCount,
    size.width,
  );

  sliderSettings.appendDots = (dots) => {
    const noop = () => undefined;
    return (
      <CardSliderDots
        numRows={Math.ceil(
          data!.reviews.length / (sliderSettings.slidesToShow || 1),
        )}
        onPrevious={customSlider?.slickPrev || noop}
        onNext={customSlider?.slickNext || noop}
      >
        {dots}
      </CardSliderDots>
    );
  };
  sliderSettings.customPaging = (i) => <CardSliderPager pageNumber={i} />;
  return wrapComponent(
    <CardSlider
      trustRadiusId={trustRadiusId}
      stars={useGoogleStars}
      sliderSettings={sliderSettings}
      setCustomSlider={setCustomSlider}
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
  WHITE: css`
    background-color: #f2f4f8;
  `,
  GRAY_10: css`
    background-color: #fff;
  `,
  GRAY_100: css`
    background-color: #161616;
    .cardContainer {
      background-color: #161616;
    }
  `,
  message: css`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default TrustRadius;
