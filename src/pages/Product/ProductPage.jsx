import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts, useUser } from "../../context";
import "./ProductPage.css";
import {
  BsHeart,
  BsTrash,
  BsFillHeartFill,
  BsStarFill,
  BsX,
} from "react-icons/bs";
import Slider from "react-slick";
import { OurServices, VerticalCard } from "../../components";
import { productImagesSlider, similarProductSlider } from "../../utils";

export const ProductPage = () => {
  const params = useParams();
  const { products } = useProducts();
  const [modalImage, setModalImage] = useState("");
  const {
    user,
    cartHandler,
    updateQuantity,
    removeFromCart,
    addToWishListHandler,
    deleteFromWishListHandler,
  } = useUser();

  const product = products?.find((item) => item.id === params.productId);

  const isInCart =
    user.isLoggedIn && user.cart.some((item) => item._id === product._id);

  const isInWishlist =
    user.isLoggedIn && user.wishlist.some((item) => item._id === product._id);

  const qtyInCart =
    user?.cart?.find((item) => item._id === product._id)?.qty ?? 0;

  useEffect(() => window.scrollTo(0, 0), [params.productId]);
  return (
    <main className="main">
      <div className="breadcrumbs p-md fs-s">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{" "}
        {product?.title.split(" ").join("-")}
      </div>
      <div className="product-page flex">
        <div className="product-page-left">
          <Slider className="product-page-slider" {...productImagesSlider}>
            {product?.images.map((image) => (
              <img
                className="product-images"
                src={image}
                alt={product?.title}
                key={image}
                onClick={() => setModalImage(image)}
              />
            ))}
          </Slider>
        </div>
        <div className="product-page-right px-md flex flex-col">
          <p className="product-id fs-s ubuntu">ProductID: {product?._id}</p>
          <div className="flex flex-col full-width">
            <h2 className="product-title h2 px-sm flex">
              {product?.title}
              <i className="pointer">
                {isInWishlist ? (
                  <BsFillHeartFill
                    size="2rem"
                    color="red"
                    className="mx-sm wishlist-icon"
                    onClick={() => deleteFromWishListHandler(product._id)}
                  />
                ) : (
                  <BsHeart
                    size="2rem"
                    className="mx-sm wishlist-icon"
                    onClick={() => addToWishListHandler(product)}
                  />
                )}
              </i>
            </h2>
            <p className="product-subtitle fs-m ubuntu px-sm">
              {product?.sub_title}
            </p>
          </div>
          <div className="product-description mx-sm fs-m">
            {product?.description}
          </div>
          <div className="flex flex-col mx-sm">
            <div className="my-xs flex product-rating">
              {[...Array(product?.rating)].map((_, i) => (
                <BsStarFill key={i} color="var(--secondary)" className="fs-s" />
              ))}
            </div>
            <h1 className="product-offer-price h1">
              ₹{product?.offer_price}
              <span className="product-original-price mx-xs fs-l">
                ₹{product?.price}
              </span>
            </h1>
          </div>
          <div className=" flex full-width product-add-to-cart">
            {isInCart && (
              <div className="product-qty flex">
                <button
                  className="btn-minus btn btn-icon fs-m flex flex-center"
                  onClick={() =>
                    qtyInCart === 1
                      ? removeFromCart(product._id)
                      : updateQuantity(product._id, "decrement")
                  }
                >
                  {qtyInCart === 1 ? (
                    <BsTrash color="var(--text-color)" />
                  ) : (
                    `-`
                  )}
                </button>
                <p className="flex flex-center btn btn-icon fs-m">
                  {qtyInCart}
                </p>
                <button
                  className="btn-plus btn btn-icon fs-m"
                  onClick={() => updateQuantity(product._id, "increment")}
                >
                  +{" "}
                </button>
              </div>
            )}
            <button
              className="full-width btn btn-primary full-width px-sm py-xs fs-l font-bebas"
              onClick={() => cartHandler(product)}
            >
              {isInCart ? "Go To Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      <section className="best-selling pos-rel">
        <Slider {...similarProductSlider}>
          {products
            .filter((item) => item.categoryName === product.categoryName)
            .map((product) => (
              <VerticalCard key={product._id} product={product} />
            ))}{" "}
        </Slider>
        <div className="pos-abs heading-overlay">
          <h1 className="heading">You may Also Like</h1>
        </div>
      </section>
      <section
        className={`product-image-modal pointer flex flex-center ${
          modalImage ? "show" : ""
        }`}
        onClick={() => setModalImage("")}
      >
        <img
          src={modalImage}
          alt={product?.title}
          onClick={(e) => e.stopPropagation()}
        />
        <i className="btn btn-icon icon pos-abs">
          <BsX size="7rem" />
        </i>
      </section>
      <OurServices />
    </main>
  );
};
