const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");
const passport = require("passport"); // For JWT authentication
const isAdmin = require("../middleware/admin"); // For admin role check

/**
 * TODO:
 * Connect controller functions to routes
 */

// @route   POST /api/contacts
// @desc    Create a new contact message (Public)
// @access  Public
router.post("/", contactController.createContactMessage);

// @route   GET /api/contacts
// @desc    Get all contact messages (Admin only)
// @access  Private (Admin)
router.get(
  "/",
  passport.authenticate("jwt", { session: false }), // Protect route with JWT
  isAdmin, // Check if user is admin
  contactController.getAllContactMessages,
);

// @route   PUT /api/contacts/:id/read
// @desc    Mark a contact message as read (Admin only)
// @access  Private (Admin)
router.put(
  "/:id/read",
  passport.authenticate("jwt", { session: false }), // Protect route with JWT
  isAdmin, // Check if user is admin
  contactController.markMessageAsRead,
);

module.exports = router;
