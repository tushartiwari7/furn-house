export const productSearchFilter = (products, filters) => {
  if (!filters.searchQuery) return products;
  return products.filter((product) =>
    product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
  );
};
