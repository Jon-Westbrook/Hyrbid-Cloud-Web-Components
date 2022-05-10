import {
  EventHandler,
  Fragment,
  KeyboardEventHandler,
  ReactElement,
  SyntheticEvent,
  useState,
} from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import { ChevronDown32, ChevronUp32 } from '@carbon/icons-react';
import ProductDetail from './ProductDetail';
import { useAppSelector } from '../lib/redux/hooks';
import { ReactComponent as DataSecurityIcon } from '../assets/images/icons/data-security.svg';
import { ReactComponent as IamIcon } from '../assets/images/icons/iam.svg';
import { ReactComponent as PlatformIcon } from '../assets/images/icons/platform.svg';
import { ReactComponent as ServicesIcon } from '../assets/images/icons/services.svg';
import { ReactComponent as SiemIcon } from '../assets/images/icons/siem.svg';
import { ReactComponent as SoarIcon } from '../assets/images/icons/soar.svg';
import './ProductsDisplay.scss';

const ProductsDisplay = (): ReactElement<void> => {
  const categories = useAppSelector((state) => state.categories);
  const messages = useAppSelector<Record<string, MessageDescriptor>>(
    (state) => state.messages,
  );
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInteraction: EventHandler<SyntheticEvent<HTMLDivElement>> = (
    e,
  ) => {
    if (selectedCategory === e.currentTarget.dataset.category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(e.currentTarget.dataset.category || '');
    }
  };

  const handleKeyPress: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      handleInteraction(e);
    }
  };

  function generateIconMarkup(categoryIcon: string, categoryName: string) {
    if (categoryIcon.includes('data-security')) {
      return <DataSecurityIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('iam')) {
      return <IamIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('platform')) {
      return <PlatformIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('services')) {
      return <ServicesIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('siem')) {
      return <SiemIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('soar')) {
      return <SoarIcon className="icon" aria-hidden="true" />;
    } else {
      return (
        <div>
          <img
            className="icon"
            aria-hidden="true"
            src={categoryIcon}
            alt={`Icon for ${categoryName}`}
          />
        </div>
      );
    }
  }

  return (
    <div className="product-explorer-security__grid">
      {categories.map((category, i) => {
        return (
          <Fragment key={`category-${i}`}>
            <div
              className="product-explorer-security__tile-wrapper"
              onKeyPress={handleKeyPress}
              onClick={handleInteraction}
              data-category={category.name}
              data-i={i}
              tabIndex={0}
            >
              <div
                className={`product-explorer-security__tile ${
                  selectedCategory === category.name ? 'selected' : ''
                }`}
              >
                {generateIconMarkup(category.icon, category.name)}
                <div className="product-explorer-security__name-chevron">
                  <h4 className="product-explorer-security__name">
                    <FormattedMessage
                      {...messages[`${category.translationId}Name`]}
                    />
                  </h4>
                  <div className="product-explorer-security__chevron">
                    {selectedCategory === category.name ? (
                      <ChevronUp32 />
                    ) : (
                      <ChevronDown32 />
                    )}
                  </div>
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
