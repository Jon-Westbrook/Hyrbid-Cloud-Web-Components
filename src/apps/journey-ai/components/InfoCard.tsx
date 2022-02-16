import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './InfoCard.scss';
import messages, { getLinkNumbers } from '../locales/messages';
import { ArrowRight16 } from '@carbon/icons-react';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import dynamicFontSizePercent from '../utils/dynamicTextSizePercent';
import {
  selectCurrentSceneIndex,
  selectInfocardIn,
} from '../lib/redux/slices/scenesSlice';

const InfoCard = (): ReactElement => {
  const [rootID, setRootID] = useState('home');
  const [isScene, setIsScene] = useState(false);

  const currentScene = useSelector(selectCurrentSceneIndex);
  const isHome = currentScene === null;
  const infocardIn = useSelector(selectInfocardIn);

  useEffect(() => {
    if (!infocardIn) {
      return;
    }
    setIsScene(!isHome);
    if (isHome) {
      setRootID('home');
      return;
    }
    setRootID(`scene.${currentScene}`);
  }, [infocardIn]);

  return (
    <div className="infocard-container">
      <div className="bx--grid">
        <div className="bx--row">
          {isScene && (
            <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-12" />
          )}
          <div
            className={`bx--col-sm-4 bx--col-md-5 bx--col-lg-${
              isScene ? 4 : 5
            }`}
          >
            <div className="infocard" id={isScene ? 'scene' : ''}>
              <CSSTransition
                in={infocardIn}
                timeout={{ enter: 400, exit: 400 + 300 }}
                classNames="infocard-display"
                unmountOnExit
              >
                <div className="title expressive-heading-06 white slow-01">
                  <FormattedMessage {...messages[`${rootID}.title`]}>
                    {(txt) => {
                      const fontSizePercent = dynamicFontSizePercent(`${txt}`, {
                        xlg: 10,
                        lg: 10,
                        tablet: 24,
                        mobile: 18,
                      });
                      const labelStyles: CSSProperties = {
                        lineHeight: '1.19em',
                        fontSize:
                          fontSizePercent === 100
                            ? undefined
                            : `${fontSizePercent}%`,
                      };
                      return (
                        <div className="title-text" style={labelStyles}>
                          {txt}
                        </div>
                      );
                    }}
                  </FormattedMessage>
                </div>
              </CSSTransition>

              <CSSTransition
                in={infocardIn}
                timeout={{ enter: 400, exit: 400 + 300 }}
                classNames="infocard-display"
                unmountOnExit
              >
                <div className="content expressive-heading-03 white slow-01">
                  <FormattedMessage {...messages[`${rootID}.content`]} />
                </div>
              </CSSTransition>

              <CSSTransition
                in={infocardIn}
                timeout={{ enter: 400, exit: 400 + 300 }}
                classNames="infocard-display"
                unmountOnExit
              >
                <div className="links body-short-01 slow-01">
                  {getLinkNumbers(currentScene).map((i) => {
                    return (
                      <div key={i}>
                        <FormattedMessage
                          {...messages[`${rootID}.links.${i}.href`]}
                        >
                          {(href) => (
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            <a href={href}>
                              <FormattedMessage
                                {...messages[`${rootID}.links.${i}.text`]}
                              >
                                {(txt) => (
                                  <span className="body-short-01 link-text blue-50">
                                    {txt}
                                    <svg
                                      style={{
                                        width: '10px',
                                        height: '10px',
                                      }}
                                    />
                                    <ArrowRight16 />
                                  </span>
                                )}
                              </FormattedMessage>
                            </a>
                          )}
                        </FormattedMessage>
                      </div>
                    );
                  })}
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
