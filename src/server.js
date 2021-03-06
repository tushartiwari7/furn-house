import { Server, Model, RestSerializer } from "miragejs";
import { v4 as uuid } from "uuid";
import {
  loginHandler,
  signupHandler,
  updateUserHandler,
  deleteUserHandler,
  resetUserHandler,
  forgotPasswordHandler,
  getAuthUserHandler,
} from "./backend/controllers/AuthController";
import {
  addItemToCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
} from "./backend/controllers/CartController";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
  getAllProductsHandler,
  getFilteredProducts,
  getProductHandler,
  getSimilarProducts,
} from "./backend/controllers/ProductController";
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";
import {
  addAddressHandler,
  removeAddressHandler,
  updateAddressHandler,
} from "./backend/controllers/AddressController";
import {
  getOrdersHandler,
  addItemToOrdersHandler,
} from "./backend/controllers/OrderController";

import { categories } from "./backend/db/categories";
import { products } from "./backend/db/products";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
      addresses: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          cart: [],
          wishlist: [],
          addresses: [
            {
              _id: uuid(),
              street: "Beach N Brew, SCO 8, 1st Floor, Udyan Path, Sector 16 D",
              city: "Chandigarh - U.T",
              state: "Punjab",
              landmark: "Zakir Khan Rose Garden",
              pincode: "160015",
            },
          ],
          orders: [],
        })
      );

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));
      this.get("/auth", getAuthUserHandler.bind(this));
      this.post("/auth/update", updateUserHandler.bind(this));
      this.post("/auth/reset", resetUserHandler.bind(this));
      this.put("/auth/forgot", forgotPasswordHandler.bind(this));
      this.delete("/auth/deactivate", deleteUserHandler.bind(this));

      // products routes (public)
      this.get("/products", getAllProductsHandler.bind(this));
      this.put("/products", getFilteredProducts.bind(this));
      this.get("/similarproducts", getSimilarProducts.bind(this));
      this.get("/products/:productId", getProductHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));

      // cart routes (private)
      this.get("/user/cart", getCartItemsHandler.bind(this));
      this.post("/user/cart", addItemToCartHandler.bind(this));
      this.put("/user/cart/:productId", updateCartItemHandler.bind(this));
      this.delete(
        "/user/cart/:productId",
        removeItemFromCartHandler.bind(this)
      );

      // wishlist routes (private)
      this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
      this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
      this.delete(
        "/user/wishlist/:productId",
        removeItemFromWishlistHandler.bind(this)
      );

      // addresses routes (private)
      this.post("/user/addresses", addAddressHandler.bind(this));
      this.delete(
        "/user/addresses/:addressId",
        removeAddressHandler.bind(this)
      );
      this.post("/user/addresses/:addressId", updateAddressHandler.bind(this));

      // orders routes (private)
      this.get("/user/orders", getOrdersHandler.bind(this));
      this.post("/user/orders", addItemToOrdersHandler.bind(this));

      this.passthrough((request) => {
        return request.url.includes("razorpay");
      });
    },
  });
}
