export interface Product {
  name: string;
  longDescription: string;
  url: string;
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

export interface ProductDetailProps {
  category: Category;
  products: Product[];
  index: number;
  selected: boolean;
}
