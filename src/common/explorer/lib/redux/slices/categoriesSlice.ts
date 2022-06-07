import { createSlice, Slice } from '@reduxjs/toolkit';
import { Category } from '../../types';

interface Categories {
  categories: Category[];
}

export function mapProductsToCategories(products: Categories): Category[] {
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

const createCategoriesSlice = (products: Categories): Slice<Category[]> => {
  const initialState = mapProductsToCategories(products);
  return createSlice({
    name: 'categories',
    initialState,
    reducers: {
      loadCategories: () => initialState,
    },
  });
};

export default createCategoriesSlice;
