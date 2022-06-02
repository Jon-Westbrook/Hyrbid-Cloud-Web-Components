import React, { useEffect } from 'react';
import { FormattedMessage, MessageDescriptor, useIntl } from 'react-intl';
import { setLocaleCode } from '../../../common/product-explorer/lib/redux/slices/localeCodeSlice';
import { setLoadingStatus } from '../../../common/product-explorer/lib/redux/slices/loadingSlice';
import { swapCountryAndLanguage } from '../utils';
import { LinkType } from '../../../common/product-explorer/lib/types';
import ProductsDisplay from './ProductsDisplay';
import {
  useProductExplorerDispatch,
  useProductExplorerSelector,
} from '../lib/redux/hooks';
import './ProductExplorer.scss';
import { Loading } from 'carbon-components-react';

interface ProductExplorerProps {
  linkType: LinkType.product | string;
}

const ProductExplorer: React.FC<ProductExplorerProps> = ({ linkType }) => {
  const loading = useProductExplorerSelector<boolean>((state) => state.loading);
  const messages = useProductExplorerSelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);
  const intl = useIntl();
  const dispatch = useProductExplorerDispatch();

  let localeCode = useProductExplorerSelector((state) => state.localeCode);
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
            <Loading withOverlay={false} />
          ) : (
            <ProductsDisplay linkType={linkType} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductExplorer;
