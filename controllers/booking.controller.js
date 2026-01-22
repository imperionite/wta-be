const Booking = require("../models/Booking");

/**
 * Notes:
 * - Validate all fields if necessary
 * - Implementing Authentication and RBAC not yet required
 * - Respond with proper status codes and JSON
 * - Provide meaningful comments (not heavy formatted) to your code
 */

/**
 * TODO: createBooking
 * --------------------------------
 *
 * - Validate request body
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
 *
 * - Fetch booking by user ID
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
 *
 */
exports.getAllBookings = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: cancelBooking
 * --------------------------------
 * - Delete booking by ID
 */
exports.cancelBooking = async (req, res) => {
  try {
    // TODO
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
