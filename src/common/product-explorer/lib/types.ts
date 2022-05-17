export interface Product {
  name: string;
  longDescription: string;
  url: string;
  translationId?: string;
  external: boolean;
  pricingUrl?: string;
}

export interface Category {
  name: string;
  translationId: string;
  description: string;
  icon: string;
  link?: string;
  products: Product[];
}

export interface ProductDetailProps {
  category: Category;
  products: Product[];
  index: number;
  selected: boolean;
  linkType?: LinkType.product | string;
}

export enum LinkType {
  product = 'product',
  pricing = 'pricing',
}
