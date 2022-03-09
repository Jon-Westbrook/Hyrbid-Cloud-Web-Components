import React from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import { ProductDetailProps } from '../../../common/product-explorer/lib/types';
import { useWindowSize } from '../../../common/hooks/useWindowSize';
import prefixUrlWithLocale from '../../../common/prefixUrlWithLocale';
import { defineGridRow } from '../../../common/product-explorer/utils';
import { useAppSelector } from '../lib/redux/hooks';
import './ProductDetail.scss';

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const localeCode = useAppSelector((state) => state.localeCode);
  const messages = useAppSelector<Record<string, MessageDescriptor>>(
    (state) => state.messages,
  );
  const categories = useAppSelector((state) => state.categories);
  const categoryStrings = categories.map((category) => category.name);
  const size = useWindowSize();

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
              href={prefixUrlWithLocale(props.category.link, localeCode)}
              tabIndex={0}
              className="category__link"
            >
              <FormattedMessage {...messages.appLearnMore} />
            </a>
          )}
        </div>
      </div>
      {props.products.map((product, i) => {
        const productUrl = prefixUrlWithLocale(product.url, localeCode);

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
