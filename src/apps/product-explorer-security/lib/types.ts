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
