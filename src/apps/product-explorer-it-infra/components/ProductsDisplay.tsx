import React, { useContext, useState, SyntheticEvent, Fragment } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductDetail from './ProductDetail';
import { FormattedMessage } from 'react-intl';
import { ProductDetailElement } from './ProductDetail';
import './ProductsDisplay.scss';

// Icons
import { ReactComponent as ZIcon } from '../assets/images/icons/ibm--z.svg';
import { ReactComponent as StorageIcon } from '../assets/images/icons/ibm--storage.svg';
import { ReactComponent as PowerIcon } from '../assets/images/icons/server--rack.svg';
import { ReactComponent as OneIcon } from '../assets/images/icons/ibm--linuxone.svg';
import { ReactComponent as SpectrumIcon } from '../assets/images/icons/desktop.svg';

interface ProductsDisplayProps {
  element: ProductDetailElement;
}

const ProductsDisplay: React.FC<ProductsDisplayProps> = (props) => {
  const { categories, messages } = useContext(ProductsContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleInteraction(e: SyntheticEvent<HTMLDivElement>) {
    if (selectedCategory === e.currentTarget.dataset.category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(e.currentTarget.dataset.category || '');
    }
  }

  function handleKeyPress(e: SyntheticEvent<HTMLDivElement>) {
    if (e instanceof KeyboardEvent && e.key === 'Enter') {
      handleInteraction(e);
    }
  }

  function handleIconRender(iconName: string) {
    let iconFile;
    switch (iconName) {
      case 'storage':
        iconFile = <StorageIcon className="icon" />;
        break;
      case 'z':
        iconFile = <ZIcon className="icon" />;
        break;
      case 'power':
        iconFile = <PowerIcon className="icon" />;
        break;
      case 'one':
        iconFile = <OneIcon className="icon" />;
        break;
      case 'spectrum':
        iconFile = <SpectrumIcon className="icon" />;
        break;
    }
    return iconFile;
  }

  return (
    <div className="product-categories">
      {categories.map((category, i) => {
        return (
          <Fragment key={`category-${i}`}>
            <div
              className="product-category__wrapper"
              onKeyPress={handleKeyPress}
              onClick={handleInteraction}
              data-category={category.name}
              data-i={i}
              tabIndex={0}
            >
              <div
                className={`product-category__inner${
                  selectedCategory === category.name ? ' selected' : ''
                }`}
              >
                {handleIconRender(category.icon)}
                <div className="product-category__name-wrapper">
                  <h4 className="product-category__name">
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
              element={props.element}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProductsDisplay;
