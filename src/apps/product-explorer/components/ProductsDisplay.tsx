import React, { useContext, useState, SyntheticEvent, Fragment } from 'react';
import { ProductsContext, Category } from '../contexts/ProductsContext';
import ProductDetail from './ProductDetail';
import { css } from '@emotion/core';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as LoggingAndMonitoringIcon } from '../assets/images/icons/logging-and-monitoring.svg';
import { ReactComponent as ContainersIcon } from '../assets/images/icons/containers.svg';
import { ReactComponent as QuantumIcon } from '../assets/images/icons/quantum.svg';
import { ReactComponent as AutomationIcon } from '../assets/images/icons/ibm--automation-platform-clean.svg';

interface ProductsDisplayProps {
  element: HTMLElement;
}

const ProductsDisplay: React.FC<ProductsDisplayProps> = (props) => {
  const { categories, messages } = useContext(ProductsContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const linkType = props.element.getAttribute('data-link-type') || 'product';

  function handleInteraction(e: SyntheticEvent<HTMLDivElement>) {
    if (selectedCategory === e.currentTarget.dataset.category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(e.currentTarget.dataset.category || '');
    }
  }

  function handleKeyPress(e) {
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
    <div css={styles.grid}>
      {categories.filter(shouldCategoryShow).map((category, i, categories) => {
        return (
          <Fragment key={`category-${i}`}>
            <div
              css={styles.tileWrapper}
              onKeyPress={handleKeyPress}
              onClick={handleInteraction}
              data-category={category.name}
              data-i={i}
              tabIndex={0}>
              <div
                css={styles.tile}
                className={
                  selectedCategory === category.name ? 'selected' : ''
                }>
                {generateIconMarkup(category.icon, category.name)}
                <div css={styles.nameChevron}>
                  <h4 css={styles.name}>
                    <FormattedMessage
                      {...messages[`${category.translationId}Name`]}
                    />
                  </h4>
                  <span
                    className={`ibm-icon-nolink ${
                      selectedCategory === category.name
                        ? 'ibm-chevron-up-link'
                        : 'ibm-chevron-down-link'
                    }`}></span>
                </div>
              </div>
            </div>
            <ProductDetail
              category={categories[i]}
              products={categories[i].products}
              index={i}
              selected={categories[i].name === selectedCategory}
              element={props.element}
              linkType={linkType}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

const styles = {
  grid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1055px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 671px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
  tileWrapper: css`
    padding: 1px;
    cursor: pointer;
  `,
  tile: css`
    color: #fff;
    height: 156px;
    padding: 1rem;
    background-color: #282828;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.25s;

    img.icon,
    svg.icon {
      height: 30px;
      width: 30px;
      transition: height 0.25s;
    }

    &:hover {
      background-color: #353535;
    }

    &.selected {
      background-color: #fff;
      color: #000;

      img.icon,
      svg.icon {
        height: 60px;
        width: 60px;
      }

      h4 {
        visibility: hidden;
      }

      span {
        color: #408bfc;
      }
    }

    span {
      color: #fff;
    }

    @media (max-width: 671px) {
      height: auto;
      flex-direction: row;
      align-items: center;

      img.icon,
      svg.icon {
        margin-right: 1rem;
        height: 30px;
        width: 30px;
      }

      &.selected {
        img.icon,
        svg.icon {
          height: 30px;
          width: 60px;
        }
      }
    }
  `,
  nameChevron: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  name: css`
    font-size: 1.5rem;
    padding: 0;

    @media (max-width: 1055px) {
      font-size: 1.25rem;
    }
  `,
};

export default ProductsDisplay;
