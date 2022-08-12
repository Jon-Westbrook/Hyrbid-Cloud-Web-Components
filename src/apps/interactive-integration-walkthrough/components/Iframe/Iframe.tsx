import { theme } from '../../constants';
import './Iframe.scss';

type IframeProps = {
  title?: string;
  src: string;
};
function Iframe({ title, src }: IframeProps) {
  return (
    <iframe
      src={src}
      width={theme.uiFrameWidth}
      height={theme.uiFrameHeight}
      allowFullScreen
      allow="autoplay *; fullscreen *; encrypted-media *"
      frameBorder="0"
      title={title}
      className="interactive-widget__iframe"
    />
  );
}

export default Iframe;
