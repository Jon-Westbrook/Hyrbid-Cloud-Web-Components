import React, { useEffect } from 'react';
import { FormattedMessage, MessageDescriptor, useIntl } from 'react-intl';
import { Loading } from 'carbon-components-react';
import { setLocaleCode } from '../../../common/explorer/lib/redux/slices/localeCodeSlice';
import { setLoadingStatus } from '../../../common/explorer/lib/redux/slices/loadingSlice';
import ProductsDisplay from './ProductsDisplay';
import {
  useProductExplorerItInfraDispatch,
  useProductExplorerItInfraSelector,
} from '../lib/redux/hooks';
import './ProductExplorerItInfra.scss';

const ProductExplorerItInfra: React.FC = () => {
  const loading = useProductExplorerItInfraSelector<boolean>(
    (state) => state.loading,
  );
  const messages = useProductExplorerItInfraSelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);
  const intl = useIntl();
  const dispatch = useProductExplorerItInfraDispatch();

  useEffect(() => {
    dispatch(setLocaleCode(intl.locale));
    dispatch(setLoadingStatus(false));
  }, []);
  return (
    <div className="product-explorer-it-infra">
      <div className="product-explorer-it-infra__inner">
        <div className="product-explorer-it-infra__headline-wrapper">
          <h1 className="product-explorer-it-infra__headline bx--type-expressive-heading-05">
            <FormattedMessage {...messages.appHeadline} />
          </h1>
        </div>
        <div>{loading ? <Loading /> : <ProductsDisplay />}</div>
      </div>
    </div>
  );
};

export default ProductExplorerItInfra;
