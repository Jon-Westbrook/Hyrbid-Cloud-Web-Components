import React from 'react';
import messages from '../locales/messages';
import { FormattedMessage } from 'react-intl';
import { ClickableTile } from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';

import './PricingBandTile.scss';

const PricingBandTile: React.FC = () => {
  return (
    <ClickableTile
      href="https://www.carbondesignsystem.com/"
      // aria-label={<FormattedMessage {...messages['ctaCopy']} />}
    >
      <div className="expressive-heading-04">
        <FormattedMessage id="c1qDwZ" defaultMessage="FlashSystem 5015" />
      </div>
      <div className="price expressive-heading-03">
        <span>
          <FormattedMessage id="Flh+ac" defaultMessage="Starting at " />
        </span>
        <span>
          <FormattedMessage id="HRKWZy" defaultMessage="10,000" />
        </span>
      </div>
      <div className="body body-short-01">
        <FormattedMessage
          id="RIViTh"
          defaultMessage="The 5015 is designed for budget-conscious applications without
        compromising service, performance or capabilities."
        />
      </div>
      <ul className="bullets body-short-01">
        <li>
          <FormattedMessage id="NBAKw8" defaultMessage="400K IOPS per system" />
        </li>
        <li>
          <FormattedMessage id="CuL9D1" defaultMessage="8.2 GB/s per system" />
        </li>
        <li>
          <FormattedMessage id="UGudR+" defaultMessage="Maximum 32 GB cache" />
        </li>
        <li>
          <FormattedMessage id="oVQTJi" defaultMessage="Scale-up to 12 PB" />
        </li>
      </ul>
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
    </ClickableTile>
  );
};

export default PricingBandTile;
