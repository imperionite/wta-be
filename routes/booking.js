const express = require("express");
const passport = require("passport");
const {
  createBooking,
  getMyBookings,
  getAllBookings,
  cancelBooking,
} = require("../controllers/booking.controller");

const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createBooking,
);

router.get(
  "/my",
  passport.authenticate("jwt", { session: false }),
  getMyBookings,
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllBookings,
);

router.patch(
  "/:id/cancel",
  passport.authenticate("jwt", { session: false }),
  cancelBooking,
);

module.exports = router;
