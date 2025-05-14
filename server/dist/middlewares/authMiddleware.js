// src/middleware/protect.ts
import jwt from "jsonwebtoken";
export const protect = async (req, res, next) => {
    let token;
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
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // 👤 attach user to request
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
