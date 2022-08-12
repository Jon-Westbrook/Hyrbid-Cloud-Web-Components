import React, { useState, useCallback, useMemo } from 'react';
import Start from '../Start/Start';
import Scenario from '../Scenario/Scenario';
import { Scenario as ScenarioType, SetStepOrString } from '../../lib/types';
import isString from 'lodash/isString';
import { Step, ViewsProps } from '../../lib/types';

const Views: React.FC<ViewsProps> = ({ content }) => {
  const { scenarios } = content;
  const hasOneScenario = scenarios.length === 1;
  let startScenario = hasOneScenario ? scenarios[0] : null;
  let startStep = hasOneScenario ? startScenario?.steps[0] : null;
  startStep = startStep ? startStep : { key: '' };
  startScenario = startScenario
    ? startScenario
    : { key: '', steps: [], title: '' };

  const [currentScenario, setCurrentScenario] =
    useState<ScenarioType>(startScenario);
  const [currentStep, setCurrentStep] = useState<Step>(startStep);

  const scenarioForStep = (step: Step): ScenarioType => {
    return (
      scenarios.find(
        (scenario) =>
          Array.isArray(scenario.steps) && scenario.steps.includes(step),
      ) || { key: '', steps: [], title: '' }
    );
  };

  const steps = useMemo<Step[]>(() => {
    return scenarios.reduce((flatSteps, scenario) => {
      if (!Array.isArray(scenario.steps)) return flatSteps;
      return flatSteps.concat(scenario.steps as []);
    }, []);
  }, [scenarios]);

  const findStep = (key: string): Step => {
    return steps.find((step) => step.key === key) || { key: '' };
  };

  const triggerRestart = useCallback(() => {
    setCurrentScenario(currentScenario);
  }, []);

  const setStep: SetStepOrString = (stepOrKey) => {
    const step = isString(stepOrKey) ? findStep(stepOrKey) : stepOrKey;
    setCurrentStep(step);
    setCurrentScenario(scenarioForStep(step));
  };

  const setScenario = (scenario: ScenarioType) => {
    setStep(scenario.steps[0]);
  };

  const currentStepIsLastStep = steps.indexOf(currentStep) == steps.length - 1;

  const advance = () => {
    const nextStep = steps[steps.indexOf(currentStep) + 1];
    if (!nextStep) {
      setStep(steps[0]);
      return;
    }
    setStep(nextStep);
  };

  const rewind = () => {
    const previousStep = steps[steps.indexOf(currentStep) - 1];
    if (!previousStep) {
      setStep(steps[steps.length - 1]);
      return;
    }
    setStep(previousStep);
  };

  const viewProps = {
    triggerRestart,
    steps,
    setStep,
    setScenario,
    advance,
    rewind,
    scenarios,
    content,
    currentScenario,
    currentStep,
    currentStepIsLastStep,
    hasOneScenario,
  };

  if (!currentScenario.key)
    return (
      <Start
        content={content}
        scenarios={scenarios}
        setScenario={setScenario}
        currentScenario={currentScenario}
      />
    );
  if (currentScenario.key) return <Scenario {...viewProps} />;
  return null;
};

export default Views;
