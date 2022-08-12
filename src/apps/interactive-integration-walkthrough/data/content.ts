import assets from './assets';

export default {
  start: {
    video: assets.startVideo,
  },
  end: {
    ctaUrl: 'https://www.ibm.com/account/reg/signup?formid=urx-50122',
  },
  scenarios: [
    {
      key: 'scenarioA',
      title: 'App Integration',
      steps: [
        {
          key: 'stepA1',
          withNextSteps: false,
          withMore: false,
          withBody: false,
          withBullets: [
            {
              key: 'bullet1',
              goTo: 'stepA2',
            },
            {
              key: 'bullet2',
              goTo: 'stepA3',
            },
            {
              key: 'bullet3',
              goTo: 'stepA4',
            },
          ],

          withImage: assets.scenarioAstep1,
          hotspots: [
            { x: 860, y: 625, goTo: 'stepA2' },
            { x: 1120, y: 325, goTo: 'stepA3' },
            { x: 250, y: 220, goTo: 'stepA4' },
          ],
        },
        {
          key: 'stepA2',
          withBullets: 4,
          video: assets.scenarioAstep2,
        },
        {
          key: 'stepA3',
          withBullets: 3,
          video: assets.scenarioAstep3,
        },
        {
          key: 'stepA4',
          withBullets: 3,
          video: assets.scenarioAstep4,
        },
      ],
    },
    {
      key: 'scenarioB',
      title: 'API Management',
      steps: [
        {
          key: 'stepB1',
          withNextSteps: false,
          withBullets: [
            {
              key: 'bullet1',
              goTo: 'stepB2',
            },
            {
              key: 'bullet2',
              goTo: 'stepB3',
            },
            {
              key: 'bullet3',
              goTo: 'stepB4',
            },
          ],
          withImage: assets.scenarioBstep1,
          hotspots: [
            { x: 1190, y: 100, goTo: 'stepB2' },
            { x: 90, y: 405, goTo: 'stepB3' },
            { x: 90, y: 505, goTo: 'stepB4' },
          ],
        },
        {
          key: 'stepB2',
          withBullets: 3,
          video: assets.scenarioBstep2,
        },
        {
          key: 'stepB3',
          withBullets: 3,
          video: assets.scenarioBstep3,
        },
        {
          key: 'stepB4',
          withBullets: 4,
          video: assets.scenarioBstep4,
        },
      ],
    },
  ],
};
