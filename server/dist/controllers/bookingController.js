import prisma from "../config/db.js";
import { Prisma } from "@prisma/client";
// ✅ CREATE BOOKING
export const createBooking = async (req, res) => {
    try {
        const { booking_date, booking_time, seating_capacity } = req.body;
        const user_id = req.user?.id;
        console.log("Current logged-in user:", req.user?.email); // Debug
        // Basic Validation
        if (!booking_date || !booking_time || !seating_capacity) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }
        if (!user_id) {
            return res.status(401).json({ success: false, error: "Unauthorized: No user logged in" });
        }
        // Combine date and time into a valid DateTime object
        const bookingDateTime = new Date(`${booking_date}T${booking_time}`);
        if (isNaN(bookingDateTime.getTime())) {
            return res.status(400).json({ success: false, message: "Invalid date or time format" });
        }
        // Check for overlapping bookings
        const overlappingBooking = await prisma.booking.findFirst({
            where: {
                seating_capacity: parseInt(seating_capacity),
                booking_time: {
                    equals: bookingDateTime,
                },
            },
        });
        if (overlappingBooking) {
            return res.status(409).json({
                success: false,
                message: "Booking slot already taken for this capacity",
            });
        }
        // ✅ Create booking
        const booking = await prisma.booking.create({
            data: {
                user_id: user_id,
                booking_date: new Date(booking_date),
                booking_time: bookingDateTime,
                seating_capacity: parseInt(seating_capacity),
                status: 'confirmed',
            },
            include: {
                user: {
                    select: {
                        username: true,
                        email: true,
                    },
                },
            },
        });
        return res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking,
        });
    }
    catch (error) {
        console.error("Error creating booking:", error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(400).json({ message: "Database error: " + error.message });
        }
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(401).json({ message: "Unauthorized: " + error.message });
        }
        res.status(500).json({ success: false, message: error });
    }
};
// ✅ GET ALL BOOKINGS
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await prisma.booking.findMany({
            include: {
                user: true,
            },
            orderBy: {
                booking_date: 'asc',
            },
        });
        res.status(200).json({ bookings });
    }
    catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ success: false, message: error });
    }
};
// ✅ GET BOOKING BY ID
export const getBookingById = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await prisma.booking.findUnique({
            where: { id: parseInt(id) },
            include: {
                user: true,
            }
        });
        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }
        res.status(200).json({ success: true, booking });
    }
    catch (error) {
        console.error("Error fetching booking:", error);
        res.status(500).json({ success: false, message: error });
    }
};
// ✅ UPDATE BOOKING
export const updateBooking = async (req, res) => {
    const { id } = req.params;
    const { booking_date, booking_time, seating_capacity, status } = req.body;
    try {
        const booking = await prisma.booking.findUnique({
            where: { id: parseInt(id) }
        });
        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }
        // Check for overlapping bookings when updating
        if (booking_date || booking_time || seating_capacity) {
            const targetDate = booking_date || booking.booking_date;
            const targetTime = booking_time || booking.booking_time;
            const targetCapacity = seating_capacity || booking.seating_capacity;
            const overlappingBooking = await prisma.booking.findFirst({
                where: {
                    id: { not: parseInt(id) }, // Exclude current booking
                    seating_capacity: targetCapacity,
                    booking_date: new Date(targetDate),
                    booking_time: new Date(targetTime),
                },
            });
            if (overlappingBooking) {
                return res.status(409).json({
                    success: false,
                    message: "Another booking already exists for this time and capacity"
                });
            }
        }
        const updated = await prisma.booking.update({
            where: { id: parseInt(id) },
            data: {
                booking_date: booking_date ? new Date(booking_date) : booking.booking_date,
                booking_time: booking_time ? new Date(booking_time) : booking.booking_time,
                seating_capacity: seating_capacity ? parseInt(seating_capacity) : booking.seating_capacity,
                status: status || booking.status,
            },
            include: {
                user: true,
            }
        });
        res.status(200).json({
            success: true,
            message: "Booking updated successfully",
            booking: updated
        });
    }
    catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ success: false, message: error });
    }
};
// ✅ DELETE BOOKING
export const deleteBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await prisma.booking.findUnique({
            where: { id: parseInt(id) }
        });
        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }
        await prisma.booking.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).json({ success: true, message: "Booking deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting booking:", error);
        res.status(500).json({ success: false, message: error });
    }
};
