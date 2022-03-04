import React, { createContext, useEffect, useState } from 'react';
import { fetchAllProducts } from '../api';
import dataDynamic from '../assets/data/productsMapDynamic.json';
import dataStatic from '../assets/data/productsMapStatic.json';
import messages from '../locales/messages';

// switch to true to pull product data from API
const dynamic = false;

export interface Product {
  name: string;
  longDescription?: string;
  url?: string;
  productKey?: string;
  translationId?: string;
}

export interface Category {
  name: string;
  translationId: string;
  description: string;
  icon: string;
  link?: string;
  products: Product[];
}

export interface Categories {
  categories: Category[];
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
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  function mapProductsToCategories(
    productsJSON: Categories,
    fetchedProducts: Product[],
  ) {
    const productsMap = productsJSON.categories.map((category: Category) => {
      category.products.reduce((acc: Product[], product) => {
        if (product.productKey) {
          const match = fetchedProducts.find((fetchedProduct) => {
            return fetchedProduct.productKey === product.productKey;
          });
          if (match) acc.push(match);
        } else {
          acc.push(product);
        }
        return acc;
      }, []);

      return category;
    });

    return productsMap;
  }

  // Provide empty array as 2nd arg to this effect, which signals to React
  // not to re-run this effect on each re-render so we don't fetch repeatedly.
  // See https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect.
  useEffect(() => {
    if (dynamic) {
      fetchAllProducts().then((results: Product[]) => {
        const products = mapProductsToCategories(dataDynamic, results);

        setCategories(products);
        setLoading(false);
      });
    } else {
      const products = mapProductsToCategories(dataStatic, []);

      setCategories(products);
      setLoading(false);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        categories,
        loading,
        messages,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
