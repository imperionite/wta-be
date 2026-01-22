const ContactMessage = require("../models/Contact");

/**
 * TODO: createContactMessage
 * --------------------------------
 * PUBLIC
 * - Accept name, email, subject, message from req.body
 * - Validate required fields
 * - Save message to database
 * - Simulate email sending using console.log
 * - Return success response
 */
exports.createContactMessage = async (req, res) => {
  try {
    // TODO: implementation
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: getAllContactMessages
 * --------------------------------
 * ADMIN ONLY
 * - Only allow users with role === "admin"
 * - Fetch all contact messages
 * - Sort by newest first
 */
exports.getAllContactMessages = async (req, res) => {
  try {
    // TODO: RBAC check
    // TODO: fetch messages
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: markMessageAsRead
 * --------------------------------
 * ADMIN ONLY
 * - Mark a contact message as "read"
 * - Message ID comes from req.params.id
 */
exports.markMessageAsRead = async (req, res) => {
  try {
    // TODO: RBAC check
    // TODO: update message status
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
