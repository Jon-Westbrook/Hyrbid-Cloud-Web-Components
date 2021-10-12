import React, { ReactElement, useEffect, useRef } from 'react';
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

export type IBMPalettes = 'light' | 'gray' | 'dark';
export type HOF<T> = (input: T) => T;

export interface TrustRadiusOwnProps {
  palette: IBMPalettes;
  useGoogleStars: boolean;
  trustRadiusId: string;
}

interface StateProps {
  isLoading: boolean;
  isError: boolean;
  product: TrustRadiusStateProduct;
  numCols: 1 | 2 | 4;
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
export const TrustRadius: React.FC<TrustRadiusProps> = ({
  palette,
  useGoogleStars,
  isLoading,
  isError,
  product,
  numCols,
  onInit,
  onWindowResize,
}) => {
  const customSlider = useRef<Slider>();
  useEffect(() => {
    product || onInit();
  }, [onInit, product]);
  useEffect(() => {
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, [onWindowResize]);
  const wrapComponent: HOF<ReactElement> = (component) => (
    <div
      css={[styles.widget, styles[palette]]}
      className="Widget ibm-grid-seamless"
    >
      <div css={styles.widgetWrapper}>{component}</div>
    </div>
  );
  if (isLoading || !product) {
    return wrapComponent(
      <div css={styles.message}>
        <p className="ibm-spinner ibm-p ibm-mt-2 ibm-mb-2 ibm-center" />
      </div>,
    );
  }
  if (isError) {
    return wrapComponent(
      <div css={styles.message}>
        <p>
          The was a problem loading Trust Radius reviews. Please try again
          later.
        </p>
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
      product={product.product}
      reviews={product.reviews}
      stars={useGoogleStars}
      theme={palette}
      sliderSettings={sliderSettings}
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
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<Record<string, any>, Record<string, any>, any>,
  ownProps: TrustRadiusOwnProps,
): DispatchProps => ({
  onInit: async () => {
    await dispatch(fetchProductDataAction(ownProps.trustRadiusId));
    console.debug('Data has been fetched!');
  },
  onWindowResize: debounce(
    () => dispatch(windowResizeAction(window.innerWidth)),
    1000,
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

export default connect<
  StateProps,
  DispatchProps,
  TrustRadiusOwnProps,
  TrustRadiusReducersMapper
>(
  mapStateToProps,
  mapDispatchToProps,
)(TrustRadius);
