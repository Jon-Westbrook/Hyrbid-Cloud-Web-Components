import React, { CSSProperties, ReactElement } from 'react';
import { DotMark16 } from '@carbon/icons-react';
import './Label.scss';
import { FormattedMessage } from 'react-intl';
import dynamicFontSizePercent from '../../utils/dynamicTextSizePercent';
import messages from '../../locales/messages';
import { useSelector } from 'react-redux';
import { selectBreakpoint } from '../../lib/redux/slices/browserSlice';

export type LabelProps = {
  i: number;
  reductionIndex: number;
  handleClickScene: (i: number) => void;
};
const Label = ({
  i,
  reductionIndex,
  handleClickScene,
}: LabelProps): ReactElement => {
  const breakpoint = useSelector(selectBreakpoint);
  return (
    <div className={`label ${i === 4 ? 'vertical' : ''}`} id={`label-${i}`}>
      <button
        className="expressive-heading-03 white"
        onClick={() => handleClickScene(i)}
      >
        <DotMark16 className="gray-50" />
        <FormattedMessage {...messages[`scene.${i}.title`]}>
          {(txt) => {
            const maxWords = breakpoint === 'lg' ? 14 : 18;
            const fontSizePercent = dynamicFontSizePercent(
              `${txt}`,
              maxWords,
              reductionIndex,
            );
            const labelStyles: CSSProperties = {
              lineHeight: '1.3em',
              fontSize:
                fontSizePercent === 100 ? undefined : `${fontSizePercent}%`,
            };
            return (
              <div className="label-text" style={labelStyles}>
                {txt}
              </div>
            );
          }}
        </FormattedMessage>
      </button>
      <div className="line" />
    </div>
  );
};

export default Label;
