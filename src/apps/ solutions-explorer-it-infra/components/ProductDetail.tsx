import React from 'react';
import { ProductDetailProps } from '../../../common/explorer/lib/types';
import { useWindowSize } from '../../../common/hooks/useWindowSize';
import { defineGridRow } from '../../../common/explorer/utils';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import { useSolutionsExplorerItInfraSelector } from '../lib/redux/hooks';
import { useProductExplorerSelector } from 'src/apps/product-explorer/lib/redux/hooks';
import './ProductDetail.scss';
import { swapCountryAndLanguage } from 'src/apps/product-explorer/utils';

const ProductDetail: React.FC<ProductDetailProps> = ({
  index,
  selected,
  category,
  products,
}) => {
  const categories = useSolutionsExplorerItInfraSelector(
    (state) => state.categories,
  );
  const messages = useSolutionsExplorerItInfraSelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);
  const categoryStrings = categories.map((category) => category.name);
  const size = useWindowSize();
  const row = defineGridRow(size.width, index, categoryStrings);

  let localeCode = useProductExplorerSelector((state) => state.localeCode);
  localeCode = swapCountryAndLanguage(localeCode);

  return (
    <div
      className={`product-detail ${selected ? 'selected' : ''}`}
      style={{ gridRowStart: row }}
    >
      <div className="product-detail__header-outer-wrapper">
        <div className="product-detail__header-inner-wrapper">
          <h2 className="product-detail__category-name">
            <FormattedMessage {...messages[`${category.translationId}Name`]} />
          </h2>
          <div className="product-detail__header">
            <p className="product-detail__description">
              <FormattedMessage
                {...messages[`${category.translationId}Description`]}
              />
            </p>
            {category.link && (
              <a
                href={`${localeCode === 'us-en' ? '' : '/' + localeCode}${
                  category.link
                }`}
                tabIndex={0}
                className="product-detail__link"
              >
                <FormattedMessage {...messages.appLearnMore} />
              </a>
            )}
          </div>
        </div>
      </div>
      {products.map((product, i) => {
        const productUrl =
          product.url.charAt(0) === '/'
            ? `${localeCode === 'us-en' ? '' : '/' + localeCode}${product.url}`
            : product.url;

        return (
          <div className="product-detail__product" key={`product-${i}`}>
            <a href={productUrl} className="product-detail__product-link">
              {product.translationId ? (
                <FormattedMessage
                  {...messages[`${product.translationId}Name`]}
                />
              ) : (
                product.name
              )}
            </a>
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
        );
      })}
    </div>
  );
};

export default ProductDetail;
