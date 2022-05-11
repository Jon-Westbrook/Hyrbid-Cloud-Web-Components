import React from 'react';
import { render, categories } from './testUtils';
import '@testing-library/jest-dom';
import ProductDetail from '../components/ProductDetail';

describe('<ProductDetail />', () => {
  let element = null;

  beforeEach(() => {
    element = document.createElement('div');
    element.setAttribute('data-localecode', 'en-us');
  });

  afterEach(() => {
    element = null;
  });

  it('displays each product passed in as props', () => {
    const { getAllByText } = render(
      <ProductDetail
        category={categories[0]}
        products={categories[0].products}
        index={0}
        selected={false}
        element={element}
      />,
    );

    expect.arrayContaining(getAllByText(/product 1/i));
    expect.arrayContaining(getAllByText(/product 2/i));
  });
});
