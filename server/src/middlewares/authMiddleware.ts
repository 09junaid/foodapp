// src/middleware/protect.ts

import jwt, { JwtPayload as DefaultJwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Custom payload interface (you can extend this as needed)
interface CustomJwtPayload extends DefaultJwtPayload {
  id: number;
  email?: string;
  username?:string
}

// Extend Express.Request to include `user`
declare global {
  namespace Express {
    interface Request {
      user?: CustomJwtPayload;
    }
  }
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.cookies?.token;

  if (!token) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as CustomJwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
