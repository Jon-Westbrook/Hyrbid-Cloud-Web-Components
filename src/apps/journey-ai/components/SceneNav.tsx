import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './SceneNav.scss';
import { ArrowLeft16, DotMark16 } from '@carbon/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import dynamicFontSizePercent from '../utils/dynamicTextSizePercent';
import {
  selectCurrentSceneIndex,
  setCurrent,
} from '../lib/redux/slices/scenesSlice';
import { selectTransitioning } from '../lib/redux/slices/presentationSlice';
import messages, { getSceneNumbers } from '../locales/messages';
import { selectBreakpoint } from '../lib/redux/slices/browserSlice';

const SceneNav = (): ReactElement => {
  const currentScene = useSelector(selectCurrentSceneIndex);
  const isHome = currentScene === null;
  const transitioning = useSelector(selectTransitioning);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isHome) {
      setShow(false);
    } else {
      if (!transitioning) setShow(true);
    }
    // eslint-disable-next-line
  }, [transitioning]);

  const handleClickHome = () => {
    if (!transitioning) {
      dispatch(setCurrent(null));
    }
  };

  const handleClickScene = (i: number) => {
    if (!transitioning && i !== currentScene) {
      dispatch(setCurrent(i));
    }
  };

  const breakpoint = useSelector(selectBreakpoint);
  return (
    <CSSTransition
      in={show}
      timeout={{ enter: 110 + 300, exit: 400 + 150 }}
      classNames="scenenav-display"
      unmountOnExit
    >
      <div className="scenenav-container slow-01">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="column bx--col-sm-0 bx--col-md-0 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
              <div className="scenenav">
                {/* home button */}
                <button
                  className="home-btn expressive-heading-03 white fast-02-staggered"
                  onClick={handleClickHome}
                >
                  <span>
                    <ArrowLeft16 />
                  </span>
                  <FormattedMessage {...messages['home.title']}>
                    {(txt) => {
                      const maxWords = breakpoint === 'lg' ? 18 : 24;
                      const fontSizePercentHome = dynamicFontSizePercent(
                        `${txt}`,
                        maxWords,
                      );
                      const labelStylesHome: CSSProperties = {
                        lineHeight: '1.3em',
                        fontSize:
                          fontSizePercentHome === 100
                            ? undefined
                            : `${fontSizePercentHome}%`,
                      };
                      return (
                        <div className="text" style={labelStylesHome}>
                          {txt}
                        </div>
                      );
                    }}
                  </FormattedMessage>
                </button>

                {/* scene button */}
                {getSceneNumbers().map((i) => (
                  <button
                    className={`scene-btn expressive-heading-03 fast-02-staggered white-hover ${
                      i === currentScene ? 'white btn-on' : 'gray-50'
                    }`}
                    style={{ transitionDelay: `${(i + 1) * 50}ms` }}
                    onClick={() => handleClickScene(i)}
                    key={i}
                  >
                    <span>
                      <DotMark16 />
                    </span>
                    <FormattedMessage {...messages[`scene.${i}.title`]}>
                      {(txt) => {
                        const maxWords = breakpoint == 'lg' ? 18 : 24;
                        const fontSizePercentScene = dynamicFontSizePercent(
                          `${txt}`,
                          maxWords,
                          4,
                        );
                        const labelStylesScene: CSSProperties = {
                          lineHeight: '1.3em',
                          fontSize:
                            fontSizePercentScene === 100
                              ? undefined
                              : `${fontSizePercentScene}%`,
                        };
                        return (
                          <div className="text" style={labelStylesScene}>
                            {txt}
                          </div>
                        );
                      }}
                    </FormattedMessage>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SceneNav;
