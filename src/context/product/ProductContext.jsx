import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { Loader } from "components";
import { getFilteredProducts } from "services";
import { initialFilters, PRODUCTS_PER_PAGE } from "helpers";
import { reducerFn } from "./ProductReducer";

const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialFilters);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState({
    page: 1,
    size: 1,
  });

  const changePage = async (page) => {
    setIsLoading(true);
    const { products } = await getFilteredProducts(page, state);
    setProducts(products);
    setIsLoading(false);
    setValues((prev) => ({ ...prev, page }));
  };

  useEffect(() => {
    (async () => {
      const { products, size } = await getFilteredProducts(1, state);
      setProducts(products);
      setValues({ page: 1, size });
      setIsLoading(false);
    })();
  }, [state]);
  return (
    <ProductContext.Provider
      value={{
        products,
        filters: state,
        dispatch,
        isLoading,
        setIsLoading,
        changePage,
        page: values.page,
        totalPages:
          Math.floor(values.size / PRODUCTS_PER_PAGE) +
          (values.size % PRODUCTS_PER_PAGE > 0 ? 1 : 0),
      }}
    >
      {children}
      <Loader />
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
