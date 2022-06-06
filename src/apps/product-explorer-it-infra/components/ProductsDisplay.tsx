import React, {
  useState,
  SyntheticEvent,
  Fragment,
  KeyboardEventHandler,
  EventHandler,
} from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import ProductDetail from './ProductDetail';
import './ProductsDisplay.scss';
import { useProductExplorerItInfraSelector } from '../lib/redux/hooks';
import { ReactComponent as ZIcon } from '../assets/images/icons/ibm--z.svg';
import { ReactComponent as StorageIcon } from '../assets/images/icons/ibm--storage.svg';
import { ReactComponent as PowerIcon } from '../assets/images/icons/server--rack.svg';
import { ReactComponent as OneIcon } from '../assets/images/icons/ibm--linuxone.svg';
import { ReactComponent as SpectrumIcon } from '../assets/images/icons/desktop.svg';

const ProductsDisplay: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = useProductExplorerItInfraSelector(
    (state) => state.categories,
  );
  const messages = useProductExplorerItInfraSelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);

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
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProductsDisplay;
