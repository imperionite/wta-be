const bookingService = require("../services/bookingService");
const Room = require("../models/Room");
const Booking = require("../models/Booking");

/**
 * Create new booking (User authenticated via JWT)
 * Expects: firstName, lastName, phone, email, dates, adults, room, boardType
 */
exports.createBooking = async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body, req.user._id);
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Get current user's bookings (User authenticated)
 */
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getUserBookings(req.user._id);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get all bookings (Admin only)
 */
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate(["room", "user"]);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Update own booking (User) or any booking (Admin)
 */
exports.updateBooking = async (req, res) => {
  try {
    const booking = await bookingService.updateBooking(req.params.id, req.body);
    res.json({ message: "Booking updated", booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Delete own booking (User) or any booking (Admin)
 */
exports.cancelBooking = async (req, res) => {
  try {
    // 1. Change findById to findByIdAndDelete
    const booking = await Booking.findByIdAndDelete(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // 2. Send a success message
    res.status(200).json({ message: "Booking deleted permanently" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
