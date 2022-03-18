export const sort  = (products,filters) => {
  const {sort} = filters;
  switch (sort) {
    case "increasing":
      return [...products].sort((a,b) => a.price - b.price);

    case "decreasing":
      return [...products].sort((a,b) => b.price - a.price);

    default:
      return products;
  }
}