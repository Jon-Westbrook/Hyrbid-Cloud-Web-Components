/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks';
import ProductsDisplay from './ProductsDisplay';
import { css } from '@emotion/react';
import { FormattedMessage, MessageDescriptor, useIntl } from 'react-intl';
import { Loading } from 'carbon-components-react';
import { setLocaleCode } from '../lib/redux/slices/localeCodeSlice';
import { setLoadingStatus } from '../lib/redux/slices/loadingSlice';

const ProductExplorerSecurity: React.FC = () => {
  const loading = useAppSelector<boolean>((state) => state.loading);
  const messages = useAppSelector<Record<string, MessageDescriptor>>(
    (state) => state.messages,
  );
  const intl = useIntl();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLocaleCode(intl.locale));
    dispatch(setLoadingStatus(false));
  }, []);

  return (
    <div css={styles.appWrapper} className="ibm-product-explorer-ibm-sec">
      <div css={styles.global}>
        <div css={styles.headlineWrapper}>
          <h3 css={styles.headline} className="bx--type-expressive-heading-05">
            <FormattedMessage {...messages.appHeadline} />
          </h3>
          <p css={styles.subhead}>
            <FormattedMessage {...messages.appSubhead} />
          </p>
        </div>
        <div>{loading ? <Loading /> : <ProductsDisplay />}</div>
      </div>
    </div>
  );
};

const styles = {
  appWrapper: css`
    background-color: #171717;
  `,
  global: css`
    background-color: #171717;
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1rem;
    max-width: 1584px;
    margin: 0 auto;

    @media (max-width: 1055px) {
      grid-template-columns: auto;
    }
  `,
  headlineWrapper: css`
    grid-column: 1 / 1;
    padding: 2rem 1rem 1rem 1rem;

    @media (max-width: 1055px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding-bottom: 0;
    }

    @media (max-width: 671px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
  headline: css`
    margin-bottom: 1.5rem;
    max-width: 87.5%;
    padding: 0;

    @media (max-width: 671px) {
      max-width: 75%;
    }
  `,
  subhead: css`
    color: #bebebe;
    margin-bottom: 1.5rem;
    max-width: 75%;
    padding: 0;

    @media (max-width: 1055px) {
      grid-column: 1;
      margin-bottom: 2rem;
    }
  `,
};

export default ProductExplorerSecurity;
