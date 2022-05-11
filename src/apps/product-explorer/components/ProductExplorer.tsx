import React, { useEffect } from 'react';
import { FormattedMessage, MessageDescriptor, useIntl } from 'react-intl';
import { setLocaleCode } from '../../../common/product-explorer/lib/redux/slices/localeCodeSlice';
import { setLoadingStatus } from '../../../common/product-explorer/lib/redux/slices/loadingSlice';
import { swapCountryAndLanguage } from '../utils';
import ProductsDisplay from './ProductsDisplay';
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks';
import 'ProductExplorer.scss';

interface ProductExplorerProps {
  linkType: string;
}

const ProductExplorer: React.FC<ProductExplorerProps> = ({ linkType }) => {
  const loading = useAppSelector<boolean>((state) => state.loading);
  let localeCode = useAppSelector((state) => state.localeCode);
  const messages = useAppSelector<Record<string, MessageDescriptor>>(
    (state) => state.messages,
  );
  const intl = useIntl();
  const dispatch = useAppDispatch();

  localeCode = swapCountryAndLanguage(localeCode);

  const satelliteLink = `${
    localeCode === 'us-en' ? '' : '/' + localeCode
  }/cloud/satellite`;

  useEffect(() => {
    dispatch(setLocaleCode(intl.locale));
    dispatch(setLoadingStatus(false));
  }, []);
  return (
    <div className="product-explorer">
      <div className="product-explorer__global">
        <div className="product-explorer__headline-wrapper">
          <h3 className="product-explorer__headline bx--type-expressive-heading-05">
            <FormattedMessage {...messages.appHeadline} />
          </h3>
          <p className="product-explorer__subhead">
            <FormattedMessage {...messages.appSubhead} />
          </p>
          {localeCode === 'jp-ja' ? (
            <p className="product-explorer__subhead">
              <a href={satelliteLink}>
                <FormattedMessage {...messages.appSubheadC} />
              </a>
              <FormattedMessage {...messages.appSubheadB} />
            </p>
          ) : (
            <p className="product-explorer__subhead">
              <FormattedMessage {...messages.appSubheadB} />
              <a href={satelliteLink}>
                <FormattedMessage {...messages.appSubheadC} />
              </a>
            </p>
          )}
        </div>
        <div>
          {loading ? (
            <>
              <p className="ibm-h1">
                <span className="ibm-spinner"></span> Loading products...
              </p>
            </>
          ) : (
            <ProductsDisplay linkType={linkType} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductExplorer;
