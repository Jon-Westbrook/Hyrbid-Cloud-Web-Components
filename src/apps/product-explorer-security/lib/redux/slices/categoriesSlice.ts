import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../../types';
import { products } from '../../../assets/data/products';

export function mapProductsToCategories(products: {
  categories: Category[];
}): Category[] {
  return products.categories.map((category: Category) => {
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
}

export const initialState = mapProductsToCategories(products);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    loadCategories: () => initialState,
  },
});

export const { loadCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
