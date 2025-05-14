// src/middleware/protect.ts
import jwt, { JwtPayload as DefaultJwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Extend the default payload
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
  const authHeader = req.headers.authorization;

  // Check if Bearer token exists
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(401).json({ message: "Unauthorized: Token missing" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as CustomJwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
