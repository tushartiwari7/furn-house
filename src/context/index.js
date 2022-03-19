import { useProducts, ProductProvider } from "./product/ProductContext";
import { UserProvider, useUser } from "./user/UserContext.jsx";
import {
  useProductCategory,
  ProductCategoryProvider,
} from "./productCategory/ProductCategoryContext";

const ContextCluster = ({ children }) => (
  <ProductProvider>
    <ProductCategoryProvider>
      <UserProvider>{children}</UserProvider>
    </ProductCategoryProvider>
  </ProductProvider>
);

export { useProducts, useUser, useProductCategory, ContextCluster };
