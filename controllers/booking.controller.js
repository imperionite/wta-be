const Booking = require("../models/Booking");
const User = require("../models/User");

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

        let {
      firstName,
      lastName,
      phone,
      email,
      checkInDate,
      checkOutDate,
      adults,
      children,
      suiteType,
      boardType,
      room,
    } = req.body;

    // Trim white spaces
    firstName = firstName?.trim();
    lastName = lastName?.trim();
    phone = phone?.trim();
    email = email?.trim();

    // Check required fields
    if (!firstName || !lastName || !phone || !email || !checkInDate || !checkOutDate || !room) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // Validate names (Alphabetic only)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      return res.status(400).json({ message: "Names must contain only letters and spaces." });
    }

    // Validate email format
    const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Validate phone number format
    const phoneRegex = /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number format." });
    }

    // Validate date order
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(startDate) || isNaN(endDate)) {
      return res.status(400).json({ message: "Invalid date format." });
    }
    if (startDate < today) {
      return res.status(400).json({ message: "Check-in date cannot be in the past." });
    }
    if (startDate >= endDate) {
      return res.status(400).json({ message: "Check-out date must be after check-in date." });
    }

    // Validate adults and children
    if (parseInt(adults) < 1) {
      return res.status(400).json({ message: "At least one adult is required." });
    }
    if (parseInt(children) < 0) {
      return res.status(400).json({ message: "Children cannot be negative." });
    }

    // Check for existing bookings that overlap
    const existingBooking = await Booking.findOne({
      room: room,
      $or: [
        {
          checkInDate: { $lt: endDate },
          checkOutDate: { $gt: startDate },
        },
      ],
    });

    if (existingBooking) {
      return res.status(409).json({
        message: "Room is already booked for the selected dates.",
      });
    }

    const newBooking = await Booking.create({
      firstName,
      lastName,
      phone,
      email,
      checkInDate,
      checkOutDate,
      adults,
      children,
      suiteType,
      boardType,
      room,
    });

    await newBooking.populate("room");
    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });

  } catch (error) {

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: "Validation Error", errors: messages });
    }
    
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

/**
 * TODO: getMyBookings
 * --------------------------------
 *
 * - Fetch booking by user ID
 * -
 */
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate("room");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * TODO: getAllBookings
 * --------------------------------
 *
 */
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("room");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * TODO: cancelBooking
 * --------------------------------
 * - Delete booking by ID
 */
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
