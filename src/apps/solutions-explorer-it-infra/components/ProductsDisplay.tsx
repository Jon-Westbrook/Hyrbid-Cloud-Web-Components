import React, { useState, SyntheticEvent, Fragment } from 'react';
import ProductDetail from './ProductDetail';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import { ReactComponent as Acc } from '../assets/images/icons/accelerated--computing.svg';
import { ReactComponent as Business } from '../assets/images/icons/business--continuity.svg';
import { ReactComponent as Containers } from '../assets/images/icons/containers.svg';
import { ReactComponent as Backup } from '../assets/images/icons/data--backup.svg';
import { ReactComponent as Storage } from '../assets/images/icons/data--storage.svg';
import { ReactComponent as Digital } from '../assets/images/icons/digital.svg';
import { ReactComponent as Flash } from '../assets/images/icons/flash--storage.svg';
import { ReactComponent as Hybrid } from '../assets/images/icons/hybridcloud--storage.svg';
import { ReactComponent as InfraSecutiry } from '../assets/images/icons/infrastructure--security.svg';
import { ReactComponent as InfraSoftware } from '../assets/images/icons/infrastructure--software.svg';
import { ReactComponent as Linux } from '../assets/images/icons/linux.svg';
import { ReactComponent as Office } from '../assets/images/icons/office.svg';
import { ReactComponent as Saphana } from '../assets/images/icons/saphana.svg';
import { ReactComponent as ServerOp } from '../assets/images/icons/server--operatingsystems.svg';
import { ReactComponent as Servers } from '../assets/images/icons/servers.svg';
import { ReactComponent as Speed } from '../assets/images/icons/speedometer.svg';
import { ReactComponent as StorageArea } from '../assets/images/icons/storageareanetworks.svg';
import { ReactComponent as Tape } from '../assets/images/icons/tape--storage.svg';
import { useSolutionsExplorerItInfraSelector } from '../lib/redux/hooks';
import { ChevronDown32, ChevronUp32 } from '@carbon/icons-react';
import './ProductsDisplay.scss';

const ProductsDisplay: React.FC = () => {
  const categories = useSolutionsExplorerItInfraSelector(
    (state) => state.categories,
  );
  const messages = useSolutionsExplorerItInfraSelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInteraction = (e: SyntheticEvent<HTMLDivElement>) => {
    if (selectedCategory === e.currentTarget.dataset.category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(e.currentTarget.dataset.category || '');
    }
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      handleInteraction(e);
    }
  };

  function handleIconRender(icon: string) {
    let iconFile;
    switch (icon) {
      case 'linux':
        iconFile = <Linux className="icon" />;
        break;
      case 'mainframes':
        iconFile = <Servers className="icon" />;
        break;
      case 'enterprise':
        iconFile = <Office className="icon" />;
        break;
      case 'data':
        iconFile = <Storage className="icon" />;
        break;
      case 'itInfra':
        iconFile = <InfraSoftware className="icon" />;
        break;
      case 'serverOp':
        iconFile = <ServerOp className="icon" />;
        break;
      case 'sap':
        iconFile = <Saphana className="icon" />;
        break;
      case 'virtu':
        iconFile = <Digital className="icon" />;
        break;
      case 'business':
        iconFile = <Business className="icon" />;
        break;
      case 'highPerformance':
        iconFile = <Speed className="icon" />;
        break;
      case 'backup':
        iconFile = <Backup className="icon" />;
        break;
      case 'tape':
        iconFile = <Tape className="icon" />;
        break;
      case 'storageArea':
        iconFile = <StorageArea className="icon" />;
        break;
      case 'hybridCloud':
        iconFile = <Hybrid className="icon" />;
        break;
      case 'flash':
        iconFile = <Flash className="icon" />;
        break;
      case 'accelerated':
        iconFile = <Acc className="icon" />;
        break;
      case 'containers':
        iconFile = <Containers className="icon" />;
        break;
      case 'infraSecurity':
        iconFile = <InfraSecutiry className="icon" />;
        break;
      default:
        iconFile = <Linux className="icon" />;
    }
    return iconFile;
  }

  return (
    <div className="products-display">
      {categories.map((category, i) => {
        return (
          <Fragment key={`category-${i}`}>
            <div
              className="products-display__tile-wrapper"
              onKeyPress={handleKeyPress}
              onClick={handleInteraction}
              data-category={category.name}
              data-i={i}
              tabIndex={0}
            >
              <div
                className={`products-display__tile ${
                  selectedCategory === category.name ? 'selected' : ''
                }`}
              >
                {handleIconRender(category.icon)}
                <div className="products-display__name-chevron">
                  <h4 className="products-display__name">
                    <FormattedMessage
                      {...messages[`${category.translationId}Name`]}
                    />
                  </h4>
                  <span className="ibm-icon-nolink">
                    {selectedCategory === category.name ? (
                      <ChevronUp32 />
                    ) : (
                      <ChevronDown32 />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <ProductDetail
              category={categories[i]}
              products={categories[i].products}
              index={i}
              selected={categories[i].name === selectedCategory}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProductsDisplay;
