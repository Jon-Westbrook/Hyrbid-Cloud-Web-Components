import React from 'react';
import { ProductDetailProps } from '../../../common/product-explorer/lib/types';
import { useWindowSize } from '../../../common/hooks/useWindowSize';
import {
  defineGridRow,
  buildUrl,
  swapCountryAndLanguage,
  getTargetAndLinkIconStatus,
} from '../utils';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import prefixUrlWithLocale from '../../../common/prefixUrlWithLocale';
import { useAppSelector } from '../lib/redux/hooks';
import './ProductDetail.scss';

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const messages = useAppSelector<Record<string, MessageDescriptor>>(
    (state) => state.messages,
  );
  const categories = useAppSelector((state) => state.categories);
  const categoryStrings = categories.map((category) => category.name);
  const size = useWindowSize();
  const row = defineGridRow(size.width, props.index, categoryStrings);

  let localeCode = useAppSelector((state) => state.localeCode);
  localeCode = swapCountryAndLanguage(localeCode);

  return (
    <div
      className={`product-detail
      ${props.selected ? 'selected' : ''}`}
      style={{ gridRowStart: row }}
      data-testid="product-detail"
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
        const { target, linkIcon } = getTargetAndLinkIconStatus(
          product.external,
        );

        return url ? (
          <div className="product-detail__product" key={`product-${i}`}>
            <a
              href={url}
              className="product-detail__product-link"
              target={target}
            >
              {product.translationId ? (
                <FormattedMessage
                  {...messages[`${product.translationId}Name`]}
                />
              ) : (
                product.name
              )}
            </a>
            <svg
              className={`${linkIcon}`}
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              aria-hidden="true"
              aria-label="This is an external link"
            >
              <path d="M26,28H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4h9V6H6V26H26V17h2v9A2,2,0,0,1,26,28Z"></path>
              <polygon points="21 2 21 4 26.59 4 18 12.59 19.41 14 28 5.41 28 11 30 11 30 2 21 2"></polygon>
            </svg>
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
