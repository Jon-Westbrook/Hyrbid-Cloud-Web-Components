import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import './MobileNav.scss';
import { ArrowLeft24, DotMark16 } from '@carbon/icons-react';

import { useDispatch, useSelector } from 'react-redux';

import { CSSTransition } from 'react-transition-group';
import {
  selectCurrentSceneIndex,
  setCurrent,
  setHomeNavIn,
} from '../lib/redux/slices/scenesSlice';
import { selectTransitioning } from '../lib/redux/slices/presentationSlice';
import messages, { getSceneNumbers } from '../locales/messages';

const MobileNav = (): ReactElement => {
  const currentScene = useSelector(selectCurrentSceneIndex);
  const isHome = currentScene === null;
  const transitioning = useSelector(selectTransitioning);

  const dispatch = useDispatch();

  const handleClickHome = () => {
    if (!transitioning) {
      dispatch(setHomeNavIn(true));
      dispatch(setCurrent(null));
    }
  };

  const handleClickScene = (i: number) => {
    if (!transitioning && i !== currentScene) {
      dispatch(setHomeNavIn(false));
      dispatch(setCurrent(i));
    }
  };

  return (
    <div className="mobilenav-container">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <div className="mobilenav">
              <CSSTransition
                in={!isHome}
                timeout={{ enter: 110, exit: 110 }}
                classNames="mobilenav-home-display"
                unmountOnExit
              >
                <button
                  className="home-btn body-short-01 white fast-02"
                  onClick={handleClickHome}
                >
                  <ArrowLeft24 />
                </button>
              </CSSTransition>

              <div className="scene-btn-group">
                {getSceneNumbers().map((i) => (
                  <button
                    className={`body-short-01 ${
                      i === currentScene ? 'white btn-on' : 'gray-50'
                    }`}
                    onClick={() => handleClickScene(i)}
                    key={i}
                  >
                    <DotMark16 />
                    <FormattedMessage {...messages[`scene.${i}.title`]} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
