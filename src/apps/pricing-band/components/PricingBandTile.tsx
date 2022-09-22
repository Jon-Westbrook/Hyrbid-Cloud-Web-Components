import React from 'react';
import messages from '../locales/messages';
import { FormattedMessage } from 'react-intl';
import { ClickableTile } from 'carbon-components-react';

import './PricingBandTile.scss';

const PricingBandTile: React.FC = () => {
  return (
    <ClickableTile href="https://www.carbondesignsystem.com/">
      <div className="expressive-heading-04">FlashSystem 5015</div>
    </ClickableTile>
  );
};

export default PricingBandTile;
