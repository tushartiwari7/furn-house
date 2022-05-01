import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { Loader } from "../../components";
import { getProducts } from "../../services";
import {
  compose,
  sort,
  priceFilter,
  ratingFilter,
  categoryFilter,
  productSearchFilter,
} from "../../utils";
import { reducerFn, initialFilters } from "./ProductReducer";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducerFn, initialFilters);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    })();
  }, []);

  // const setLoader = (value) =>
  //   value ? setIsLoading(value) : setTimeout(() => setIsLoading(false), 1000);

  const filteredProducts = compose(
    state,
    sort,
    priceFilter,
    ratingFilter,
    categoryFilter,
    productSearchFilter
  )(products);
  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        filters: state,
        dispatch,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
      <Loader />
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
