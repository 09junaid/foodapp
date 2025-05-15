import bcrypt from 'bcrypt';
import prisma from '../config/db.js';
import jwt from 'jsonwebtoken';
//@ signup
export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Input validation
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }
        // Check if user exists
        const userExists = await prisma.user.findUnique({ where: { email } });
        if (userExists) {
            return res.status(409).json({ success: false, error: "User already exists" });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create user
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: user,
        });
    }
    catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ success: false, error: error });
    }
};
//@ Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            username: user.username
        }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict"
        });
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user.id,
                email: user.email,
                username: user.username
            },
            token
        });
    }
    catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ error: error });
    }
};
export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ success: true, message: "Logout successful" });
    }
    catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ success: false, error: error });
    }
};
// @ get me
export const getMe = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, user });
    }
    catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({ success: false, message: error });
    }
};
