import React, { useContext } from 'react';
import {
  Category,
  Product,
  ProductsContext,
} from '../contexts/ProductsContext';
import { useWindowSize } from '../hooks/useWindowSize';
import { defineGridRow } from '../utils/utils';
import { FormattedMessage } from 'react-intl';
import './ProductDetail.scss';

export type ProductDetailElement = HTMLElement | undefined;

export interface ProductDetailProps {
  category: Category;
  products: Product[];
  index: number;
  selected: boolean;
  element: ProductDetailElement;
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const { categories, messages } = useContext(ProductsContext);
  const categoryStrings = categories.map((category) => category.name);
  const size = useWindowSize();

  let localeCode = props.element?.getAttribute('data-localecode') || '';

  if (localeCode.indexOf('-') > -1) {
    // IBM's Drupal changes the url prefix to be `country-language`,
    // so we need to adapt the provided langcode.
    localeCode = `${localeCode.split('-')[1]}-${localeCode.split('-')[0]}`;
  }

  const row = defineGridRow(size.width, props.index, categoryStrings);

  return (
    <div
      className={`product-category-detail${props.selected ? ' selected' : ''}`}
      style={{ gridRowStart: row }}
      data-testid="product-detail"
    >
      <div className="category">
        <div className="category__inner">
          <h2 className="category__name">
            <FormattedMessage
              {...messages[`${props.category.translationId}Name`]}
            />
          </h2>
          <p className="category__description">
            <FormattedMessage
              {...messages[`${props.category.translationId}Description`]}
            />
          </p>
          {props.category.link && (
            <a
              href={`${localeCode === 'en-us' ? '' : '/' + localeCode}${
                props.category.link
              }`}
              tabIndex={0}
              className="category__link"
            >
              <FormattedMessage {...messages.appLearnMore} />
            </a>
          )}
        </div>
      </div>
      {props.products.map((product, i) => {
        const productUrl =
          product?.url?.charAt(0) === '/'
            ? `${localeCode === 'us-en' ? '' : '/' + localeCode}${product.url}`
            : product.url;

        return (
          <div className="product" key={`product-${i}`}>
            <a href={productUrl} className="product__link">
              {product.translationId ? (
                <FormattedMessage
                  {...messages[`${product.translationId}Name`]}
                />
              ) : (
                product.name
              )}
            </a>
            <p className="product__long-description">
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

export default ProductDetail;
