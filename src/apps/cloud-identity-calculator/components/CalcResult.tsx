import React from 'react';
import { FormattedMessage } from 'react-intl';
import './CalcResult.scss';

export interface CalcResultProps {
  userCost: string;
  totalRUs: number;
}

const CalcResult: React.FC<CalcResultProps> = ({ userCost, totalRUs }) => {
  return (
    <div id="resultsRow" className="bx--row">
      <div>
        <div className="ru-results-tile">
          <div className="display-flex">
            <h6>
              <FormattedMessage defaultMessage="Results" id="yaMHMB" />
            </h6>
          </div>
          <p className="bx--custom--p" id="lower_results_text">
            <FormattedMessage
              defaultMessage="We estimate the cost per user to be:"
              id="E696Yi"
            />
          </p>
          <div className="bx--row" id="costRow">
            <div className="display-flex container-center">
              <div className="ru--totalCost">
                <h5 id="totalRUCost"> ${userCost}</h5>
              </div>
            </div>
          </div>
          <p className="bx--custom--p" id="lower_results_text">
            <FormattedMessage
              defaultMessage="According to your entries above, we estimate you will need the following number of resource units:"
              id="giaXci"
            />
          </p>

          <div className="bx--row" id="costRow">
            <div className="display-flex container-center">
              <div>
                <h5 id="totalRUs">{totalRUs}</h5>
              </div>
            </div>
          </div>

          <h6>
            <FormattedMessage
              defaultMessage="Ready to move forward?"
              id="hjHa0A"
            />
          </h6>
          <div className="bx--row">
            <a
              id="ru_calc_contact_sales"
              className="bx--btn bx--btn--primary"
              href="https://www.ibm.com/account/reg/signup?formid=MAIL-ibm"
            >
              <FormattedMessage defaultMessage="Contact sales" id="W0Tn8Y" />
            </a>
            <p className="bx--custom--p ru--or" id="or">
              <FormattedMessage defaultMessage="or" id="Ntjkqd" />
            </p>
            <a
              id="ru_calc_try_free"
              className="bx--btn bx--btn--tertiary"
              href="https://www.ibm.com/account/reg/signup?formid=urx-30041"
            >
              <FormattedMessage defaultMessage="Try free edition" id="OHvOSg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcResult;
