const Subscription = require("../models/Subscription");

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
 * ADMIN ONLY
 * - Fetch all subscriptions
 */
exports.getAllSubscriptions = async (req, res) => {
  try {
    // TODO: RBAC
    // TODO: fetch
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: sendNewsletter
 * --------------------------------
 * ADMIN ONLY
 * - Simulate sending newsletter
 * - console.log number of recipients
 */
exports.sendNewsletter = async (req, res) => {
  try {
    // TODO: RBAC
    // TODO: simulate sending
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
