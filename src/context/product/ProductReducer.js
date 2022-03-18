export const initialFilters = {
  sort: "",
  priceFilterValue: 150000,
  ratingFilterValue: null,
  selectedCategory: {},
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sort: action.payload || "",
      };
    case "PRICE_FILTER":
      return {
        ...state,
        priceFilterValue: action.payload,
      };
    case "RATING_FILTER":
      return {
        ...state,
        ratingFilterValue: action.payload,
      };
    case "SET_CATEGORY":
      if (state.selectedCategory[action.payload])  {
        const categoryCopy = {...state.selectedCategory};
        delete categoryCopy[action.payload];
        return {
          ...state,
          selectedCategory: categoryCopy
        }
      }
      return {
        ...state,
        selectedCategory: {
          ...state.selectedCategory,
          [action.payload]: true,
        }
      };

    case "RESET_FILTERS":
      return initialFilters;

    default:
      return state;
  }
};
