import React from 'react';
import PricingBandTile from './PricingBandTile';
import './PricingBand.scss';

const PricingBand: React.FC = () => {
  return (
    <div className="pricing-band">
      <div id="" className="cmp-container">
        <div className="block-card-container">
          <div className="bx--content-block-cards">
            <div className="bx--content-block">
              <div className="bx--card-group__cards__row bx--row--condensed">
                <div className="bx--card-group__cards__col" role="region">
                  <PricingBandTile />
                </div>
                <div className="bx--card-group__cards__col" role="region">
                  <PricingBandTile />
                </div>
                <div className="bx--card-group__cards__col" role="region">
                  <PricingBandTile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBand;
