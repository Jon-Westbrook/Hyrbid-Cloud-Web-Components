import React from 'react';
import messages from '../locales/messages';
import { FormattedMessage } from 'react-intl';
import { ClickableTile } from 'carbon-components-react';

import './Card.scss';

const PricingBandTile: React.FC = () => {
  return (
    <ClickableTile href="https://www.carbondesignsystem.com/">
      <div className="bx--card__heading">IBM FlashSystem 5000</div>
    </ClickableTile>
  );
};

export default PricingBandTile;
