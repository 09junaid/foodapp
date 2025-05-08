// import express from 'express';
// import {
//   createTable,
//   getAllTables,
//   getTableById,
//   updateTable,
//   deleteTable
// } from '../controllers/tableControllers.js';

// const router = express.Router();

// /**
//  * @swagger
//  * /api/v1/table/create-table:
//  *   post:
//  *     summary: Create a new table
//  *     tags: [Table]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - table_number
//  *               - seating_capacity
//  *             properties:
//  *               table_number:
//  *                 type: integer
//  *                 example: 5
//  *               seating_capacity:
//  *                 type: integer
//  *                 example: 4
//  *     responses:
//  *       201:
//  *         description: Table created successfully
//  *       400:
//  *         description: Bad request or duplicate table number
//  */
// router.post("/create-table", createTable);

// /**
//  * @swagger
//  * /api/v1/table/gettable:
//  *   get:
//  *     summary: Get all tables
//  *     tags: [Table]
//  *     responses:
//  *       200:
//  *         description: List of all tables
//  */
// router.get("/gettable", getAllTables);

// /**
//  * @swagger
//  * /api/v1/table/get-table-by/{id}:
//  *   get:
//  *     summary: Get table by ID
//  *     tags: [Table]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *           example: 1
//  *     responses:
//  *       200:
//  *         description: Table found
//  *       404:
//  *         description: Table not found
//  */
// router.get("/get-table-by/:id", getTableById);

// /**
//  * @swagger
//  * /api/v1/table/update-table/{id}:
//  *   put:
//  *     summary: Update a table by ID
//  *     tags: [Table]
//  *     parameters:
//  *       - in: path
//  *         name: id
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
//  *               table_number:
//  *                 type: integer
//  *                 example: 10
//  *               seating_capacity:
//  *                 type: integer
//  *                 example: 6
//  *     responses:
//  *       200:
//  *         description: Table updated successfully
//  *       404:
//  *         description: Table not found
//  */
// router.put("/update-table/:id", updateTable);

// /**
//  * @swagger
//  * /api/v1/table/delete-table/{id}:
//  *   delete:
//  *     summary: Delete a table by ID
//  *     tags: [Table]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *           example: 1
//  *     responses:
//  *       200:
//  *         description: Table deleted successfully
//  *       404:
//  *         description: Table not found
//  */
// router.delete("/delete-table/:id", deleteTable);

// export default router;
