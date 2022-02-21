import 'whatwg-fetch';
import data from './assets/data/productsMapDynamic.json';

const productKeys = data.categories
  .map((category) => category.products.map((product) => product.productKey))
  .reduce((acc, val) => acc.concat(val), []);

async function fetchProductsPage(page = 1) {
  let response;

  const apiQuery = encodeURIComponent(
    `products?locale=en-us&pageSize=50&fields=name,longDescription,url,productKey&productKey=${productKeys}&page=${page}`,
  );

  try {
    response = await window.fetch(
      `https://32f132b3.us-east.apiconnect.appdomain.cloud/product-catalog?query=${apiQuery}`,
      { method: 'GET' },
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllProducts(page = 1) {
  const response = await fetchProductsPage(page);

  if (response.links.next) {
    const moreProducts = await fetchAllProducts(page + 1);
    return [...response.data, ...moreProducts.data];
  } else {
    return response;
  }
}
