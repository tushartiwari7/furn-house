import { Response } from "miragejs";

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
