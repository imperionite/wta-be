const Booking = require("../models/Booking");

/**
 * TODO: createBooking
 * --------------------------------
 * USER ONLY
 * - User must be authenticated
 * - Validate dates
 * - Save booking
 */
exports.createBooking = async (req, res) => {
  try {
    // TODO
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: getMyBookings
 * --------------------------------
 * USER ONLY
 * - Fetch bookings for logged-in user
 */
exports.getMyBookings = async (req, res) => {
  try {
    // TODO
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: getAllBookings
 * --------------------------------
 * ADMIN ONLY
 */
exports.getAllBookings = async (req, res) => {
  try {
    // TODO: RBAC
    // TODO: fetch
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: cancelBooking
 * --------------------------------
 * USER or ADMIN
 * - User can cancel own booking
 * - Admin can cancel any booking
 */
exports.cancelBooking = async (req, res) => {
  try {
    // TODO
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Notes:
 * - Validate required fields
 * - Ensure user & room references are correct
 * - Apply role-based access control (RBAC)
 * - Respond with proper status codes and JSON
 
 */
