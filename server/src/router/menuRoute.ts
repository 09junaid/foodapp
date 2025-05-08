// import express from "express";
// import {
//   createMenuItem,
//   getAllMenuItems,
//   getMenuItemById,
//   updateMenuItemById,
//   deleteMenuItemById,
//   deleteAllMenuItems
// } from "../controllers/menuControllers.js";

// const router = express.Router();

// /**
//  * @swagger
//  * /api/v1/menu/create-menu:
//  *   post:
//  *     summary: Create a new menu item
//  *     tags: [Menu]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - item_name
//  *               - price
//  *             properties:
//  *               item_name:
//  *                 type: string
//  *                 example: Chicken Biryani
//  *               description:
//  *                 type: string
//  *                 example: Spicy rice dish with chicken
//  *               price:
//  *                 type: number
//  *                 example: 450.0
//  *     responses:
//  *       201:
//  *         description: Menu item created successfully
//  *       400:
//  *         description: Bad request
//  */
// router.post("/create-menu", createMenuItem);

// /**
//  * @swagger
//  * /api/v1/menu/getAll-menu:
//  *   get:
//  *     summary: Get all menu items
//  *     tags: [Menu]
//  *     responses:
//  *       200:
//  *         description: List of all menu items
//  */
// router.get("/getAll-menu", getAllMenuItems);

// /**
//  * @swagger
//  * /api/v1/menu/get-menu-item/{id}:
//  *   get:
//  *     summary: Get a single menu item by ID
//  *     tags: [Menu]
//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         required: true
//  *         schema:
//  *           type: integer
//  *           example: 1
//  *     responses:
//  *       200:
//  *         description: Menu item found
//  *       404:
//  *         description: Menu item not found
//  */
// router.get("/get-menu-item/:id", getMenuItemById);

// /**
//  * @swagger
//  * /api/v1/menu/update/{id}:
//  *   put:
//  *     summary: Update a menu item by ID
//  *     tags: [Menu]
//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         required: true
//  *         schema:
//  *           type: integer
//  *           example: 1
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               item_name:
//  *                 type: string
//  *                 example: Updated Biryani
//  *               description:
//  *                 type: string
//  *                 example: New recipe
//  *               price:
//  *                 type: number
//  *                 example: 500.0
//  *     responses:
//  *       200:
//  *         description: Menu item updated successfully
//  *       404:
//  *         description: Menu item not found
//  */
// router.put("/update/:id", updateMenuItemById);

// /**
//  * @swagger
//  * /api/v1/menu/delete/{id}:
//  *   delete:
//  *     summary: Delete a menu item by ID
//  *     tags: [Menu]
//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         required: true
//  *         schema:
//  *           type: integer
//  *           example: 1
//  *     responses:
//  *       200:
//  *         description: Menu item deleted successfully
//  *       404:
//  *         description: Menu item not found or in use
//  */
// router.delete("/delete/:id", deleteMenuItemById);

// /**
//  * @swagger
//  * /api/v1/menu/deleteAll:
//  *   delete:
//  *     summary: Delete all menu items
//  *     tags: [Menu]
//  *     responses:
//  *       200:
//  *         description: All menu items deleted successfully
//  */
// router.delete("/deleteAll", deleteAllMenuItems);

// export default router;
