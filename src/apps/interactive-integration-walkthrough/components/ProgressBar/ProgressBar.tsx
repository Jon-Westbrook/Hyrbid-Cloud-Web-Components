import { ProgressIndicator, ProgressStep } from 'carbon-components-react';
import { Step } from '../../lib/types';
import './ProgressBar.scss';

type ProgressBarProps = {
  currentStep: Step;
  steps: Array<Step>;
};
const ProgressBar = ({ currentStep, steps }: ProgressBarProps) => {
  return steps ? (
    <div className="interactive-widget__progress-bar">
      <ProgressIndicator currentIndex={steps.indexOf(currentStep)} spaceEqually>
        {steps.map((step, i) => (
          <ProgressStep key={`${step.key}-${i}`} label={step.key} />
        ))}
      </ProgressIndicator>
    </div>
  ) : null;
};

export default ProgressBar;
