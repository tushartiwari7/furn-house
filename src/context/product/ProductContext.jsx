import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { getProducts } from "../../services";
import {
  compose,
  sort,
  priceFilter,
  ratingFilter,
  categoryFilter,
} from "../../utils";
import { reducerFn } from "./ProductReducer";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const initialFilters = {
    sort: "",
    priceFilterValue: 150000,
    ratingFilterValue: null,
    selectedCategory: [],
  };

  const [state, dispatch] = useReducer(reducerFn, initialFilters);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const filteredProducts = compose(
    state,
    sort,
    priceFilter,
    ratingFilter,
    categoryFilter
  )(products);
  return (
    <ProductContext.Provider
      value={{ products: filteredProducts, filters: state, dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
