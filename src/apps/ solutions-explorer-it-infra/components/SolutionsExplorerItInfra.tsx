import React, { useEffect } from 'react';
import { FormattedMessage, MessageDescriptor, useIntl } from 'react-intl';
import { setLocaleCode } from '../../../common/explorer/lib/redux/slices/localeCodeSlice';
import { setLoadingStatus } from '../../../common/explorer/lib/redux/slices/loadingSlice';
import ProductsDisplay from './ProductsDisplay';
import {
  useSolutionsExplorerItInfraDispatch,
  useSolutionsExplorerItInfraSelector,
} from '../lib/redux/hooks';
import { Loading } from 'carbon-components-react';
import './SolutionsExplorerItInfra.scss';

const SolutionsExplorerItInfra: React.FC = () => {
  const loading = useSolutionsExplorerItInfraSelector<boolean>(
    (state) => state.loading,
  );
  const messages = useSolutionsExplorerItInfraSelector<
    Record<string, MessageDescriptor>
  >((state) => state.messages);
  const intl = useIntl();
  const dispatch = useSolutionsExplorerItInfraDispatch();

  useEffect(() => {
    dispatch(setLocaleCode(intl.locale));
    dispatch(setLoadingStatus(false));
  }, []);
  return (
    <div className="solutions-explorer-it-infra">
      <div className="solutions-explorer-it-infra__global">
        <div className="solutions-explorer-it-infra__headline-wrapper">
          <h1 className="bx--type-expressive-heading-05 solutions-explorer-it-infra__headline">
            <FormattedMessage {...messages.appHeadline} />
          </h1>
        </div>
        <div>
          <div>
            {loading ? <Loading withOverlay={false} /> : <ProductsDisplay />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsExplorerItInfra;
