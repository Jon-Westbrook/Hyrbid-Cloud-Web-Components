import Template from '../Template/Template';
import Navigation from '../Navigation/Navigation';
import UIFrame from '../UIFrame/UIFrame';
import Iframe from '../Iframe/Iframe';
import Lightbox from '../Lightbox/Lightbox';
import {
  Content,
  Scenario as ScenarioType,
  Step,
  SetStepOrString,
  ScenarioTitle,
} from '../../lib/types';
import ScenarioAImage from '../../assets/images/scenarioA-step1.png';
import ScenarioBImage from '../../assets/images/scenarioB-step1.png';
import './Scenario.scss';

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
  content,
}: ScenarioProps) => {
  const { end } = content;
  const { video, withImage, hotspots } = currentStep;

  const altTagDesc =
    withImage &&
    `An image showing a dashboard with hotspots for ${currentScenario.title}`;

  const currentScenarioTitle =
    currentScenario.key === ScenarioTitle.A
      ? ScenarioAImage
      : currentScenario.key === ScenarioTitle.B
      ? ScenarioBImage
      : undefined;

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
          {withImage && (
            <img
              className="screen"
              src={currentScenarioTitle}
              alt={altTagDesc}
            />
          )}
          {hotspots && <Lightbox setStep={setStep} hotspots={hotspots} />}
        </UIFrame>
      )}
    </Template>
  );
};

export default Scenario;
