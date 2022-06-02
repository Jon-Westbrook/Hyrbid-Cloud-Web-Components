import React, { useEffect } from 'react';
import { FormattedMessage, MessageDescriptor, useIntl } from 'react-intl';
import { Loading } from 'carbon-components-react';
import { setLocaleCode } from '../../../common/product-explorer/lib/redux/slices/localeCodeSlice';
import { setLoadingStatus } from '../../../common/product-explorer/lib/redux/slices/loadingSlice';
import ProductsDisplay from './ProductsDisplay';
import {
  useProductExplorerSecurityDispatch,
  useProductExplorerSecuritySelector,
} from '../lib/redux/hooks';
import './ProductExplorerSecurity.scss';

const ProductExplorerSecurity: React.FC = () => {
  const loading = useProductExplorerSecuritySelector<boolean>(
    (state) => state.loading,
  );
  const messages = useProductExplorerSecuritySelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);
  const intl = useIntl();
  const dispatch = useProductExplorerSecurityDispatch();

  useEffect(() => {
    dispatch(setLocaleCode(intl.locale));
    dispatch(setLoadingStatus(false));
  }, []);

  return (
    <div className="product-explorer-security">
      <div className="product-explorer-security__wrapper">
        <div className="product-explorer-security__headline-wrapper">
          {messages.appHeadline && (
            <h3 className="bx--type-expressive-heading-05 product-explorer-security__headline">
              <FormattedMessage {...messages.appHeadline} />
            </h3>
          )}
          {messages.appSubhead && (
            <p className="product-explorer-security__subhead">
              <FormattedMessage {...messages.appSubhead} />
            </p>
          )}
        </div>
        <div>{loading ? <Loading /> : <ProductsDisplay />}</div>
      </div>
    </div>
  );
};

export default ProductExplorerSecurity;
