/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../locales/messages';
import { css, SerializedStyles } from '@emotion/react';
import './PricingBand.scss';

export interface PricingBandProps {
  /**
   * One of the predefined greetings.
   *
   * @default Hello
   */
  greeting: 'Hello' | 'Hi' | 'Howdy';
  /**
   * The name of the user to greet.
   */
  name: string;
  /**
   * Set to true to greet with excitement.
   *
   * @default false
   */
  excitement: boolean;
}

const styles: Record<string, SerializedStyles> = {
  container: css`
    width: 15em;
    background-color: white;
    border-radius: 6px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    padding: 2em;
  `,
  heading: css`
    font-size: 1.4em;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 0.7em;
  `,
};

const PricingBand = ({
  greeting,
  name,
  excitement,
}: PricingBandProps): ReactElement => (
  <div css={styles.container}>
    <h5 css={styles.heading}>
      <FormattedMessage {...messages.greeting} />
    </h5>
    <div>
      {greeting}, <em>{name}</em>
      {excitement ? '!' : '.'}
    </div>
  </div>
);

export default PricingBand;
