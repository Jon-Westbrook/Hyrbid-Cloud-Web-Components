import dataStatic from '../assets/data/productsMapStatic.json';

describe('productsMapStatic', () => {
  it('displays a warning when missing a translationId', () => {
    dataStatic.categories.forEach((category) => {
      category.products.forEach((product) => {
        if (!product.translationId) {
          console.warn(`Add translationId for product: ${product.name}`);
        }
      });
    });
  });
});
