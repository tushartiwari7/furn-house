import { Response } from "miragejs";
const jwt = require("jsonwebtoken");
import dayjs from "dayjs";

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.Authorization.split(" ")[1];
  const decodedToken = jwt.verify(encodedToken, "secret");
  if (decodedToken) {
    const user = this.db.users.findBy({ email: decodedToken.email });
    if (user) {
      return user._id;
    }
  }

  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
