import "./FeaturedProducts.css";
import { useProducts } from "../../context";
import { VerticalCard } from "../VerticalCard/VerticalCard";
import Slider from "react-slick";

export const FeaturedProducts = () => {
  const { products } = useProducts();

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="best-selling pos-rel">
      <Slider {...settings}>
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
