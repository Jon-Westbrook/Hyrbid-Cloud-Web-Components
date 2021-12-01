/** @jsxImportSource @emotion/react */
import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { TrustRadiusReducersMapper } from '../lib/redux/store';
import { TrustRadiusStateProduct } from '../lib/redux/reducers/setProductReducer';
import windowResizeAction from '../lib/redux/actions/windowResizeAction';
import debounce from 'lodash.debounce';
import fetchProductDataAction from '../lib/redux/actions/fetchProductDataAction';
import { css, SerializedStyles } from '@emotion/react';
import buildSliderSettings from '../lib/buildSliderSettings';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import CardSlider from './CardSlider';
import Slider from 'react-slick';
import { CarbonThemes } from '../../../types/carbon';
import setThemeAction from '../lib/redux/actions/setThemeAction';
import { FormattedMessage } from 'react-intl';

export type HOF<T> = (input: T) => T;

export interface TrustRadiusOwnProps {
  useGoogleStars: boolean;
  trustRadiusId: string;
  theme: string;
}

interface StateProps {
  isLoading: boolean;
  isError: boolean;
  product: TrustRadiusStateProduct;
  numCols: 1 | 2 | 4;
  palette: CarbonThemes;
}

interface DispatchProps {
  onInit: () => void;
  onWindowResize: () => void;
}

export interface TrustRadiusPersonalReview {
  heading: string;
  modified: string;
  slug: string;
  name: string;
  count: number;
  score: number;
  id: string;
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

export type TrustRadiusProps = TrustRadiusOwnProps & StateProps & DispatchProps;
export const PureTrustRadius: React.FC<TrustRadiusProps> = ({
  palette = CarbonThemes.WHITE,
  useGoogleStars = false,
  isLoading,
  isError,
  trustRadiusId,
  product,
  numCols,
  onInit,
  onWindowResize,
}) => {
  const [customSlider, setCustomSlider] = useState<Slider>();
  useEffect(() => {
    product || onInit();
  }, [onInit, product]);
  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, [onWindowResize]);
  const needsSpinner = isLoading || !product;
  const wrapComponent: HOF<ReactElement> = (component) => (
    <div
      css={[needsSpinner || isError ? {} : styles.widget, styles[palette]]}
      className="Widget ibm-grid-seamless"
    >
      <img
        src={`${(process?.env?.PUBLIC_ASSETS_URL || '').replace(
          /\/$/,
          '',
        )}/trust-radius/test-image.png`}
        alt="Test Image"
      />
      <div css={styles.widgetWrapper}>{component}</div>
    </div>
  );
  if (needsSpinner) {
    return wrapComponent(
      <div css={styles.message}>
        <p className="ibm-spinner ibm-p ibm-mt-2 ibm-mb-2 ibm-center" />
      </div>,
    );
  }
  if (isError) {
    return wrapComponent(
      <div css={styles.message}>
        <FormattedMessage
          id="trust-radius.error-message"
          defaultMessage="The was a problem loading Trust Radius reviews. Please try again later."
        />
      </div>,
    );
  }
  const sliderSettings = buildSliderSettings(numCols);
  sliderSettings.appendDots = (dots) => {
    const noop = () => undefined;
    return (
      <CardSliderDots
        numRows={Math.ceil(
          product.reviews.length / (sliderSettings.slidesToShow || 1),
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

const mapStateToProps = (
  states: TrustRadiusReducersMapper,
  ownProps: TrustRadiusOwnProps,
): StateProps => {
  return {
    isLoading:
      states.status.fetchStatus !== 'READY' &&
      states.status.fetchStatus !== 'FAILURE',
    isError: states.status.fetchStatus === 'FAILURE',
    product: states.prods.products[ownProps.trustRadiusId],
    numCols: states?.cols?.numCols,
    palette: states?.palette.theme,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<Record<string, any>, Record<string, any>, any>,
  ownProps: TrustRadiusOwnProps,
): DispatchProps => ({
  onInit: async () => {
    dispatch(setThemeAction(ownProps.theme));
    dispatch(fetchProductDataAction(ownProps.trustRadiusId));
  },
  onWindowResize: debounce(
    () => dispatch(windowResizeAction(window.innerWidth)),
    250,
  ),
});

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

export default connect<
  StateProps,
  DispatchProps,
  TrustRadiusOwnProps,
  TrustRadiusReducersMapper
>(
  mapStateToProps,
  mapDispatchToProps,
)(PureTrustRadius);
