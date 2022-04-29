import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";
/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles adding address.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addAddressHandler = function (schema, request) {
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
    const addresses = schema.users.findBy({ _id: userId }).addresses;
    const { address } = JSON.parse(request.requestBody);
    addresses.unshift({
      ...address,
      _id: uuid(),
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { addresses });
    return new Response(201, {}, { addresses });
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
 * This handler handles removing user's	address.
 * send DELETE Request at /api/user/address/:addressId
 * */

export const removeAddressHandler = function (schema, request) {
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
    let addresses = schema.users.findBy({ _id: userId }).addresses;
    const addressId = request.params.addressId;
    addresses = addresses.filter((address) => address._id !== addressId);
    this.db.users.update({ _id: userId }, { addresses });
    return new Response(200, {}, { addresses });
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
 * This handler handles changing user's address.
 * send POST Request at /api/user/address/:addressId
 * body contains {address} (whose 'type' can be increment or decrement)
 * */

export const updateAddressHandler = function (schema, request) {
  const addressId = request.params.addressId;
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
    const addresses = schema.users.findBy({ _id: userId }).addresses;
    const { address } = JSON.parse(request.requestBody);

    const updatedAddressList = addresses.map((addr) =>
      addr._id === addressId
        ? { ...addr, ...address, updatedAt: formatDate() }
        : addr
    );

    this.db.users.update({ _id: userId }, { addresses: updatedAddressList });
    return new Response(200, {}, { addresses: updatedAddressList });
  } catch (error) {
    return new Response(500, {}, { error });
  }
};
