// src/middleware/protect.ts
import jwt, { JwtPayload as DefaultJwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Extended JWT Payload
interface CustomJwtPayload extends DefaultJwtPayload {
  id: number;
  email?: string;
  username?: string;
}

// Extend Express Request object
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
  let token: string | undefined;

  // ✅ 1. Check Authorization Header (Bearer token)
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }
  // ✅ 2. If not in header, check cookies
  else if (req.cookies?.token) {
    token = req.cookies.token;
  }

  // ❌ No token at all
  if (!token) {
    res.status(401).json({ message: "Unauthorized: Token missing" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as CustomJwtPayload;
    req.user = decoded; // 👤 attach user to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
