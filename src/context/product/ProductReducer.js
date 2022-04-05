import toast from "react-hot-toast";

export const initialFilters = {
  sort: "",
  priceFilterValue: 110000,
  ratingFilterValue: null,
  selectedCategory: {},
  searchQuery: "",
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
      toast("Updated Selected Categories");
      if (state.selectedCategory[action.payload]) {
        const categoryCopy = { ...state.selectedCategory };
        delete categoryCopy[action.payload];
        return {
          ...state,
          selectedCategory: categoryCopy,
        };
      }
      return {
        ...state,
        selectedCategory: {
          ...state.selectedCategory,
          [action.payload]: true,
        },
      };

    case "PRODUCTS_SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "RESET_FILTERS":
      return initialFilters;

    default:
      return state;
  }
};
