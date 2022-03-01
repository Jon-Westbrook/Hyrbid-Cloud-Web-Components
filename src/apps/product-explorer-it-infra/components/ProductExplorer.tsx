import React from 'react';
import ProductsContextProvider, {
  ProductsContext,
} from '../contexts/ProductsContext';
import ProductsDisplay from './ProductsDisplay';
import { FormattedMessage } from 'react-intl';
import messages from '../locales/messages';
import { IBMLocale } from '../../../common/mapValidLocale';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';

interface WidgetProps {
  localeCode: IBMLocale;
}

const ProductExplorer: React.FC<WidgetProps> = (props) => {
  return (
    <ProductsContextProvider>
      <ProductsContext.Consumer>
        {(ctx) => (
          <div css={styles.appWrapper}>
            <div css={styles.global}>
              <div css={styles.headlineWrapper}>
                <h1
                  css={styles.headline}
                  className="bx--type-expressive-heading-05"
                >
                  <FormattedMessage {...messages.appHeadline} />
                </h1>
              </div>
              <div>
                {ctx.loading ? (
                  <>
                    <p className="ibm-h1">
                      <span className="ibm-spinner"></span> Loading products...
                    </p>
                  </>
                ) : (
                  <ProductsDisplay localeCode={props.localeCode} />
                )}
              </div>
            </div>
          </div>
        )}
      </ProductsContext.Consumer>
    </ProductsContextProvider>
  );
};

const styles = {
  appWrapper: css`
    background-color: #171717;
  `,
  global: css`
    font-family: ibmplexsans-light;
    background-color: #171717;
    color: #ffff;
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
    font-family: ibmplexsans-light;
    font-size: 53px;
    margin-bottom: 1.5rem;
    max-width: 87.5%;
    padding: 0;

    @media (max-width: 671px) {
      max-width: 75%;
    }
  `,
  subhead: css`
    color: #171717;
    margin-bottom: 1.5rem;
    max-width: 75%;
    padding: 0;

    @media (max-width: 1055px) {
      grid-column: 1;
      margin-bottom: 2rem;
    }
  `,
};

export default ProductExplorer;
