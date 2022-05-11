import React, { useState, SyntheticEvent, Fragment } from 'react';
import { Category } from '../../../common/product-explorer/lib/types';
import ProductDetail from './ProductDetail';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import { ReactComponent as LoggingAndMonitoringIcon } from '../assets/images/icons/logging-and-monitoring.svg';
import { ReactComponent as ContainersIcon } from '../assets/images/icons/containers.svg';
import { ReactComponent as QuantumIcon } from '../assets/images/icons/quantum.svg';
import { ReactComponent as AutomationIcon } from '../assets/images/icons/ibm--automation-platform-clean.svg';
import { useAppSelector } from '../lib/redux/hooks';
import 'ProductsDisplay.scss';

interface ProductsDisplayProps {
  linkType: string;
}

const ProductsDisplay: React.FC<ProductsDisplayProps> = ({ linkType }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = useAppSelector((state) => state.categories);
  const messages = useAppSelector<Record<string, MessageDescriptor>>(
    (state) => state.messages,
  );

  function handleInteraction(e: SyntheticEvent<HTMLDivElement>) {
    if (selectedCategory === e.currentTarget.dataset.category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(e.currentTarget.dataset.category || '');
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleInteraction(e);
    }
  }

  function generateIconMarkup(categoryIcon: string, categoryName: string) {
    if (categoryIcon.includes('containers')) {
      return <ContainersIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('logging-and-monitoring')) {
      return <LoggingAndMonitoringIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('automation')) {
      return <AutomationIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('quantum')) {
      return <QuantumIcon className="icon" aria-hidden="true" />;
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

  function shouldCategoryShow(category: Category) {
    // if all products within a category lack pricing urls, don't show category
    if (linkType === 'product') {
      return true;
    }

    return category.products.some((product) => product.pricingUrl !== null);
  }

  return (
    <div className="product-display">
      {categories.filter(shouldCategoryShow).map((category, i, categories) => {
        return (
          <Fragment key={`category-${i}`}>
            <div
              className="product-display__tile-wrapper"
              onKeyPress={handleKeyPress}
              onClick={handleInteraction}
              data-category={category.name}
              data-i={i}
              tabIndex={0}
            >
              <div
                className={`product-display__tile ${
                  selectedCategory === category.name ? 'selected' : ''
                }`}
              >
                {generateIconMarkup(category.icon, category.name)}
                <div className="product-display__name-chevron">
                  <h4 className="product-display__name">
                    <FormattedMessage
                      {...messages[`${category.translationId}Name`]}
                    />
                  </h4>
                  <span
                    className={`ibm-icon-nolink ${
                      selectedCategory === category.name
                        ? 'ibm-chevron-up-link'
                        : 'ibm-chevron-down-link'
                    }`}
                  ></span>
                </div>
              </div>
            </div>
            <ProductDetail
              category={categories[i]}
              products={categories[i].products}
              index={i}
              selected={categories[i].name === selectedCategory}
              linkType={linkType}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProductsDisplay;
