export type ViewsProps = { content: Content };

export type Bullet = {
  key: string;
  goTo: string;
};

export type Hotspot = {
  x: number;
  y: number;
  goTo: string;
};

export type Step = {
  key: string;
  withNextSteps?: boolean;
  withMore?: boolean;
  withBody?: boolean;
  withBullets?: Array<Bullet> | number;
  withImage?: string;
  hotspots?: Array<Hotspot>;
  video?: string;
};

export type Scenario = {
  key: string;
  title: string;
  steps: Array<Step>;
};

export type Content = {
  start: {
    video: string;
    image?: string;
  };
  end: {
    ctaUrl: string;
  };
  scenarios: Array<Scenario>;
};

export type SetStepOrString = (step: Step | string) => void;

export enum ScenarioTitle {
  A = 'scenarioA',
  B = 'scenarioB',
}
