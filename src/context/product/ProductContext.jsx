import { createContext, useContext,useState,useEffect } from "react";
import { getProducts } from "../../services";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async ()=>{
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
