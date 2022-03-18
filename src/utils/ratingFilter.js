export const ratingFilter = (products, filters) => {
  if(filters.ratingFilterValue === null) return products;
  return products.filter((product) => {
    return Number(product.rating) >= filters.ratingFilterValue;
  });
};
