import { AnimationSegment } from 'lottie-web';

export interface Scene {
  title: string;
  in: AnimationSegment;
  fromHome?: AnimationSegment;
  loop?: AnimationSegment;
  out?: AnimationSegment;
  labelIn?: number;
  infocardIn?: number;
}

const scenes: Scene[] = [
  {
    title: 'Scene 0',
    in: [780, 810],
    fromHome: [240, 284],
    loop: [810, 870],
    out: [870, 899],
  },
  {
    title: 'Scene 1',
    in: [660, 690],
    fromHome: [195, 239],
    loop: [690, 750],
    out: [750, 779],
  },
  {
    title: 'Scene 2',
    in: [540, 570],
    fromHome: [150, 194],
    loop: [570, 630],
    out: [630, 659],
  },
  {
    title: 'Scene 3',
    in: [390, 420],
    fromHome: [105, 149],
    loop: [420, 510],
    out: [510, 539],
  },
  {
    title: 'Scene 4',
    in: [900, 930],
    fromHome: [285, 329],
    loop: [930, 990],
    out: [990, 1019],
  },
  {
    title: 'Scene 5',
    in: [1020, 1065],
    fromHome: [330, 389],
    loop: [1065, 1125],
    out: [1125, 1169],
  },
];

export default scenes;

export const homeScene: Scene = {
  title: 'Intro',
  in: [0, 104],
  labelIn: 20,
  infocardIn: 30,
};
