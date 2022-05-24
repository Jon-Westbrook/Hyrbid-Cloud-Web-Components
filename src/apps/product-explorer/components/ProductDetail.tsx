import React from 'react';
import { ProductDetailProps } from '../../../common/product-explorer/lib/types';
import { useWindowSize } from '../../../common/hooks/useWindowSize';
import { defineGridRow } from '../../../common/product-explorer/utils';
import { swapCountryAndLanguage, buildUrl } from '../utils';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import prefixUrlWithLocale from '../../../common/prefixUrlWithLocale';
import { useProductExplorerSelector } from '../lib/redux/hooks';
import { Launch16 } from '@carbon/icons-react';
import './ProductDetail.scss';

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const messages = useProductExplorerSelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);
  const categories = useProductExplorerSelector((state) => state.categories);
  const categoryStrings = categories.map((category) => category.name);
  const size = useWindowSize();
  const row = defineGridRow(size.width, props.index, categoryStrings);

  let localeCode = useProductExplorerSelector((state) => state.localeCode);
  localeCode = swapCountryAndLanguage(localeCode);

  return (
    <div
      className={`product-detail
      ${props.selected ? 'selected' : ''}`}
      style={{ gridRowStart: row }}
    >
      <div className="product-detail__header-outer-wrapper">
        <div className="product-detail__header-inner-wrapper">
          <h2 className="product-detail__category-name">
            <FormattedMessage
              {...messages[`${props.category.translationId}Name`]}
            />
          </h2>
          <div className="product-detail__header">
            <p className="product-detail__description">
              <FormattedMessage
                {...messages[`${props.category.translationId}Description`]}
              />
            </p>
            {props.category.link && (
              <a
                href={prefixUrlWithLocale(props.category.link, localeCode)}
                tabIndex={0}
                className="product-detail__link"
              >
                <FormattedMessage {...messages.appLearnMore} />
              </a>
            )}
          </div>
        </div>
      </div>
      {props.products.map((product, i) => {
        const url = buildUrl(product, props.linkType, localeCode);

        return url ? (
          <div className="product-detail__product" key={`product-${i}`}>
            <a
              href={url}
              className="product-detail__product-link"
              target={product.external === true ? '_new' : '_self'}
            >
              {product.translationId ? (
                <FormattedMessage
                  {...messages[`${product.translationId}Name`]}
                />
              ) : (
                product.name
              )}
            </a>
            {product.external && <Launch16 />}
            <p className="product-detail__long-description">
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

export default ProductDetail;
