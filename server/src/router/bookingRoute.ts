import express from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} from '../controllers/bookingController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/booking/create-booking:
 *   post:
 *     summary: Create a new table booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - booking_date
 *               - table_number
 *               - status
 *               - booking_start_time
 *               - booking_end_time
 *               - user_id
 *               - table_id
 *             properties:
 *               booking_date:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-05-07T12:00:00.000Z
 *               table_number:
 *                 type: integer
 *                 example: 3
 *               status:
 *                 type: string
 *                 example: confirmed
 *               booking_start_time:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-05-07T12:30:00.000Z
 *               booking_end_time:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-05-07T14:00:00.000Z
 *               user_id:
 *                 type: integer
 *                 example: 1
 *               table_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Invalid input data
 */
router.post("/create-booking",protect, createBooking);

/**
 * @swagger
 * /api/v1/booking/get-all-booking:
 *   get:
 *     summary: Get all bookings
 *     tags: [Booking]
 *     responses:
 *       200:
 *         description: List of all bookings
 */
router.get("/get-all-booking", getAllBookings);

/**
 * @swagger
 * /api/v1/booking/get-booking-by/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Booking found
 *       404:
 *         description: Booking not found
 */
router.get("/get-booking-by/:id", getBookingById);

/**
 * @swagger
 * /api/v1/booking/update-booking/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               status:
 *                 type: string
 *                 example: cancelled
 *               table_number:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       404:
 *         description: Booking not found
 */
router.put("/update-booking/:id", updateBooking);

/**
 * @swagger
 * /api/v1/booking/delete-booking/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 */
router.delete("/delete-booking/:id", deleteBooking);

export default router;



// export const updateData = async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { id } = req.params;
//     const { table_id, booking_start_time, booking_end_time, status } = req.body;

//     // Check if booking exists
//     const existingBooking = await prisma.booking.findUnique({
//       where: { id: Number(id) }
//     });

//     if (!existingBooking) {
//       return res.status(404).json({ success: false, message: "Booking not found" });
//     }

//     // Check if table exists if table_id is being updated
//     if (table_id && table_id !== existingBooking.table_id) {
//       const tableExists = await prisma.table.findUnique({
//         where: { id: table_id }
//       });
//       if (!tableExists) {
//         return res.status(404).json({ message: "Table not found" });
//       }
//     }

//     // Check for booking conflicts if time or table is being updated
//     if (booking_start_time || booking_end_time || table_id) {
//       const startTime = booking_start_time ? new Date(booking_start_time) : existingBooking.booking_start_time;
//       const endTime = booking_end_time ? new Date(booking_end_time) : existingBooking.booking_end_time;
//       const tableId = table_id || existingBooking.table_id;

//       const conflictingBooking = await prisma.booking.findFirst({
//         where: {
//           table_id: tableId,
//           NOT: {
//             id: Number(id)
//           },
//           OR: [
//             {
//               booking_start_time: {
//                 lte: endTime,
//               },
//               booking_end_time: {
//                 gte: startTime,
//               },
//             },
//           ],
//         },
//       });

//       if (conflictingBooking) {
//         return res.status(409).json({ 
//           message: "Table is already booked for the selected time",
//           conflictingBooking
//         });
//       }
//     }

//     // Get table data if table is being updated
//     let tableData = null;
//     if (table_id) {
//       tableData = await prisma.table.findUnique({
//         where: { id: table_id }
//       });
//     }

//     // Update the booking
//     const updatedBooking = await prisma.booking.update({
//       where: { id: Number(id) },
//       data: {
//         table_id: table_id || existingBooking.table_id,
//         table_number: tableData?.table_number || existingBooking.table_number,
//         booking_start_time: booking_start_time ? new Date(booking_start_time) : existingBooking.booking_start_time,
//         booking_end_time: booking_end_time ? new Date(booking_end_time) : existingBooking.booking_end_time,
//         status: status || existingBooking.status
//       },
//       include: {
//         user: true,
//         table: true
//       }
//     });

//     return res.status(200).json({ 
//       success: true, 
//       message: "Booking updated successfully", 
//       booking: updatedBooking 
//     });

//   } catch (error) {
//     console.error("Error updating booking:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// }