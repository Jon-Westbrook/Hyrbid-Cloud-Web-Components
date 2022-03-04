import React from 'react';
import ProductsContextProvider, {
  ProductsContext,
} from '../contexts/ProductsContext';
import ProductsDisplay from './ProductsDisplay';
import { FormattedMessage } from 'react-intl';
import messages from '../locales/messages';
import { ProductDetailElement } from './ProductDetail';
import './ProductExplorer.scss';

interface WidgetProps {
  element: ProductDetailElement;
}

const ProductExplorer: React.FC<WidgetProps> = (props) => {
  return (
    <ProductsContextProvider>
      <ProductsContext.Consumer>
        {(ctx) => (
          <div className="product-explorer-it-infra">
            <div className="product-explorer-it-infra__inner">
              <div className="product-explorer-it-infra__headline-wrapper">
                <h1 className="product-explorer-it-infra__headline bx--type-expressive-heading-05">
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

export default ProductExplorer;
