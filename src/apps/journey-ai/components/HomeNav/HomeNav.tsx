import React, { ReactElement, useEffect, useState } from 'react';
import './HomeNav.scss';
import Label from './Label';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  selectCurrentSceneIndex,
  selectHomeNavIn,
  setCurrent,
} from '../../lib/redux/slices/scenesSlice';
import { selectTransitioning } from '../../lib/redux/slices/presentationSlice';
import { getSceneNumbers } from '../../locales/messages';

const HomeNav = (): ReactElement => {
  const [show, setShow] = useState(false);
  const currentScene = useSelector(selectCurrentSceneIndex);
  const isHome = currentScene === null;
  const transitioning = useSelector(selectTransitioning);
  const homeNavIn = useSelector(selectHomeNavIn);

  const dispatch = useDispatch();

  useEffect(() => {
    setShow(isHome && !!homeNavIn);
  }, [homeNavIn, isHome]);

  const handleClickScene = (i: number) => {
    if (!transitioning) {
      dispatch(setCurrent(i));
    }
  };

  return (
    <CSSTransition
      in={show}
      timeout={{ enter: 400 + 205 * 5, exit: 110 }}
      classNames="homenav-display"
      unmountOnExit
    >
      <div className="homenav white">
        {getSceneNumbers().map((i) => (
          <div
            className="labels slow-01-staggered"
            style={{ transitionDelay: `${i * 205}ms` }}
            key={i}
          >
            <Label
              handleClickScene={handleClickScene}
              i={i}
              reductionIndex={4}
            />
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default HomeNav;
