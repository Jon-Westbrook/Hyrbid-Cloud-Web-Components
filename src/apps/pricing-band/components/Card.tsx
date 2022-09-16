import React from 'react';
import messages from '../locales/messages';
import { FormattedMessage } from 'react-intl';

import './Card.scss';

const Card: React.FC = () => {
  return (
    <div className="ibm-grid-container">
      <div className="ibm-grid-col-sm-4-4 ibm-grid-col-md-8-6 ibm-grid-col-lg-16-8">
        <div className="bx--row">
          <div className="bx--tile-container">
            <h1>
              <FormattedMessage {...messages['productHeadline']} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
