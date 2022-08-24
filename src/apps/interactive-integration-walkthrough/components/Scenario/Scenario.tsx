import Template from '../Template/Template';
import Navigation from '../Navigation/Navigation';
import UIFrame from '../UIFrame/UIFrame';
import Iframe from '../Iframe/Iframe';
import Lightbox from '../Lightbox/Lightbox';
import {
  Content,
  Scenario as ScenarioType,
  SetStepOrString,
  Step,
} from '../../lib/types';
import './Scenario.scss';
import PublicImage from '../../../../common/components/PublicImage';

type ScenarioProps = {
  currentScenario: ScenarioType;
  currentStep: Step;
  setStep: SetStepOrString;
  triggerRestart: () => void;
  steps: Array<Step>;
  advance: () => void;
  rewind: () => void;
  currentStepIsLastStep: boolean;
  hasOneScenario: boolean;
  content: Content;
};

const Scenario = ({
  currentScenario,
  currentStep,
  setStep,
  triggerRestart,
  steps,
  advance,
  rewind,
  currentStepIsLastStep,
  hasOneScenario,
  content: { end },
}: ScenarioProps) => {
  const { video, imagePath, hotspots } = currentStep;

  return (
    <Template
      navigation={
        <Navigation
          end={end}
          currentStep={currentStep}
          currentStepIsLastStep={currentStepIsLastStep}
          steps={steps}
          setStep={setStep}
          currentScenario={currentScenario}
          triggerRestart={triggerRestart}
          advance={advance}
          rewind={rewind}
          hasOneScenario={hasOneScenario}
        />
      }
    >
      {currentStep && (
        <UIFrame>
          {video && <Iframe src={video} />}
          {imagePath && (
            <PublicImage
              imgPath={imagePath}
              widgetId="interactive-integration-walkthrough"
              className="screen"
              alt={`An image showing a dashboard with hotspots for ${currentScenario.title}`}
            />
          )}
          {hotspots && <Lightbox setStep={setStep} hotspots={hotspots} />}
        </UIFrame>
      )}
    </Template>
  );
};

export default Scenario;
