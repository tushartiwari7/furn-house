import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's address.
 * send GET Request at /api/user/address
 * */

export const getOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrders = schema.users.findBy({ _id: userId }).orders;
  return new Response(200, {}, { orders: userOrders });
};

/**
 * This handler handles adding items to user's address list.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addItemToOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const orders = schema.users.findBy({ _id: userId }).orders;
    const { ordersToAdd, paymentStatus, paymentId, address } = JSON.parse(
      request.requestBody
    );
    orders.unshift(
      ...ordersToAdd.map((order) => ({
        ...order,
        paymentStatus,
        paymentId,
        address,
        createdAt: formatDate(),
        updatedAt: formatDate(),
      }))
    );

    this.db.users.update({ _id: userId }, { orders, cart: [] });
    return new Response(201, {}, { orders });
  } catch (error) {
    return new Response(500, {}, { error });
  }
};
