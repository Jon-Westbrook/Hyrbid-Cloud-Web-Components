import { ChevronLeft32, ChevronRight32 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { NavigationProps } from '../Navigation/Navigation';
import './Pager.scss';

type PagerProps = {
  advance: NavigationProps['advance'];
  rewind: NavigationProps['rewind'];
};
const Pager = ({ advance, rewind }: PagerProps) => {
  return (
    <div className="interactive-widget__pager-nav">
      <Button
        className="interactive-widget__pager-button"
        renderIcon={ChevronLeft32}
        iconDescription="Previous"
        hasIconOnly
        onClick={rewind}
      />

      <Button
        className="interactive-widget__pager-button"
        renderIcon={ChevronRight32}
        iconDescription="Next"
        hasIconOnly
        onClick={advance}
      />
    </div>
  );
};

export default Pager;
