export const categoryFilter = (products, filters) => {
  console.log(filters.selectedCategory);
  if (
    filters.selectedCategory.length === 0 ||
    (filters.selectedCategory.length === 1 &&
      filters.selectedCategory[0] === null)
  )
    return products;
    
  return products.filter((product) => {
    return filters.selectedCategory.includes(product.categoryName);
  });
};
