import React from 'react';
import PricingBandTile from './PricingBandTile';
import { FormattedMessage } from 'react-intl';
import './PricingBand.scss';
import { ArrowRight16 } from '@carbon/icons-react';
import {
  FlashSystem5015,
  FlashSystem5035,
  FlashSystem5050,
} from '../assets/data/products';

// Test Content Switcher based on URL, adding test query '&page=flashsystem=5000' will activate
let Tile1 = FlashSystem5015,
  Tile2 = FlashSystem5035,
  Tile3 = FlashSystem5050;

const currentPage = window.location.href;

switch (currentPage) {
  case 'http://localhost:6006/iframe.html?globals=locale:en&id=widgets-pricing-band-widget--page&viewMode=story&page=flashsystem-5000':
    Tile1 = FlashSystem5015;
    Tile2 = FlashSystem5035;
    Tile3 = FlashSystem5050;
    break;
  case 'http://localhost:6006/iframe.html?globals=locale:en&id=widgets-pricing-band-widget--page&viewMode=story&page=flashsystem-5200':
    Tile1 = FlashSystem5050;
    Tile2 = FlashSystem5035;
    Tile3 = FlashSystem5015;
    break;
  default:
    console.log('Default');
    Tile1 = FlashSystem5015;
    Tile2 = FlashSystem5035;
    Tile3 = FlashSystem5050;
    break;
}
// End Content Switcher based on URL

const PricingBand: React.FC = () => {
  return (
    <div className="pricing-band">
      <div id="" className="cmp-container">
        <div className="pb-heading expressive-heading-05">
          <FormattedMessage
            id="04LnDL"
            defaultMessage="Fast. Smart. Affordable hybrid cloud-enabled storage solutions."
          />
        </div>
        <p className="pb-desc body-short-02">
          <FormattedMessage
            id="1QM4mA"
            defaultMessage="In the marketplace you can browse the product catalog and compare
            systems or configurations to determine the best fit. The marketplace
            provides sample pricing for common configurations and allows you to
            request a quote tailored to the specific needs of your enterprise."
          />
          <br />
          <br />
          <FormattedMessage
            id="BHf6Oh"
            defaultMessage="Compact design for space-constrained edge locations. Consistent
            capabilities for on-prem and hybrid."
          />
          <br />
          <br />
          <FormattedMessage
            id="QGhxgq"
            defaultMessage="Ideal for edge storage, virtual and containerized environments."
          />
        </p>
        <a
          className="body-short-02"
          href="https://www.ibm.com/products/storage-as-a-service"
          style={{ textDecoration: 'none' }}
        >
          <span className="pb-desc-cta">
            <span className="label">
              <FormattedMessage
                id="VxhGib"
                defaultMessage="Explore IBM FlashSystem as a Service"
              />
            </span>
            &nbsp;&nbsp;
            <ArrowRight16 />
          </span>
        </a>
        <div className="block-card-container">
          <div className="bx--content-block-cards">
            <div className="bx--content-block">
              <div className="bx--card-group__cards__row bx--row--condensed">
                <div className="bx--card-group__cards__col" role="region">
                  <PricingBandTile
                    nameID={Tile1.nameID}
                    priceID={Tile1.priceID}
                    descID={Tile1.descID}
                    bulletAID={Tile1.bulletAID}
                    bulletBID={Tile1.bulletBID}
                    bulletCID={Tile1.bulletCID}
                    bulletDID={Tile1.bulletDID}
                  />
                </div>
                <div className="bx--card-group__cards__col" role="region">
                  <PricingBandTile
                    nameID={Tile2.nameID}
                    priceID={Tile2.priceID}
                    descID={Tile2.descID}
                    bulletAID={Tile2.bulletAID}
                    bulletBID={Tile2.bulletBID}
                    bulletCID={Tile2.bulletCID}
                    bulletDID={Tile2.bulletDID}
                  />
                </div>
                <div className="bx--card-group__cards__col" role="region">
                  <PricingBandTile
                    nameID={Tile3.nameID}
                    priceID={Tile3.priceID}
                    descID={Tile3.descID}
                    bulletAID={Tile3.bulletAID}
                    bulletBID={Tile3.bulletBID}
                    bulletCID={Tile3.bulletCID}
                    bulletDID={Tile3.bulletDID}
                  />
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
