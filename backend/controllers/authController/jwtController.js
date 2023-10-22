import { promisify } from "util";

import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyToken = (token) =>
  promisify(jwt.verify)(token, process.env.JWT_SECRET);

export const signToken = (id) => {
  const secret = process.env.JWT_SECRET;
  const jwtExpiresIn = `${process.env.JWT_EXPIRES_IN}d`;

  const token = jwt.sign({ id }, secret, {
    expiresIn: jwtExpiresIn,
  });

  return token;
};

export const signSendToken = (res, user) => {
  const token = signToken(user._id);
  const cookieExpiresIn = new Date(
    Date.now() + process.env.JWT_EXPIRES_IN * 86400000
  );

  const jwtCookieOptions = {
    expires: cookieExpiresIn,
    httpOnly: true,
  };

  res.cookie("jwt", token, jwtCookieOptions);
};
