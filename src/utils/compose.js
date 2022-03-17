export const compose = (filters, ...utilFunctions) => {
  return (initialProducts) =>
    utilFunctions.reduce(
      (filteredProducts, func) => func(filteredProducts,filters),
      initialProducts
    );
};
