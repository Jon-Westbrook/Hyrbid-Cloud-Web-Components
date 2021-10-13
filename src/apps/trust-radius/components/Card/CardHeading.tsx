/** @jsxImportSource @emotion/react */
import React from 'react';
import Truncate from 'react-truncate';
import { css, SerializedStyles } from '@emotion/react';

export interface CardHeadingProps {
  /** Heading text to display. */
  text: string | undefined;
}

const CardHeading: React.FC<CardHeadingProps> = ({ text }) => (
  <p className="heading ibm-type-e" css={styles.heading}>
    <Truncate lines={3} ellipsis={<span>... </span>}>
      {text || ''}
    </Truncate>
  </p>
);
const styles: Record<string, SerializedStyles> = {
  heading: css`
    height: 75px;
    color: #282828;
    font-family: 'IBM Plex Sans';
    letter-spacing: 0;
  `,
};
export default CardHeading;
