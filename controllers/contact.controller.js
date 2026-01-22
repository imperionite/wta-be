const ContactMessage = require("../models/Contact");

/**
 * Notes:
 * - Validate all fields if necessary
 * - Implementing Authentication and RBAC not yet required
 * - Respond with proper status codes and JSON
 * - Provide meaningful comments (not heavy formatted) to your code
 */

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
 * - Fetch all contact messages
 * - Sort by newest first
 */
exports.getAllContactMessages = async (req, res) => {
  try {
    // TODO: fetch messages
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: markMessageAsRead
 * --------------------------------
 * - Mark a contact message as "read"
 * - Message ID comes from req.params.id
 */
exports.markMessageAsRead = async (req, res) => {
  try {
    // TODO: update message status
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
