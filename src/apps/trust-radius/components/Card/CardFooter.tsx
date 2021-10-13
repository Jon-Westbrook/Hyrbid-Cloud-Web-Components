/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

export interface CardFooterProps {
  firstName: string;
  lastName: string;
  jobTitle?: string;
  companyName?: string;
  companySize?: string;
  industry?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({
  firstName,
  lastName,
  jobTitle,
  companyName,
  companySize,
  industry,
}) => (
  <div className="footer ibm-type-a" css={styles.byline}>
    {firstName} {lastName}
    <br />
    {jobTitle}
    <br />
    {companyName}
    <br />
    {industry} {companySize}
  </div>
);

const styles: Record<string, SerializedStyles> = {
  byline: css`
    height: 32px;
    color: #393939;
    font-family: 'IBM Plex Sans';
    font-size: 12px;
    letter-spacing: 0.32px;
    line-height: 16px;
    position: absolute;
    top: 342px;
    padding-top: 10px;
    padding-bottom: 12px;
    z-index: 1;
  `,
};
export default CardFooter;
