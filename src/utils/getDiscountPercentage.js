export const getDiscountPercentage = (price, offer_price) =>
  Math.round(((price - offer_price) / price) * 100);
