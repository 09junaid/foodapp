import prisma from "../config/db.js";
import { Prisma } from "@prisma/client";
// ✅ Create Order (Simplified)
export const createOrder = async (req, res) => {
    try {
        const { customer_name, phone_number, food_items, address, message, additional_note, order_date, quantity } = req.body;
        const user_id = req.user?.id;
        // Get the user ID from the logged-in user's JWT (set in middleware)
        console.log("Current logged-in user:", req.user?.email); // Debug log
        // Basic validation
        if (!customer_name || !phone_number || !food_items || !address || !message || !quantity || !order_date) {
            return res.status(400).json({ success: false, error: "Missing required fields" });
        }
        if (!user_id) {
            return res.status(401).json({ success: false, error: "Unauthorized: No user logged in" });
        }
        const order = await prisma.order.create({
            data: {
                user_id: user_id, // Use the user_id from the JWT token
                customer_name,
                phone_number,
                food_items,
                address,
                additional_note,
                order_date: new Date(order_date),
                quantity,
                message
            },
            include: {
                user: {
                    select: {
                        username: true,
                        email: true
                    }
                }
            }
        });
        return res.status(201).json({
            success: true,
            message: "Order created successfully",
            order
        });
    }
    catch (error) {
        console.error("Error creating order:", error);
        // Specific error handling for different types of errors (e.g., database issues)
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(400).json({ success: false, message: "Database error: " + error.message });
        }
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
// ✅ Get All Orders (Simplified)
export const getAllOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            include: {
                user: true
            },
            orderBy: {
                order_date: 'desc'
            }
        });
        return res.status(200).json({ success: true, orders });
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
// ✅ Get Order By ID (Simplified)
export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await prisma.order.findUnique({
            where: { id: Number(id) },
            include: {
                user: true
            }
        });
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        return res.status(200).json({ success: true, order });
    }
    catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ success: false, message: error });
    }
};
// ✅ Update Order By ID (Simplified)
export const updateOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const { customer_name, phone_number, food_items, address, message, additional_note, order_date, quantity } = req.body;
        // Check if order exists
        const existingOrder = await prisma.order.findUnique({
            where: { id: Number(id) }
        });
        if (!existingOrder) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        const updatedOrder = await prisma.order.update({
            where: { id: Number(id) },
            data: {
                customer_name: customer_name || existingOrder.customer_name,
                phone_number: phone_number || existingOrder.phone_number,
                food_items: food_items || existingOrder.food_items,
                address: address || existingOrder.address,
                additional_note: additional_note || existingOrder.additional_note,
                message: message || existingOrder.message,
                quantity: quantity || existingOrder.quantity,
                order_date: order_date || existingOrder.order_date
            },
            include: {
                user: true
            }
        });
        return res.status(200).json({
            success: true,
            message: "Order updated successfully",
            order: updatedOrder
        });
    }
    catch (error) {
        console.error("Error updating order:", error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(400).json({ success: false, message: "Database error", error: error.message });
        }
        res.status(500).json({ success: false, message: error });
    }
};
// ✅ Delete Order by Id (Simplified)
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteOrder = await prisma.order.delete({
            where: { id: Number(id) }
        });
        if (!deleteOrder) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        return res.status(200).json({ success: true, message: "Order deleted successfully" });
    }
    catch (error) {
        console.error("Error Deleting order:", error);
        res.status(500).json({ success: false, message: error });
    }
};
