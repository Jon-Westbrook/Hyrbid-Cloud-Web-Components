import content from '../../data/content';
import Views from '../Views/Views';
import './InteractiveIntegrationWalkthrough.scss';

const InteractiveIntegrationWalkthrough = () => {
  return (
    <div className="interactive-integration-walkthrough">
      <div className="widget-inner">
        <Views content={content} />
      </div>
    </div>
  );
};

export default InteractiveIntegrationWalkthrough;
