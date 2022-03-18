import { Filters, ProductCard } from "../../components";
import { useProducts } from "../../context";
import './ProductsPage.css';

export const ProductsPage = () => {
  const {products} = useProducts();

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
