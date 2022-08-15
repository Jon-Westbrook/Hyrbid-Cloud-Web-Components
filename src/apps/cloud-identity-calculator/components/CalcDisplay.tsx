import React, { MutableRefObject, useRef, useState } from 'react';
import CalcResult from './CalcResult';
import { FormattedMessage } from 'react-intl';
import messages from '../locales/messages';
import { Checkbox, Button } from 'carbon-components-react';
import './CalcDisplay.scss';
import {
  MAX_USERS_TIERS,
  SSO_RATES_TIERS,
  MFA_RATES_TIERS,
  AA_RATES_TIERS,
  LMG_RATES_TIERS,
  IA_RATES_TIERS,
} from '../assets/data/tiers.js';

const CalcDisplay: React.FC = () => {
  const consumerUsersRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [clear, setClear] = useState(false);

  const DEFAULT_RU_PRICE = 250;

  const [isConsumerSSOChecked, setConsumerSSOIsChecked] = useState(false);
  const [isConsumerMFAChecked, setConsumerMFAIsChecked] = useState(false);
  const [isConsumerAAChecked, setConsumerAAIsChecked] = useState(false);
  const [isConsumerLMGChecked, setConsumerLMGIsChecked] = useState(false);
  const [isConsumerIAChecked, setConsumerIAIsChecked] = useState(false);

  const [totalRUs, setTotalRUs] = useState(0);
  const [userCosts, setUserCosts] = useState('');

  const [isShow, setIsShow] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isConsumerUserInput, setIsConsumerUserInput] = useState(true);

  const onChangeConsumerSSO = () => {
    setConsumerSSOIsChecked(!isConsumerSSOChecked);
  };

  const onChangeConsumerMFA = () => {
    setConsumerMFAIsChecked(!isConsumerMFAChecked);
  };

  const onChangeConsumerAA = () => {
    setConsumerAAIsChecked(!isConsumerAAChecked);
  };

  const onChangeConsumerLMG = () => {
    setConsumerLMGIsChecked(!isConsumerLMGChecked);
  };

  const onChangeConsumerIA = () => {
    setConsumerIAIsChecked(!isConsumerIAChecked);
  };

  const add = () => {
    if (clear) setClear(false);

    const consumerUsers = consumerUsersRef.current.value;

    if (!consumerUsers && isError === false) {
      setIsConsumerUserInput(!isConsumerUserInput);
      setIsError(!setIsError);

      return {
        error: true,
        message: 'Parameter needed',
      };
    }

    if (consumerUsers) {
      if (isConsumerUserInput === false) {
        setIsConsumerUserInput(!isConsumerUserInput);
        setIsError(!setIsError);
      }
    }

    const cUsers = parseInt(consumerUsers);
    const totalUsers = cUsers;
    let total_RUs = 0;
    const monthlyCUsers = cUsers;

    if (isConsumerSSOChecked == true) {
      total_RUs += calculate(monthlyCUsers, SSO_RATES_TIERS);
    }

    if (isConsumerMFAChecked == true) {
      total_RUs += calculate(monthlyCUsers, MFA_RATES_TIERS);
    }

    if (isConsumerAAChecked == true) {
      total_RUs += calculate(monthlyCUsers, AA_RATES_TIERS);
    }

    if (isConsumerLMGChecked == true) {
      total_RUs += calculate(monthlyCUsers, LMG_RATES_TIERS);
    }
    if (isConsumerIAChecked == true) {
      total_RUs += calculate(cUsers, IA_RATES_TIERS);
    }

    const userCost = ((DEFAULT_RU_PRICE * total_RUs) / totalUsers / 12).toFixed(
      3,
    );

    setTotalRUs(total_RUs);
    setUserCosts(numberWithCommas(userCost));
    if (isShow === false) {
      setIsShow(!isShow);
    }
  };

  function numberWithCommas(x: string): string {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function calculate(users: number, dataset: Array<number>) {
    let RUs = 0;

    for (let i = 0; i < MAX_USERS_TIERS.length; i++) {
      if (MAX_USERS_TIERS[i] == 0) continue;
      const currentTier = MAX_USERS_TIERS[i];
      const prevTier = MAX_USERS_TIERS[i - 1];
      const currentTierRate = dataset[i];

      if (users >= currentTier) {
        RUs += (currentTier - prevTier) * currentTierRate;
      } else {
        RUs += (users - prevTier) * currentTierRate;
        RUs = Math.ceil(RUs);
        return RUs;
      }
    }

    return RUs; //This line will only run if total users is greater than the maximum allowed amount of users
  }

  return (
    <div className="ibm-grid-container ibm-duo-u--relative">
      <div className="ibm-grid-col-sm-4-4 ibm-grid-col-md-8-6 ibm-grid-col-lg-16-4 ibm-duo-u--pt-4">
        <div className="ibm-grid-col-sm-4-4 ibm-grid-col-md-8-6 ibm-grid-col-lg-16-8 ibm-grid-col-seamless ibm-mb-3 ani-reveal ani-fadeInUp"></div>
      </div>
      <div className="ibm-grid-col-sm-4-4 ibm-grid-col-md-8-6 ibm-grid-col-lg-16-8 ibm-duo-u--pt-md-4 ibm-duo-u--pb-8">
        <div className="bx--row ru-grid-parent-row">
          <form>
            <div>
              <div>
                <div className="bx--tile-container">
                  <div id="ru--calculator">
                    <div className="ru--main-tile">
                      <div>
                        <h4>
                          <FormattedMessage
                            defaultMessage="Population of individuals"
                            id="tmNOfI"
                          />
                        </h4>
                        <div className="bx--form">
                          <div
                            id="consumerUsersFormItem"
                            className="bx--form-item"
                          >
                            <label
                              htmlFor="consumerUsers"
                              className="bx--label"
                            >
                              <FormattedMessage
                                defaultMessage="Number of individuals"
                                id="Y5I6yI"
                              />
                            </label>
                            <input
                              ref={consumerUsersRef}
                              id="consumerUsers"
                              type="number"
                              className={`ru--numberValidation bx--text-input bx--text-input--light${
                                isConsumerUserInput
                                  ? ''
                                  : ' bx--text-input--invalid'
                              }`}
                              placeholder="eg. 1200000"
                            ></input>
                          </div>

                          <fieldset
                            id="consumerFieldset"
                            className="bx--fieldset"
                          >
                            <fieldset className="cds--fieldset">
                              <legend className="cds--label">
                                <FormattedMessage
                                  defaultMessage="Choose the use case for this population"
                                  id="8ITSDa"
                                />
                              </legend>
                              <Checkbox
                                labelText={
                                  <FormattedMessage
                                    {...messages['inputSingleSignOn']}
                                  />
                                }
                                id="consumerSSO"
                                checked={isConsumerSSOChecked}
                                onChange={onChangeConsumerSSO}
                              />
                              <Checkbox
                                labelText={
                                  <FormattedMessage
                                    {...messages['appMultiFactor']}
                                  />
                                }
                                id="consumerMFA"
                                checked={isConsumerMFAChecked}
                                onChange={onChangeConsumerMFA}
                              />
                              <Checkbox
                                labelText={
                                  <FormattedMessage
                                    {...messages['appAdaptiveAccess']}
                                  />
                                }
                                id="consumerAA"
                                checked={isConsumerAAChecked}
                                onChange={onChangeConsumerAA}
                              />
                              <Checkbox
                                labelText={
                                  <FormattedMessage
                                    {...messages['appUserLifecycle']}
                                  />
                                }
                                id="consumerLMG"
                                checked={isConsumerLMGChecked}
                                onChange={onChangeConsumerLMG}
                              />
                              <Checkbox
                                labelText={
                                  <FormattedMessage
                                    {...messages['appIdentityAnalytics']}
                                  />
                                }
                                id="consumerIA"
                                checked={isConsumerIAChecked}
                                onChange={onChangeConsumerIA}
                              />
                            </fieldset>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button onClick={add} id="calculateButton">
                        Calculate{' '}
                      </Button>
                    </div>

                    {isShow && (
                      <CalcResult totalRUs={totalRUs} userCost={userCosts} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalcDisplay;
