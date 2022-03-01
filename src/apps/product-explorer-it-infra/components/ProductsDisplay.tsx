import React, { useContext, useState, SyntheticEvent, Fragment } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductDetail from './ProductDetail';
import { FormattedMessage } from 'react-intl';
import { IBMLocale } from '../../../common/mapValidLocale';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';

// Icons
import { ReactComponent as ZIcon } from '../assets/images/icons/ibm--z.svg';
import { ReactComponent as StorageIcon } from '../assets/images/icons/ibm--storage.svg';
import { ReactComponent as PowerIcon } from '../assets/images/icons/server--rack.svg';
import { ReactComponent as OneIcon } from '../assets/images/icons/ibm--linuxone.svg';
import { ReactComponent as SpectrumIcon } from '../assets/images/icons/desktop.svg';

interface ProductsDisplayProps {
  localeCode: IBMLocale;
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
    <div css={styles.grid}>
      {categories.map((category, i) => {
        return (
          <Fragment key={`category-${i}`}>
            <div
              css={styles.tileWrapper}
              onKeyPress={handleKeyPress}
              onClick={handleInteraction}
              data-category={category.name}
              data-i={i}
              tabIndex={0}
            >
              <div
                css={styles.tile}
                className={selectedCategory === category.name ? 'selected' : ''}
              >
                {handleIconRender(category.icon)}
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
              localeCode={props.localeCode}
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
  `,
  tile: css`
    font-family: ibmplexsans-light;
    color: #ffff;
    height: 156px;
    padding: 1rem;
    background-color: #282828;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.25s;

    img.icon,
    svg.icon {
      height: 60px;
      width: 60px;
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
      color: #ffff;
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
