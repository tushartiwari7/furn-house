import "./FeaturedProducts.css";
import { useProducts } from "context";
import { VerticalCard } from "components";
import Slider from "react-slick";
import { featuredProductsSlider } from "helpers";
export const FeaturedProducts = () => {
  const { products } = useProducts();

  return (
    <section className="best-selling pos-rel">
      <Slider {...featuredProductsSlider}>
        {products
          .filter((product) => Number(product.rating) === 5)
          .map((product) => (
            <VerticalCard key={product._id} product={product} />
          ))}{" "}
      </Slider>
      <div className="pos-abs heading-overlay">
        <h1 className="heading">Best Selling</h1>
      </div>
    </section>
  );
};
