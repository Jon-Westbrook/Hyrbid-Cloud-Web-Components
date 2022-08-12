import { Accordion, AccordionItem, Button } from 'carbon-components-react';
import { ArrowRight16, ArrowLeft16 } from '@carbon/icons-react';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import times from 'lodash/times';
import { FormattedMessage } from 'react-intl';
import NavItem from '../NavItem/NavItem';
import Text from '../Text/Text';
import Pager from '../Pager/Pager';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Bullet, Scenario, SetStepOrString, Step } from '../../lib/types';
import './Navigation.scss';
import { messageType } from '../../locales/messages';

export type NavigationProps = {
  end: { ctaUrl: string };
  currentStep: Step;
  currentStepIsLastStep: boolean;
  currentScenario: Scenario;
  steps: Array<Step>;
  advance: () => void;
  rewind: () => void;
  triggerRestart: () => void;
  hasOneScenario: boolean;
  setStep: SetStepOrString;
};
const Navigation = ({
  end,
  currentStep,
  currentStepIsLastStep,
  currentScenario,
  steps,
  advance,
  rewind,
  triggerRestart,
  hasOneScenario,
}: NavigationProps) => {
  const intlBase = `${currentScenario.key}.${currentStep.key}`;
  const { withBody, withMore, withBullets, withNextSteps } = currentStep;

  function makeBulletConfig(bullet: string | Bullet) {
    if (isString(bullet)) return { key: bullet };
    return bullet;
  }

  function makeBulletsConfig(bullets: number | Bullet[]) {
    if (isNumber(bullets))
      return times(bullets, (i) => makeBulletConfig(`bullet${i + 1}`));
    return bullets.map((bullet) => makeBulletConfig(bullet));
  }

  const bullets = withBullets ? makeBulletsConfig(withBullets) : null;

  const { ctaUrl } = end;

  return (
    <NavItem>
      <div className="interactive-widget__nav-item">
        <Text
          as="h4"
          className="interactive-widget__step-title"
          intl={`${intlBase}.title` as messageType}
        />
        <ProgressBar currentStep={currentStep} steps={steps} />
        <div className="interactive-widget__body-wrapper">
          {withBody && (
            <Text
              className="interactive-widget__body"
              intl={`${intlBase}.body` as messageType}
            />
          )}
          {withBullets && (
            <>
              <ul className="interactive-widget__bullet-list">
                {bullets &&
                  bullets.map((bullet) => (
                    <Text
                      key={bullet.key}
                      as="li"
                      className="interactive-widget__body"
                      intl={`${intlBase}.${bullet.key}` as messageType}
                    />
                  ))}
              </ul>
            </>
          )}
          <div className="interactive-widget__actions">
            {currentStepIsLastStep && (
              <div>
                {ctaUrl ? (
                  <Button href={ctaUrl} renderIcon={ArrowRight16}>
                    <FormattedMessage
                      id="Qzz4pc"
                      defaultMessage="Talk to an expert"
                    />
                  </Button>
                ) : (
                  <Button
                    data-ibm-contact="scheduler-link"
                    renderIcon={ArrowRight16}
                  >
                    <FormattedMessage
                      id="Qzz4pc"
                      defaultMessage="Talk to an expert"
                    />
                  </Button>
                )}
              </div>
            )}
            {withNextSteps && (
              <div>
                <Text
                  className="interactive-widget__next-steps-header"
                  intl={`template.nextSteps`}
                >
                  Next Steps
                </Text>
                <Text
                  className="interactive-widget__body"
                  intl={`${intlBase}.nextSteps` as messageType}
                />
              </div>
            )}
          </div>
          {withMore && (
            <Accordion className="interactive-widget__accordion">
              <AccordionItem
                title={
                  <Text intl={'more.Details' as messageType}>More details</Text>
                }
              >
                <Text intl={`${intlBase}.moreDetails` as messageType} />
              </AccordionItem>
            </Accordion>
          )}
        </div>
        <div className="interactive-widget__footer">
          {hasOneScenario ? (
            <span className="interactive-widget__back-button" />
          ) : (
            <button
              onClick={triggerRestart}
              className="interactive-widget__back-button"
            >
              <ArrowLeft16 className="interactive-widget__back-button-icon" />
              <Text intl={`template.menu`} />
            </button>
          )}
          <Pager advance={advance} rewind={rewind} />
        </div>
      </div>
    </NavItem>
  );
};

export default Navigation;
