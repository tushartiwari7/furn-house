import "./FeaturedProducts.css";
import { useProducts } from "../../context";
import { ProductCard } from "../ProductCard/ProductCard";

export const FeaturedProducts = () => {
  const { products } = useProducts();
  return (
    <section className="m-lg">
      <h3 className="h2 ubuntu text-center mx-md my-lg">Trending Products</h3>
      <section className="featured-products-wrapper flex wrap">
        {products
          .filter((product) => Number(product.rating) === 5)
          .splice(0, 3)
          .map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
      </section>
    </section>
  );
};
