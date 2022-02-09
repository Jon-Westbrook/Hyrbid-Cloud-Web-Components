/** @jsxImportSource @emotion/react */
import React from 'react';
import { Category, Product } from '../lib/types';
import { RootState } from '../lib/redux/store';
import { useAppSelector } from '../lib/redux/hooks';
import { useWindowSize } from 'src/common/hooks/useWindowSize';
import { defineGridRow } from '../utils';
import { css } from '@emotion/react';
import { FormattedMessage } from 'react-intl';
import prefixUrlWithLocale from 'src/common/prefixUrlWithLocale';

export interface ProductDetailProps {
  category: Category;
  products: Product[];
  index: number;
  selected: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const categories = useAppSelector((state: RootState) => state.categories);
  const localeCode = useAppSelector((state: RootState) => state.localeCode);
  const messages = useAppSelector((state: RootState) => state.messages);
  const categoryStrings = categories.map((category) => category.name);
  const size = useWindowSize();

  const row = defineGridRow(size.width, props.index, categoryStrings);

  return (
    <div
      css={styles.productsContainer}
      className={props.selected ? 'selected' : ''}
      style={{ gridRowStart: row }}
      data-testid="product-detail"
    >
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
                href={prefixUrlWithLocale(props.category.link, localeCode)}
                tabIndex={0}
                css={styles.link}
              >
                <FormattedMessage {...messages.appLearnMore} />
              </a>
            )}
          </div>
        </div>
      </div>
      {props.products.map((product, i) => {
        const productUrl = prefixUrlWithLocale(product.url, localeCode);

        return (
          <div css={styles.product} key={`product-${i}`}>
            <a href={productUrl} css={styles.productLink}>
              {product.translationId ? (
                <FormattedMessage
                  {...messages[`${product.translationId}Name`]}
                />
              ) : (
                product.name
              )}
            </a>
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
        );
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
};

export default ProductDetail;
