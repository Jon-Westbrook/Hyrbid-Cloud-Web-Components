import React, { createContext, useEffect, useState } from 'react';
import { fetchAllProducts } from '../api';
import dataDynamic from '../assets/data/productsMapDynamic.json';
import dataStatic from '../assets/data/productsMapStatic.json';
import messages from '../locales/messages';

// switch to true to pull product data from API
const dynamic = false;

export interface Product {
  name: string;
  longDescription: string;
  url: string;
  productKey: string;
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

  function mapProductsToCategories(
    productsJSON: any,
    fetchedProducts: Product[],
  ) {
    const productsMap = productsJSON.categories.map((category: any) => {
      const products: any = [];

      category.products.forEach((product: any) => {
        fetchedProducts.forEach((fetchedProduct) => {
          if (product.productKey === fetchedProduct.productKey) {
            products.push(fetchedProduct);
          }
        });

        if (!product.productKey) {
          products.push(product);
        }
      });

      const categoryObject: Category = {
        name: category.name,
        translationId: category.translationId,
        description: category.description,
        icon: category.icon,
        products,
      };

      if (category.link) {
        categoryObject.link = category.link;
      }

      return categoryObject;
    });

    return productsMap;
  }

  // provide empty array as 2nd arg to this effect, which signals to React
  // not to re-run this effect on each re-render so we don't fetch repeatedly
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
