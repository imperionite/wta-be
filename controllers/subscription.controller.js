const Subscription = require("../models/Subscription");

/**
 * Notes:
 * - Validate all fields if necessary
 * - Implementing Authentication and RBAC not yet required
 * - Respond with proper status codes and JSON
 * - Provide meaningful comments (not heavy formatted) to your code
 */

/**
 * TODO: subscribe
 * --------------------------------
 * PUBLIC
 * - Accept email
 * - Prevent duplicate subscriptions
 * - Save as active
 */
exports.subscribe = async (req, res) => {
  try {
    // TODO
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: unsubscribe
 * --------------------------------
 * PUBLIC
 * - Change status to "unsubscribed"
 * - Do NOT delete record
 */
exports.unsubscribe = async (req, res) => {
  try {
    // TODO
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: getAllSubscriptions
 * --------------------------------
 * - Fetch all subscriptions
 */
exports.getAllSubscriptions = async (req, res) => {
  try {
    // TODO: fetch
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: sendNewsletter
 * --------------------------------
 * - Simulate sending newsletter
 * - console.log number of recipients
 */
exports.sendNewsletter = async (req, res) => {
  try {
    // TODO: simulate sending
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
