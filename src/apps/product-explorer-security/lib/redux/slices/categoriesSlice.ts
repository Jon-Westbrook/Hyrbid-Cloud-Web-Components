import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../../types';
import { products } from '../../../assets/data/products';

export function mapProductsToCategories(products: { categories: Category[] }) {
  const productsMap = products.categories.map((category: Category) => {
    const categoryObject: Category = {
      name: category.name,
      translationId: category.translationId,
      description: category.description,
      icon: category.icon,
      products: category.products,
    };

    if (category.link) {
      categoryObject.link = category.link;
    }

    return categoryObject;
  });

  return productsMap;
}

const initialState: Category[] = [];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    loadCategories: () => mapProductsToCategories(products),
  },
});

export const { loadCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
