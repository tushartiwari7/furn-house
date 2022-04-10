export const priceFilter = (products, filters) => {
  if (filters.priceFilterValue === "") return products;
  return products.filter((product) => {
    return Number(product.offer_price) <= filters.priceFilterValue;
  });
};
