import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import prisma from '../config/db.js'; // No `.js` if using TypeScript
export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Check if user already exists
        const userExists = await prisma.user.findUnique({
            where: { email }
        });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create user
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });
        return res.status(201).json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
