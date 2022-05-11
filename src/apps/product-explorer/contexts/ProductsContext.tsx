import React, { createContext, useEffect, useState } from 'react';
import productData from '../assets/data/productsMapStatic.json';
import messages from '../messages';

export interface Product {
  name: string;
  longDescription: string;
  url: string;
  pricingUrl?: string;
  productKey: string;
  translationId?: string;
  external: boolean;
}

export interface Category {
  name: string;
  translationId: string;
  description: string;
  icon: string;
  link?: string;
  products: Product[];
}

interface ProductsContextProps {
  categories: Category[];
  loading: boolean;
  messages: any;
}

export const ProductsContext = createContext<ProductsContextProps>({
  categories: [],
  loading: true,
  messages: [],
});

const ProductsContextProvider: React.FC = (props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  function mapProductsToCategories(productsJSON: any) {
    const productsMap = productsJSON.categories.map((category: any) => {
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

  useEffect(() => {
    const products = mapProductsToCategories(productData);

    setCategories(products);
    setLoading(false);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        categories,
        loading,
        messages,
      }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
