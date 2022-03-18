export const reducerFn = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sort: action.payload || ""
      };
    case "PRICE_FILTER":
      return {
        ...state,
        priceFilterValue: action.payload
      };
    case "RATING_FILTER":
      return {
        ...state,
        ratingFilterValue: action.payload
      };
    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload
      };
    default:
      return state;
  }
}