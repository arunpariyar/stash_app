import { Request, Response, NextFunction } from 'express';
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import CONFIG from '../config/config';
import prisma from '../config/db';
import { JWTPayload } from '../interface/types';
import utility from '../utilities/utility';

const asyncJwtVerify = (token: string, secret: string) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

export const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string;
  // 1. Get the token if its there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        error: true,
        message: 'Token not found ! Please login to get access',
      });
    }

    // 2. Verification of the token

    try {
      const decoded = await asyncJwtVerify(token, CONFIG.JWT_SECRET);

      const { id, iat } = decoded as JWTPayload;
      // 3. Check if user still exits
      const freshUser = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });

      if (!freshUser) {
        return res.status(401).json({
          error: true,
          message: 'The user belonging to the token no longer exits',
        });
      }

      const passwordChangedAt = new Date(
        String(freshUser.passwordChangedAt)
      ).getTime();
      // 4. Check if user changed password after the JWT was issued
      const wasChanged = utility.changedPasswordAfter(iat, passwordChangedAt);

      console.log(wasChanged);
      if (wasChanged) {
        return res.status(401).json({
          error: true,
          message: 'User recently changes password',
        });
      }
    } catch (error) {
      return res.status(401).json({
        error: true,
        message: error,
      });
    }

    // finally call next
  } else {
    return res.status(401).json({
      error: true,
      message: 'Token not found ! Please login to get access',
    });
  }

  next();
};
