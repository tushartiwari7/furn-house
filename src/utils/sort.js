export const sort  = (products,filters) => {
  const {sort} = filters;
  switch (sort) {
    case "INCREASING":
      return [...products].sort((a,b) => Number(a.offer_price) - Number(b.offer_price));
    case "DECREASING":
      return [...products].sort((a,b) => Number(b.offer_price) - Number(a.offer_price));
    default:
      return products;
  }
}