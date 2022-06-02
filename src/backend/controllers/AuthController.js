import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, email, password}
 * */

export const signupHandler = function (schema, request) {
  const { email, password, ...rest } = JSON.parse(request.requestBody);
  try {
    // check if email already exists
    const foundUser = schema.users.findBy({ email });
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ["Unprocessable Entity. Email Already Exists."],
        }
      );
    }
    const _id = uuid();
    const encryptedPassword = bcrypt.hashSync(password, 5);
    const newUser = {
      _id,
      email,
      password: encryptedPassword,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      ...rest,
      cart: [],
      wishlist: [],
      addresses: [],
      orders: [],
    };
    const createdUser = schema.users.create(newUser);
    const encodedToken = jwt.sign(
      { _id, email },
      process.env.REACT_APP_JWT_SECRET
    );
    return new Response(201, {}, { createdUser, encodedToken });
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
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {email, password}
 * */

export const loginHandler = function (schema, request) {
  const { email, password } = JSON.parse(request.requestBody);
  try {
    const { attrs: foundUser } = schema.users.findBy({ email });
    if (!foundUser) {
      return new Response(
        404,
        {},
        { errors: ["The email you entered is not Registered. Not Found error"] }
      );
    }
    if (bcrypt.compareSync(password, foundUser.password)) {
      const encodedToken = jwt.sign(
        { _id: foundUser._id, email },
        process.env.REACT_APP_JWT_SECRET
      );
      delete foundUser.password;
      return new Response(200, {}, { foundUser, encodedToken });
    }
    new Response(
      401,
      {},
      {
        errors: [
          "The credentials you entered are invalid. Unauthorized access error.",
        ],
      }
    );
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

export const getAuthUserHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        { errors: ["The email you entered is not Registered. Not Found error"] }
      );
    }

    const foundUser = this.db.users.findBy({ _id: userId });
    delete foundUser.password;
    return new Response(200, {}, { success: true, foundUser });
  } catch (error) {}
};

export const updateUserHandler = function (schema, request) {
  const { userDetails } = JSON.parse(request.requestBody);
  console.log("userDetails controller", userDetails);
  const userId = requiresAuth.call(this, request);
  console.log("userId", userId);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        { errors: ["The email you entered is not Registered. Not Found error"] }
      );
    }
    this.db.users.update({ _id: userId }, { ...userDetails });
    console.log("der");
    const updatedUser = this.db.users.findBy({ _id: userId });
    delete updatedUser.password;
    console.log("updatedUser", updatedUser);
    return new Response(200, {}, { updatedUser });
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

export const deleteUserHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        { errors: ["The email you entered is not Registered. Not Found error"] }
      );
    }
    this.db.users.remove({ _id: userId });

    return new Response(
      200,
      {},
      { statusMessage: "User Deleted Successfully" }
    );
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

export const resetUserHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        { errors: ["The email you entered is not Registered. Not Found error"] }
      );
    }
    this.db.users.update(
      { _id: userId },
      { cart: [], wishlist: [], addresses: [], orders: [] }
    );
    const updatedUser = this.db.users.findBy({ _id: userId });
    delete updatedUser.password;
    return new Response(200, {}, { updatedUser });
  } catch (error) {
    return new Response(500, {}, { error });
  }
};

export const forgotPasswordHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  const { newPassword } = JSON.parse(request.requestBody);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        { errors: ["The email you entered is not Registered. Not Found error"] }
      );
    }
    this.db.users.update(
      { _id: userId },
      { password: bcrypt.hashSync(newPassword, 5) }
    );
    return new Response(
      200,
      {},
      { updatedUser: this.db.users.findBy({ _id: userId }) }
    );
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
