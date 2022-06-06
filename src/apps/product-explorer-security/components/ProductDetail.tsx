import React from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import { ProductDetailProps } from '../../../common/product-explorer/lib/types';
import { useWindowSize } from '../../../common/hooks/useWindowSize';
import { defineGridRow } from '../../../common/product-explorer/utils';
import prefixUrlWithLocale from '../../../common/prefixUrlWithLocale';
import { useProductExplorerSecuritySelector } from '../lib/redux/hooks';
import './ProductDetail.scss';

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const localeCode = useProductExplorerSecuritySelector(
    (state) => state.localeCode,
  );
  const messages = useProductExplorerSecuritySelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);
  const categories = useProductExplorerSecuritySelector(
    (state) => state.categories,
  );
  const categoryStrings = categories.map((category) => category.name);
  const size = useWindowSize();

  const row = defineGridRow(size.width, props.index, categoryStrings);

  return (
    <div
      className={`product-explorer-security__products-container ${
        props.selected ? 'selected' : ''
      }`}
      style={{ gridRowStart: row }}
      data-testid="product-detail"
    >
      <div className="product-explorer-security__header-outer-wrapper">
        <div className="product-explorer-security__header-inner-wrapper">
          <h2 className="product-explorer-security__category-name">
            <FormattedMessage
              {...messages[`${props.category.translationId}Name`]}
            />
          </h2>
          <div className="product-explorer-security__header">
            <p className="product-explorer-security__description">
              <FormattedMessage
                {...messages[`${props.category.translationId}Description`]}
              />
            </p>
            {props.category.link && (
              <a
                href={prefixUrlWithLocale(props.category.link, localeCode)}
                tabIndex={0}
                className="product-explorer-security__link"
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
          <div
            className="product-explorer-security__product"
            key={`product-${i}`}
          >
            <a
              href={productUrl}
              className="product-explorer-security__product-link"
            >
              {product.translationId ? (
                <FormattedMessage
                  {...messages[`${product.translationId}Name`]}
                />
              ) : (
                product.name
              )}
            </a>
            <p className="product-explorer-security__long-description">
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
