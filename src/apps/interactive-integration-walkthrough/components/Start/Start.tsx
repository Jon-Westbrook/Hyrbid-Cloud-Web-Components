import Template from '../Template/Template';
import UIFrame from '../UIFrame/UIFrame';
import Iframe from '../Iframe/Iframe';
import './Start.scss';
import { Content, Scenario, Scenario as ScenarioType } from '../../lib/types';
import { NavButton } from '../NavButton/NavButton';
import { messageType } from '../../locales/messages';

type StartProps = {
  content: Content;
  scenarios: Scenario[];
  setScenario: (scenario: Scenario) => void;
  currentScenario: ScenarioType;
};

const Start = ({
  content,
  scenarios,
  setScenario,
  currentScenario,
}: StartProps) => {
  const navigationButton = (
    <>
      {scenarios.map((scenario) => (
        <NavButton
          key={scenario.key}
          label={{ intl: `${scenario.key}.title` as messageType }}
          handler={() => setScenario(scenario)}
        />
      ))}
    </>
  );

  const { start } = content;
  const { image, video } = start;
  const altTagDesc =
    image &&
    `An image showing a dashboard with hotspots for ${currentScenario.title}`;

  return (
    <Template navigation={navigationButton}>
      <UIFrame>
        {video && <Iframe src={video} />}
        {image && (
          <img src={image} className="start__screen" alt={altTagDesc} />
        )}
      </UIFrame>
    </Template>
  );
};

export default Start;
