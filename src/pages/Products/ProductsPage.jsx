// import { useSearchParams } from "react-router-dom";
import { Filters, ProductCard } from "../../components";
import './ProductsPage.css';
import { useProducts } from "../../context";

export const ProductsPage = () => {
  // const [params] = useSearchParams();
  // const paramVal = params.get("categoryName");
  // console.log(paramVal);
  const products = useProducts();

  return (
    <div className="grid product-page">
      <Filters />
      {!products.length && <h1 className="h1 flex flex-center text-center">Loading...</h1>}
      <main className="main grid product-list p-sm">
        {products.length && products.map((product)=><ProductCard key={product._id} {...product} />)}
      </main>
    </div>
  );
};
