const express = require("express");
const passport = require("passport");
const {
  subscribe,
  unsubscribe,
  getAllSubscriptions,
  sendNewsletter,
} = require("../controllers/subscription.controller");

const router = express.Router();

/**
 * POST /api/subscriptions
 * - Public
 */
router.post("/", subscribe);

/**
 * DELETE /api/subscriptions
 * - Public
 */
router.delete("/", unsubscribe);

/**
 * GET /api/subscriptions
 * - Admin only
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllSubscriptions,
);

/**
 * POST /api/subscriptions/send
 * - Admin only
 */
router.post(
  "/send",
  passport.authenticate("jwt", { session: false }),
  sendNewsletter,
);

module.exports = router;
