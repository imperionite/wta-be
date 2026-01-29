const express = require("express");

const router = express.Router();

/**
 * TODO:
 * Connect controller functions to routes
 */

const bookingController = require("../controllers/booking.controller");

router.get("/:id", bookingController.getMyBookings);
router.get("/", bookingController.getAllBookings);

router.post("/", bookingController.createBooking);
router.delete("/:id", bookingController.cancelBooking);

module.exports = router;
