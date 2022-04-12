import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts, useUser } from "../../context";
import "./ProductPage.css";
import {
  BsHeart,
  BsBag,
  BsTrash,
  BsFillHeartFill,
  BsStarFill,
  BsX,
} from "react-icons/bs";
import {
  addToCart,
  addToWishList,
  deleteCartItem,
  deleteFromWishList,
  updateCartQty,
} from "../../services";
import toast from "react-hot-toast";
import Slider from "react-slick";
import { OurServices, VerticalCard } from "../../components";

export const ProductPage = () => {
  const params = useParams();
  const { products, setIsLoading } = useProducts();
  const product = products?.find((item) => item.id === params.productId);
  const { user, setUser } = useUser();
  const [modalImage, setModalImage] = useState("");

  const isInCart =
    user.isLoggedIn && user.cart.some((item) => item._id === product._id);

  const isInWishlist =
    user.isLoggedIn && user.wishlist.some((item) => item._id === product._id);
  const navigator = useNavigate();

  const qtyInCart =
    user?.cart?.find((item) => item._id === product._id)?.qty ?? 0;

  const cartHandler = async () => {
    if (!user.isLoggedIn) {
      toast("Please Login to add items to cart", { icon: <BsBag /> });
      return navigator("/login");
    }
    if (isInCart) {
      return navigator("/cart");
    }
    setIsLoading(true);
    const { cart } = await addToCart(product);
    toast.success("Item added to Cart");
    setUser((user) => ({ ...user, cart }));
    setIsLoading(false);
  };

  const updateQuantity = async (type) => {
    setIsLoading(true);
    const { cart } = await updateCartQty(product._id, type === "increment");
    toast.success(
      type === "increment"
        ? "Added 1 more item to Cart"
        : "Removed 1 item from Cart"
    );
    setUser((user) => ({ ...user, cart }));
    setIsLoading(false);
  };

  const removeFromCart = async () => {
    setIsLoading(true);
    const { cart } = await deleteCartItem(product._id);
    toast.success("Item removed from Cart");
    setUser((user) => ({ ...user, cart }));
    setIsLoading(false);
  };

  const addToWishListHandler = async () => {
    if (!user.isLoggedIn) {
      toast("Please Login to add items to Wishlist", {
        icon: <BsFillHeartFill color="red" />,
      });
      return navigator("/login");
    }
    setIsLoading(true);
    const { wishlist } = await addToWishList(product);
    toast.success("Item added to Wishlist");
    setUser((user) => ({ ...user, wishlist }));
    setIsLoading(false);
  };

  const deleteFromWishListHandler = async () => {
    setIsLoading(true);
    const { wishlist } = await deleteFromWishList(product._id);
    toast.success("Item removed from Wishlist");
    setUser((user) => ({ ...user, wishlist }));
    setIsLoading(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1055,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const similarProductSlider = {
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
        breakpoint: 748,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="main">
      <div className="breadcrumbs p-md fs-s">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{" "}
        {product?.title.split(" ").join("-")}
      </div>
      <div className="product-page flex">
        <div className="product-page-left">
          <Slider className="product-page-slider" {...settings}>
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
                    onClick={deleteFromWishListHandler}
                  />
                ) : (
                  <BsHeart
                    size="2rem"
                    className="mx-sm wishlist-icon"
                    onClick={addToWishListHandler}
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
                      ? removeFromCart()
                      : updateQuantity("decrement")
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
                  onClick={() => updateQuantity("increment")}
                >
                  +{" "}
                </button>
              </div>
            )}
            <button
              className="full-width btn btn-primary full-width px-sm py-xs fs-l font-bebas"
              onClick={cartHandler}
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
