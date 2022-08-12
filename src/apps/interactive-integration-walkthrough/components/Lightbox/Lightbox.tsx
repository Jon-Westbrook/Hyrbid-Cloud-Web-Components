import { Hotspot } from '../../lib/types';
import './Lightbox.scss';

type LightBoxProps = {
  hotspots: Hotspot[];
  setStep: (step: string) => void;
};
const Lightbox = ({ hotspots, setStep }: LightBoxProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1312 900"
      className="lightbox__svg"
    >
      {hotspots.map(({ goTo, x, y }, index) => (
        <path
          key={index}
          onClick={() => setStep(goTo)}
          className="lightbox__hotspot"
          d={`M ${x} ${
            y + 20
          } a 20 20 0 1 1 20 -20 A 20.0229 20.0229 0 0 1 ${x} ${
            y + 20
          } Z m 0 -39 a 19 19 0 1 0 19 19 A 19.0216 19.0216 0 0 0 ${x} ${
            y - 19
          } Z m -0.0001 3.0001 a 16 16 0 1 1 -16 16 A 16 16 0 0 1 ${x} ${
            y - 16
          } Z`}
        />
      ))}
    </svg>
  );
};

export default Lightbox;
