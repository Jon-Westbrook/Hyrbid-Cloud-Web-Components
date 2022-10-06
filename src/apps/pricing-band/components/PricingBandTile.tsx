/* eslint-disable formatjs/enforce-id */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ClickableTile } from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';

import './PricingBandTile.scss';

export interface PricingBandTileProps {
  nameID: string;
  priceID: string;
  descID: string;
  bulletAID: string;
  bulletBID: string;
  bulletCID: string;
  bulletDID: string;
}

const PricingBandTile: React.FC<PricingBandTileProps> = ({
  nameID,
  priceID,
  descID,
  bulletAID,
  bulletBID,
  bulletCID,
  bulletDID,
}) => {
  return (
    <ClickableTile href="https://www.carbondesignsystem.com/">
      <div className="expressive-heading-04">
        <FormattedMessage id={nameID} />
      </div>
      <div className="price expressive-heading-03">
        <span>
          <FormattedMessage id={priceID} />
        </span>
      </div>
      <div className="body body-short-01">
        <FormattedMessage id={descID} />
      </div>
      <ul className="bullets body-short-01">
        <li>
          <FormattedMessage id={bulletAID} />
        </li>
        <li>
          <FormattedMessage id={bulletBID} />
        </li>
        <li>
          <FormattedMessage id={bulletCID} />
        </li>
        <li>
          <FormattedMessage id={bulletDID} />
        </li>
      </ul>
      <div className="button-cta-group">
        <div className="button-group">
          <button className="bx--tag bx--tag--green">
            <span className="bx--tag__label">
              <FormattedMessage id="plusbl" defaultMessage="Midmarket" />
            </span>
          </button>
          <button className="bx--tag bx--tag--teal">
            <span className="bx--tag__label">
              <FormattedMessage id="EfpVDE" defaultMessage="SAS" />
            </span>
          </button>
          <br />
          <button className="bx--tag bx--tag--blue">
            <span className="bx--tag__label">
              <FormattedMessage id="EJ9D2e" defaultMessage="Virtualization" />
            </span>
          </button>
        </div>
        <span className="cta-copy">
          <span className="label">
            <FormattedMessage id="aX9C8R" defaultMessage="Talk to us" />
          </span>
          &nbsp;&nbsp;
          <ArrowRight16 />
        </span>
      </div>
    </ClickableTile>
  );
};

export default PricingBandTile;
