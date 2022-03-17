export const priceFilter = (products, filters) => {
  return products.filter((product) => {
    return Number(product.offer_price) <= filters.priceFilterValue;
  });
};
