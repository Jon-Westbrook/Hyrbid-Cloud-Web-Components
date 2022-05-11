import React from 'react';
import { render } from './testUtils';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductsDisplay from '../components/ProductsDisplay';

describe('<ProductsDisplay />', () => {
  let element = null;

  beforeEach(() => {
    element = document.createElement('div');
    element.setAttribute('data-localecode', 'en-us');
  });

  afterEach(() => {
    element = null;
  });

  it('should display a tile for each available category', () => {
    const { queryAllByText } = render(<ProductsDisplay element={element} />);

    expect(queryAllByText(/category 1/i)[0]).toBeInTheDocument();
    expect(queryAllByText(/category 2/i)[0]).toBeInTheDocument();
    expect(queryAllByText(/category 3/i)[0]).toBeInTheDocument();
  });

  it('adds/removes ProductDetail component to DOM when tile is clicked', () => {
    const { queryAllByText, queryAllByTestId } = render(
      <ProductsDisplay element={element} />,
    );
    const tile = queryAllByText(/category 1/i)[0];
    fireEvent.click(tile);
    expect(queryAllByTestId('product-detail')[0]).toBeVisible();
    fireEvent.click(tile);
    expect(queryAllByTestId('product-detail')[0]).not.toBeVisible();
  });
});
