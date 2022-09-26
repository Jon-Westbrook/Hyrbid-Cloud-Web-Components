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
      aria-label="Talk to us"
    >
      <div className="expressive-heading-04">
        <FormattedMessage id="c1qDwZ" defaultMessage="FlashSystem 5015" />
      </div>
      <div className="price expressive-heading-03">Starting at 10, 000</div>
      <div className="body body-short-01">
        The 5015 is designed for budget-conscious applications without
        compromising service, performance or capabilities.
      </div>
      <ul className="bullets body-short-01">
        <li>400k IOPS per system</li>
        <li>8.2 GB/s per system</li>
        <li>Maximum 32 GB cache</li>
        <li>Scale-up to 12 PB</li>
      </ul>
      <div className="button-group">
        <button className="bx--tag bx--tag--green">
          <span className="bx--tag__label">Midmarket</span>
        </button>
        <button className="bx--tag bx--tag--teal">
          <span className="bx--tag__label">SAS</span>
        </button>
        <br />
        <button className="bx--tag bx--tag--blue">
          <span className="bx--tag__label">Virtualization</span>
        </button>
      </div>
      <span className="cta-copy">
        <span className="label">Talk to us</span>&nbsp;&nbsp;
        <ArrowRight16 />
      </span>
    </ClickableTile>
  );
};

export default PricingBandTile;
