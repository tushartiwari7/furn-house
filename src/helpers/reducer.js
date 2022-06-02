export const initialFilters = {
  selectedCategory: {},
  sort: "",
  priceFilterValue: "",
  ratingFilterValue: null,
  searchQuery: "",
};

export const reducerTypes = {
  SET_CATEGORY: "SET_CATEGORY",
  SORT: "SORT",
  PRICE_FILTER: "PRICE_FILTER",
  RATING_FILTER: "RATING_FILTER",
  SEARCH_FILTER: "PRODUCTS_SEARCH",
  RESET_FILTERS: "RESET_FILTERS",
};
