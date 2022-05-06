import React, { ReactElement } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import Card from './Card/Card';
import Googlestars from './Card/Googlestars';
import SliderHeading from './SliderHeading';
import { FormattedMessage } from 'react-intl';
import { useAppSelector } from '../lib/redux/hooks';
import { useGetReviewsByIdQuery } from '../lib/redux/slices/fetchReviewsSlice';
import { Button } from 'carbon-components-react';
import { Launch16 } from '@carbon/icons-react';
import './CardSlider.scss';

export interface CardSliderProps {
  trustRadiusId: string;
  /** True if the component should include the Google Stars metadata. */
  stars: boolean;
  /** Settings for the React Slick Slider project. */
  sliderSettings: SliderSettings;
  setCustomSlider: React.Dispatch<Slider>;
  reviewUrl: string;
  /** true if number of products meets threshold for showing pagination */
  dotsAppended: boolean;
}

export const allReviewsButton = (url: string): ReactElement => (
  <Button kind="ghost" renderIcon={Launch16} href={url} target="_new">
    <FormattedMessage defaultMessage="Read all reviews" id="PU1OGb" />{' '}
  </Button>
);

export const CardSlider: React.FC<CardSliderProps> = ({
  trustRadiusId,
  stars,
  sliderSettings,
  setCustomSlider,
  reviewUrl,
  dotsAppended,
}) => {
  const { data } = useGetReviewsByIdQuery(trustRadiusId);
  const reviews = data?.reviews;
  const theme = useAppSelector((state) => state.theme);

  if (!data || !reviews?.length) {
    return <></>;
  }

  const starsComponent = stars ? (
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
          <FormattedMessage
            defaultMessage="What {name} customers are saying on"
            id="cJvElh"
            values={{ name: data.metadata.productName }}
          />
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
              {reviews.map((review, i) => (
                <Card
                  reviewIndex={i}
                  trustRadiusId={trustRadiusId}
                  key={`card-${i}`}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {!dotsAppended && (
        <div className="trust-radius-widget__cardslider__readlink">
          {allReviewsButton(reviewUrl)}
        </div>
      )}
    </div>
  );
};

export default CardSlider;
