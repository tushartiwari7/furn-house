export const categoryFilter = (products, filters) => {
  
  if(Object.keys(filters.selectedCategory).length === 0)
    return products;  

  return products.filter((product) => {
    return filters.selectedCategory[product.categoryName];
  });
};
