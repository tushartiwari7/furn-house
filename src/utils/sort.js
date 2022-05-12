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
