import React, { useContext } from 'react';
import {
  Category,
  Product,
  ProductsContext,
} from '../contexts/ProductsContext';
import { useWindowSize } from '../hooks/useWindowSize';
import { defineGridRow, buildUrl, swapCountryAndLanguage } from '../utils';
import { css } from '@emotion/core';
import { FormattedMessage } from 'react-intl';

export interface ProductDetailProps {
  category: Category;
  products: Product[];
  index: number;
  selected: boolean;
  element: HTMLElement;
  linkType: string;
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const { categories, messages } = useContext(ProductsContext);
  const categoryStrings = categories.map((category) => category.name);
  const size = useWindowSize();
  let localeCode = props.element.getAttribute('data-localecode') || '';
  localeCode = swapCountryAndLanguage(localeCode);

  let row = defineGridRow(size.width, props.index, categoryStrings);

  return (
    <div
      css={styles.productsContainer}
      className={props.selected ? 'selected' : ''}
      style={{ gridRowStart: row }}
      data-testid="product-detail">
      <div css={styles.headerOuterWrapper}>
        <div css={styles.headerInnerWrapper}>
          <h2 css={styles.categoryName}>
            <FormattedMessage
              {...messages[`${props.category.translationId}Name`]}
            />
          </h2>
          <div css={styles.header}>
            <p css={styles.description}>
              <FormattedMessage
                {...messages[`${props.category.translationId}Description`]}
              />
            </p>
            {props.category.link && (
              <a
                href={`${localeCode === 'us-en' ? '' : '/' + localeCode}${
                  props.category.link
                }`}
                tabIndex={0}
                css={styles.link}>
                <FormattedMessage {...messages.appLearnMore} />
              </a>
            )}
          </div>
        </div>
      </div>
      {props.products.map((product, i) => {
        const url = buildUrl(product, props.linkType, localeCode);
        let target;
        let linkicon;
        if (product.external === true) {
          target = '_new';
          linkicon = styles.iconshow;
        } else {
          target = '_self';
          linkicon = styles.iconhidden;
        }
        console.log(target);
        return url !== null ? (
          <div css={styles.product} key={`product-${i}`}>
            <a href={url} css={styles.productLink} target={target}>
              {product.translationId ? (
                <FormattedMessage
                  {...messages[`${product.translationId}Name`]}
                />
              ) : (
                product.name
              )}
            </a>
            <svg
              css={linkicon}
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              aria-hidden="true"
              aria-label="This is an external link">
              <path d="M26,28H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4h9V6H6V26H26V17h2v9A2,2,0,0,1,26,28Z"></path>
              <polygon points="21 2 21 4 26.59 4 18 12.59 19.41 14 28 5.41 28 11 30 11 30 2 21 2"></polygon>
            </svg>
            <p css={styles.longDescription}>
              {product.translationId ? (
                <FormattedMessage
                  {...messages[`${product.translationId}Description`]}
                />
              ) : (
                product.longDescription
              )}
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
};

const styles = {
  productsContainer: css`
    background-color: #fff;
    color: #000;
    grid-column: 1 / -1;
    padding: 16px;
    margin: 1px;
    margin-top: -1px;
    display: none;
    grid-template-columns: repeat(3, 1fr);

    &.selected {
      display: grid;
    }

    @media (max-width: 1055px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 671px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
  headerOuterWrapper: css`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `,
  headerInnerWrapper: css`
    @media (max-width: 671px) {
      grid-column: 1 / -1;
    }
  `,
  categoryName: css`
    font-size: 1.75rem;
    padding-bottom: 0.25rem;
  `,
  header: css`
    margin-bottom: 32px;
  `,
  product: css`
    padding: 1rem 1rem 1rem 0;
  `,
  description: css`
    padding: 0;
    font-size: 0.875rem;
    margin: 8px 0;
  `,
  link: css`
    font-size: 0.875rem;
  `,
  productLink: css`
    font-size: 1rem;
  `,
  longDescription: css`
    margin-top: 8px;
    font-size: 0.875rem;
  `,
  iconhidden: css`
    display: none;
  `,
  iconshow: css`
    display: inline-block;
    height: 17px;
    fill: #0f62fe;
  `,
};

export default ProductDetail;
