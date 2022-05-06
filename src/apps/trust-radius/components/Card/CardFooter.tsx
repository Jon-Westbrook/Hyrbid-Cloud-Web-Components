import React from 'react';
import './CardFooter.scss';

export interface CardFooterProps {
  name: string;
  jobTitle?: string;
  companyName?: string;
  companySize?: string;
  industry?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({
  name,
  jobTitle,
  companyName,
  companySize,
  industry,
}) => (
  <div className="trust-radius-widget__cardfooter__byline">
    {name}
    <br />
    {jobTitle}
    <br />
    {companyName}
    <br />
    {industry} {companySize}
  </div>
);

export default CardFooter;
