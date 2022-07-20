import React, { ReactElement } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import Card from './Card/Card';
import Googlestars from './Card/Googlestars';
import SliderHeading from './SliderHeading';
import { FormattedMessage } from 'react-intl';
import { useTrustRadiusSelector } from '../lib/redux/hooks';
import { useGetReviewsByIdsQuery } from '../lib/redux/slices/fetchReviewsSlice';
import { Button } from 'carbon-components-react';
import { Launch16 } from '@carbon/icons-react';
import './CardSlider.scss';

export interface CardSliderProps {
  trustRadiusIds: Array<string>;
  /** True if the component should include the Google Stars metadata. */
  stars: boolean;
  /** Settings for the React Slick Slider project. */
  sliderSettings: SliderSettings;
  setCustomSlider: React.Dispatch<Slider>;
  reviewUrl: string | undefined;
  /** True if number of products meets threshold for showing pagination. */
  dotsAppended: boolean;
}

export const allReviewsButton = (url: string): ReactElement => (
  <Button kind="ghost" renderIcon={Launch16} href={url} target="_new">
    <FormattedMessage defaultMessage="Read all reviews" id="PU1OGb" />{' '}
  </Button>
);

export const CardSlider: React.FC<CardSliderProps> = ({
  trustRadiusIds,
  stars,
  sliderSettings,
  setCustomSlider,
  reviewUrl,
  dotsAppended,
}) => {
  const { data } = useGetReviewsByIdsQuery(trustRadiusIds);
  const theme = useTrustRadiusSelector((state) => state.theme);

  if (!data || !data.reviews?.length) {
    return <></>;
  }

  // Regardless of editor's google-stars selection, only render if this is a single-product instance.
  const starsComponent =
    data.singleProduct && stars ? (
      <Googlestars
        product={data.metadata.productName}
        count={data.metadata.totalCount}
        score={data.metadata.trScore}
      />
    ) : (
      <></>
    );
  return (
    <div
      className={`trust-radius-widget__cardslider__container trust-radius-widget__cardslider__${theme}`}
    >
      {starsComponent}
      <SliderHeading reviewUrl={reviewUrl}>
        <span>
          {data.singleProduct ? (
            <FormattedMessage
              defaultMessage="What{name} customers are saying on"
              id="WFOL/Z"
              values={{
                name: data.metadata.productName,
              }}
            />
          ) : (
            <FormattedMessage
              defaultMessage="What customers are saying on"
              id="IObqRv"
            />
          )}
        </span>
      </SliderHeading>
      <div className="trust-radius-widget__cardslider__gridwise">
        <div>
          <div className="trust-radius-widget__cardslider__quidproquo cardContainer">
            <Slider
              ref={(slider) => {
                slider && setCustomSlider(slider);
                return slider;
              }}
              {...sliderSettings}
            >
              {data.reviews.map((review, i) => (
                <Card
                  reviewIndex={i}
                  trustRadiusIds={trustRadiusIds}
                  key={`card-${i}`}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {!dotsAppended && reviewUrl && (
        <div className="trust-radius-widget__cardslider__readlink">
          {allReviewsButton(reviewUrl)}
        </div>
      )}
    </div>
  );
};

export default CardSlider;
