import { createContext, useContext, useState, useEffect } from "react";
import { getCategories } from "services";
const ProductCategoryContext = createContext();

export const ProductCategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getCategories();
      setCategory(response);
    })();
  }, []);

  return (
    <ProductCategoryContext.Provider value={category}>
      {children}
    </ProductCategoryContext.Provider>
  );
};

export const useProductCategory = () => useContext(ProductCategoryContext);
