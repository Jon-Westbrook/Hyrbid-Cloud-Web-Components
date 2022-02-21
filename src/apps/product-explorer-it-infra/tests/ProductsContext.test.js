import React from 'react';
import { fetchAllProducts as mockFetchAllProducts } from '../api';
import { render, categories } from './testUtils';
import { wait } from '@testing-library/react';
import ProductsContextProvider from '../contexts/ProductsContext';

jest.mock('../api');

describe('<ProductsContextProvider', () => {
  xit('makes an API call when dynamic switch is true', async () => {
    mockFetchAllProducts.mockResolvedValueOnce(categories);
    render(<ProductsContextProvider />);
    expect(mockFetchAllProducts).toHaveBeenCalledTimes(1);
    await wait();
  });

  it('does not make API call when dynamic switch is false', async () => {
    render(<ProductsContextProvider />);
    expect(mockFetchAllProducts).toHaveBeenCalledTimes(0);
    await wait();
  });
});
