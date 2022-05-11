import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';
import { ProductsContext } from '../contexts/ProductsContext';

export const categories = [
  {
    name: 'Category Name 1',
    translationId: 'category1',
    description: 'Description of category 1.',
    icon: 'path/to/icon.svg',
    products: [
      {
        longDescription: 'Long description of product 1',
        name: 'Product 1',
        productKey: 'q1w2e3r4t5y6',
        url: 'example.com',
      },
      {
        longDescription: 'Long description of product 2',
        name: 'Product 2',
        productKey: 'q1w2e3r4t5y6',
        url: 'example.com',
      },
    ],
  },
  {
    name: 'Category Name 2',
    translationId: 'category2',
    description: 'Description of category 2.',
    icon: 'path/to/icon.svg',
    products: [
      {
        longDescription: 'Long description of product 1',
        name: 'Product 1',
        productKey: 'q1w2e3r4t5y6',
        url: 'example.com',
      },
      {
        longDescription: 'Long description of product 2',
        name: 'Product 2',
        productKey: 'q1w2e3r4t5y6',
        url: 'example.com',
      },
    ],
  },
  {
    name: 'Category Name 3',
    translationId: 'category3',
    description: 'Description of category 3.',
    icon: 'path/to/icon.svg',
    products: [
      {
        longDescription: 'Long description of product 1',
        name: 'Product 1',
        productKey: 'q1w2e3r4t5y6',
        url: 'example.com',
      },
      {
        longDescription: 'Long description of product 2',
        name: 'Product 2',
        productKey: 'q1w2e3r4t5y6',
        url: 'example.com',
      },
    ],
  },
];

export const messages = {
  category1Name: {
    id: 'category-1.name',
    defaultMessage: 'Category 1',
  },
  category1Description: {
    id: 'category-1.description',
    defaultMessage: 'Description of category 1.',
  },
  category2Name: {
    id: 'category-2',
    defaultMessage: 'Category 2',
  },
  category2Description: {
    id: 'category-2.description',
    defaultMessage: 'Description of category 2.',
  },
  category3Name: {
    id: 'category-3',
    defaultMessage: 'Category 3',
  },
  category3Description: {
    id: 'category-3.description',
    defaultMessage: 'Description of category 3.',
  },
};

const loading = false;

export function render(ui) {
  return {
    ...rtlRender(
      <IntlProvider locale="en">
        <ProductsContext.Provider value={{ categories, loading, messages }}>
          {ui}
        </ProductsContext.Provider>
      </IntlProvider>,
    ),
  };
}
