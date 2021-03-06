const calculateGST = (price) => Math.round(price * 0.18);

export const getCartSummary = (cart) => {
  return cart.reduce(
    (acc, item) => {
      const discount =
        (Number(item.price) - Number(item.offer_price)) * item.qty;
      const productAmount = Number(item.price) * item.qty;
      return {
        ...acc,
        items: acc.items + item.qty,
        orderVal: acc.orderVal + productAmount,
        total:
          acc.total + productAmount + calculateGST(productAmount) - discount,
        gst: acc.gst + calculateGST(productAmount),
        discount: acc.discount + discount,
      };
    },
    { items: 0, orderVal: 0, total: 0, discount: 0, gst: 0 }
  );
};

export const getDiscountPercentage = (price, offer_price) =>
  Math.round(((price - offer_price) / price) * 100);
