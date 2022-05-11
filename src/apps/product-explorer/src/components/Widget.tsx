import React from 'react';
import ProductsContextProvider, {
  ProductsContext,
} from '../contexts/ProductsContext';
import ProductsDisplay from './ProductsDisplay';
import { css } from '@emotion/core';
import { FormattedMessage } from 'react-intl';
import { swapCountryAndLanguage } from '../utils';

interface WidgetProps {
  element: HTMLElement;
}

const Widget: React.FC<WidgetProps> = (props) => {
  let localeCode = props.element.getAttribute('data-localecode') || '';
  localeCode = swapCountryAndLanguage(localeCode);

  const satelliteLink = `${
    localeCode === 'us-en' ? '' : '/' + localeCode
  }/cloud/satellite`;

  return (
    <ProductsContextProvider>
      <ProductsContext.Consumer>
        {(ctx) => (
          <div css={styles.appWrapper}>
            <div css={styles.global}>
              <div css={styles.headlineWrapper}>
                <h3
                  css={styles.headline}
                  className="bx--type-expressive-heading-05">
                  <FormattedMessage {...ctx.messages.appHeadline} />
                </h3>
                <p css={styles.subhead}>
                  <FormattedMessage {...ctx.messages.appSubhead} />
                </p>
                {localeCode === 'jp-ja' ? (
                  <p css={styles.subhead}>
                    <a href={satelliteLink}>
                      <FormattedMessage {...ctx.messages.appSubheadC} />
                    </a>
                    <FormattedMessage {...ctx.messages.appSubheadB} />
                  </p>
                ) : (
                  <p css={styles.subhead}>
                    <FormattedMessage {...ctx.messages.appSubheadB} />
                    <a href={satelliteLink}>
                      <FormattedMessage {...ctx.messages.appSubheadC} />
                    </a>
                  </p>
                )}
              </div>
              <div>
                {ctx.loading ? (
                  <>
                    <p className="ibm-h1">
                      <span className="ibm-spinner"></span> Loading products...
                    </p>
                  </>
                ) : (
                  <ProductsDisplay element={props.element} />
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

export default Widget;
