import './UIFrame.scss';

type Props = {
  children: React.ReactNode;
};
function UIFrame({ children }: Props) {
  return (
    <div className="ui-frame__wrapper">
      <div className="ui-frame__inner">{children}</div>
    </div>
  );
}

export default UIFrame;
