import React from 'react';
import './SliderHeading.scss';

export interface SliderHeadingProps {
  /** The URL used to link to the review. */
  reviewUrl: string;
}

const SliderHeading: React.FC<SliderHeadingProps> = ({
  reviewUrl,
  children,
}) => (
  <a
    href={reviewUrl}
    className="trust-radius-widget__sliderheading__cardlinks"
    target="_new"
  >
    <div className="trust-radius-widget__sliderheading__headlink">
      {children}
      <img
        src="https://d30ia583fbtg8i.cloudfront.net/images/trustradius-wordmark-blue-240-40.png"
        className="trust-radius-widget__sliderheading__headimage"
        alt="TrustRadius logo"
      />
    </div>
  </a>
);

export default SliderHeading;
