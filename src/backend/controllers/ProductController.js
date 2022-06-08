import { PRODUCTS_PER_PAGE } from "helpers";
import { Response } from "miragejs";
import {
  categoryFilter,
  compose,
  priceFilter,
  productSearchFilter,
  ratingFilter,
  sort,
} from "utils";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllProductsHandler = function (schema, request) {
  const { page } = request.queryParams;
  return new Response(
    200,
    {},
    { products: this.db.products.slice(8 * (page - 1), page * 8) }
    // 8 products per page
  );
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getSimilarProducts = function (schema, request) {
  const { category } = request.queryParams;
  try {
    const similarproducts = schema.products.where({ categoryName: category });
    return new Response(200, {}, { products: similarproducts.models });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getProductHandler = function (schema, request) {
  const productId = request.params.productId;
  try {
    const product = schema.products.findBy({ id: productId });
    return new Response(200, {}, { product });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const getFilteredProducts = function (schema, request) {
  const { page } = request.queryParams;
  const { filters } = JSON.parse(request.requestBody);
  const allProducts = schema.products.all();
  const filteredProducts = compose(
    filters,
    sort,
    priceFilter,
    ratingFilter,
    categoryFilter,
    productSearchFilter
  )(allProducts.models);
  return new Response(
    200,
    {},
    {
      products: filteredProducts.slice(
        PRODUCTS_PER_PAGE * (page - 1),
        page * PRODUCTS_PER_PAGE
      ),
      size: filteredProducts.length,
    }
  );
};
