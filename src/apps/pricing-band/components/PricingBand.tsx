import React from 'react';
import Card from './Card';

const PricingBand: React.FC = () => {
  return (
    <div className="pricing-band">
      <div className="pricing-band__inner">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default PricingBand;
