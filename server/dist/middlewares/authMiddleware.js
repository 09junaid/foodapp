// src/middleware/protect.ts
import jwt from "jsonwebtoken";
export const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    // Check if Bearer token exists
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(401).json({ message: "Unauthorized: Token missing" });
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
