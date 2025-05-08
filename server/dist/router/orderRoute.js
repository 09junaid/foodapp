import express from "express";
import { createOrder, getAllOrders, getOrderById, updateOrderById, deleteOrder, } from "../controllers/orderControllers.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();
/**
 * @swagger
 * /api/v1/order/create-order:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - customer_name
 *               - address
 *               - items
 *             properties:
 *               user_id:
 *                 type: integer
 *                 example: 1
 *               customer_name:
 *                 type: string
 *                 example: Ali Khan
 *               message:
 *                 type: string
 *                 example: Please deliver fast
 *               address:
 *                 type: string
 *                 example: 123 Street, Lahore
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - item_id
 *                     - quantity
 *                   properties:
 *                     item_id:
 *                       type: integer
 *                       example: 1
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Bad request
 */
router.post("/create-order", protect, createOrder);
/**
 * @swagger
 * /api/v1/order/get-all:
 *   get:
 *     summary: Get all orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: List of all orders
 */
router.get("/get-all", getAllOrders);
/**
 * @swagger
 * /api/v1/order/get-order/{id}:
 *   get:
 *     summary: Get a specific order by ID
 *     tags: [Order]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Order found
 *       404:
 *         description: Order not found
 */
router.get("/get-order/:id", getOrderById);
/**
 * @swagger
 * /api/v1/order/update-order/{id}:
 *   put:
 *     summary: Update an existing order by ID
 *     tags: [Order]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_name:
 *                 type: string
 *                 example: Updated Name
 *               message:
 *                 type: string
 *                 example: Update message
 *               address:
 *                 type: string
 *                 example: New Address
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 */
router.put("/update-order/:id", updateOrderById);
/**
 * @swagger
 * /api/v1/order/delete-order/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Order]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 */
router.delete("/delete-order/:id", deleteOrder);
export default router;
