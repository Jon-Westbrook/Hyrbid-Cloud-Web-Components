import React, { ReactElement, useEffect, useState } from 'react';
import { useWindowSize } from '../../../common/hooks/useWindowSize';
import buildSliderSettings from '../lib/buildSliderSettings';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import CardSlider from './CardSlider';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import { useGetReviewsByIdsQuery } from '../lib/redux/slices/fetchReviewsSlice';
import { useTrustRadiusSelector } from '../lib/redux/hooks';
import { Loading } from 'carbon-components-react';
import './TrustRadius.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type HOF<T> = (input: T) => T;

export interface TrustRadiusProps {
  useGoogleStars: boolean;
  trustRadiusIds: Array<string>;
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
  productName: string;
}

export const TrustRadius: React.FC<TrustRadiusProps> = ({
  useGoogleStars = false,
  trustRadiusIds,
}) => {
  const { data, error, isLoading } = useGetReviewsByIdsQuery(trustRadiusIds);
  const [customSlider, setCustomSlider] = useState<Slider>();
  const [dotsAppended, setDotsAppended] = useState(false);
  const theme = useTrustRadiusSelector((state) => state.theme);
  const size = useWindowSize();

  useEffect(() => {
    setDotsAppended(false);
  }, [size.width]);

  // We want this value if we're fetching only one product id.
  const reviewUrl = data?.singleProduct
    ? `https://www.trustradius.com/products/${data?.metadata.slug}/reviews?rk=ibmcvs20181&utm_campaign=tqw&utm_medium=widget&utm_source=www.trustradius.com&trtid=36d1014e-506a-4f6f-950b-7b22b55ffdc6`
    : undefined;

  const wrapComponent: HOF<ReactElement> = (component) => (
    <div className={`trust-radius-widget trust-radius-widget__${theme}`}>
      <div className="trust-radius-widget__wrapper">{component}</div>
    </div>
  );

  if (isLoading) {
    return wrapComponent(
      <div className="trust-radius-widget__message">
        <Loading withOverlay={false} />
      </div>,
    );
  }

  if (error) {
    return wrapComponent(
      <div className="trust-radius-widget__message">
        <FormattedMessage
          defaultMessage="There was a problem loading Trust Radius reviews. Please try again later."
          id="/WpBBe"
        />
      </div>,
    );
  }

  const sliderSettings = buildSliderSettings(
    data?.reviews.length || 1,
    size.width,
    trustRadiusIds[0],
    data?.singleProduct || false,
  );

  sliderSettings.appendDots = (dots) => {
    const noop = () => undefined;
    return (
      <CardSliderDots
        numRows={Math.ceil(
          (data?.reviews.length || 1) / (sliderSettings.slidesToShow || 1),
        )}
        onPrevious={customSlider?.slickPrev || noop}
        onNext={customSlider?.slickNext || noop}
        reviewUrl={reviewUrl}
        dotsClass={sliderSettings.dotsClass}
      >
        {dots}
      </CardSliderDots>
    );
  };
  sliderSettings.customPaging = (i) => <CardSliderPager pageNumber={i} />;
  sliderSettings.onReInit = () => {
    if (
      // We just need a unique identifier here, so use first id available.
      document.querySelector(`.slick-dots-for-${trustRadiusIds[0]}`) !== null
    ) {
      setDotsAppended(true);
    }
  };
  return wrapComponent(
    <CardSlider
      trustRadiusIds={trustRadiusIds}
      stars={useGoogleStars}
      sliderSettings={sliderSettings}
      setCustomSlider={setCustomSlider}
      reviewUrl={reviewUrl}
      dotsAppended={dotsAppended}
    />,
  );
};

export default TrustRadius;
