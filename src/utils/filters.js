export const categoryFilter = (products, filters) => {
  if (Object.keys(filters.selectedCategory).length === 0) return products;
  return products.filter(
    (product) => filters.selectedCategory[product.categoryName]
  );
};

export const priceFilter = (products, filters) => {
  if (filters.priceFilterValue === "") return products;
  return products.filter((product) => {
    return Number(product.offer_price) <= filters.priceFilterValue;
  });
};

export const productSearchFilter = (products, filters) => {
  if (!filters.searchQuery) return products;
  return products.filter((product) =>
    product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
  );
};

export const ratingFilter = (products, filters) => {
  if (filters.ratingFilterValue === null) return products;
  return products.filter((product) => {
    return Number(product.rating) >= filters.ratingFilterValue;
  });
};

export const sort = (products, filters) => {
  const { sort } = filters;
  switch (sort) {
    case "INCREASING":
      return [...products].sort(
        (a, b) => Number(a.offer_price) - Number(b.offer_price)
      );
    case "DECREASING":
      return [...products].sort(
        (a, b) => Number(b.offer_price) - Number(a.offer_price)
      );
    case "NAME-ASC":
      return [...products].sort((a, b) => (a.title < b.title ? -1 : 1));
    case "NAME-DESC":
      return [...products].sort((a, b) => (a.title > b.title ? -1 : 1));
    default:
      return products;
  }
};
