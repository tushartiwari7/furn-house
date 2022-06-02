import { initialFilters, reducerTypes } from "helpers";

export const reducerFn = (state, action) => {
  switch (action.type) {
    case reducerTypes.SORT:
      return {
        ...state,
        sort: action.payload || "",
      };

    case reducerTypes.PRICE_FILTER:
      return {
        ...state,
        priceFilterValue: action.payload,
      };

    case reducerTypes.RATING_FILTER:
      return {
        ...state,
        ratingFilterValue: action.payload,
      };

    case reducerTypes.SET_CATEGORY:
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

    case reducerTypes.SEARCH_FILTER:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case reducerTypes.RESET_FILTERS:
      return initialFilters;

    default:
      return state;
  }
};
