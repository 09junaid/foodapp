import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrder,
} from "../controllers/orderControllers.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/create-order",protect, createOrder);
router.get("/get-all",protect, getAllOrders);
router.get("/get-order/:id",protect, getOrderById);
router.put("/update-order/:id",protect, updateOrderById);
router.delete("/delete-order/:id",protect, deleteOrder);

export default router;
