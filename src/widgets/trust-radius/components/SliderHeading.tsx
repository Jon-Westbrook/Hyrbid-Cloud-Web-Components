import React from 'react';
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';

export interface SliderHeadingProps {
  reviewUrl: string;
}

const SliderHeading: React.FC<SliderHeadingProps> = ({
  reviewUrl,
  children,
}) => (
  <a href={reviewUrl} css={styles.cardlinks} target="_new">
    <div
      css={styles.headlink}
      className="ibm-pt-2 ibm-pb-1 ibm-textcolor-gray-90 headlink"
    >
      {children}
      <img
        css={styles.headimage}
        src="https://d30ia583fbtg8i.cloudfront.net/images/trustradius-wordmark-blue-240-40.png"
        className="ibm-downsize"
        alt="TrustRadius logo"
      />
    </div>
  </a>
);

const styles: Record<string, SerializedStyles> = {
  headlink: css`
    color: #171717;
    font-family: 'IBM Plex Sans';
    font-size: 20px;
    letter-spacing: 0;
    line-height: 26px;
    margin-left: 55px;
    & span {
      padding-right: 4px;
    }
  `,
  cardlinks: css`
    text-decoration: none !important;
  `,
  headimage: css`
    width: 160px;
  `,
};

export default SliderHeading;
