import { useProducts, ProductProvider } from "./product/ProductContext";
import { UserProvider, useUser } from "./user/UserContext.jsx";
import {
  useProductCategory,
  ProductCategoryProvider,
} from "./productCategory/ProductCategoryContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ContextCluster = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    document.title = `${location.pathname.slice(1).toUpperCase()}  
    ${location.pathname.length > 1 ? "|" : ""} FurnHouse`;
  });

  return (
    <ProductProvider>
      <ProductCategoryProvider>
        <UserProvider>{children}</UserProvider>
      </ProductCategoryProvider>
    </ProductProvider>
  );
};

export { useProducts, useUser, useProductCategory, ContextCluster };
