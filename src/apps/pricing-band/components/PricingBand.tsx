import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../locales/messages';
import './MyWidget.scss';

export interface MyWidgetProps {
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

const MyWidget = ({
  greeting,
  name,
  excitement,
}: MyWidgetProps): ReactElement => (
  <div className="my-widget__container">
    <h5 className="my-widget__heading">
      <FormattedMessage {...messages.greeting} />
    </h5>
    <div>
      {greeting}, <em>{name}</em>
      {excitement ? '!' : '.'}
    </div>
  </div>
);

export default MyWidget;
