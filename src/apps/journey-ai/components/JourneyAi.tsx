import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SceneNav from './SceneNav';
import HomeNav from './HomeNav/HomeNav';
import MobileNav from './MobileNav';
import Animation from './Animation';
import InfoCard from './InfoCard';
import { baseFontSize, breakpoints } from '@carbon/layout';

import './JourneyAi.scss';
import {
  NamedBreakpoint,
  setBreakpoint,
} from '../lib/redux/slices/browserSlice';
import { selectAnimRight } from '../lib/redux/slices/presentationSlice';

type JourneyAiProps = {
  animRight: boolean;
};
const PureJourneyAi = ({}: JourneyAiProps): ReactElement => {
  const animRight = useSelector(selectAnimRight);
  const dispatch = useDispatch();

  useEffect(() => {
    const xlg = Number(breakpoints.xlg.width.replace('rem', '')) * baseFontSize;
    const lg = Number(breakpoints.lg.width.replace('rem', '')) * baseFontSize;
    const md = Number(breakpoints.md.width.replace('rem', '')) * baseFontSize;

    const resize = () => {
      let breakpoint: NamedBreakpoint;
      if (window.innerWidth < md) {
        breakpoint = 'mobile';
      } else if (window.innerWidth < lg) {
        breakpoint = 'tablet';
      } else if (window.innerWidth < xlg) {
        breakpoint = 'lg';
      } else {
        breakpoint = 'xlg';
      }
      dispatch(setBreakpoint(breakpoint));
    };
    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bx--grid bx--no-gutter">
      <div className="bx--row">
        <div className="bx--col">
          <div className="journey-ai-widget-container">
            <div className="journey-ai-widget">
              <SceneNav />
              <InfoCard />

              <div
                className={`animation-ui-container slow-02 ${
                  animRight ? 'home-right' : ''
                }`}
              >
                <HomeNav />
                <Animation />
              </div>

              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function JourneyAi(): ReactElement {
  const animRight = useSelector(selectAnimRight);
  return <PureJourneyAi animRight={animRight} />;
}
