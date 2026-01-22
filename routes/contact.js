const express = require("express");
const passport = require("passport");
const {
  createContactMessage,
  getAllContactMessages,
  markMessageAsRead,
} = require("../controllers/contact.controller");

const router = express.Router();

/**
 * TODO:
 * POST   /api/contact
 * - Public route
 * - Calls createContactMessage
 */
router.post("/", createContactMessage);

/**
 * TODO:
 * GET /api/contact
 * - Admin only
 * - JWT protected
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllContactMessages,
);

/**
 * TODO:
 * PATCH /api/contact/:id/read
 * - Admin only
 * - JWT protected
 */
router.patch(
  "/:id/read",
  passport.authenticate("jwt", { session: false }),
  markMessageAsRead,
);

module.exports = router;
