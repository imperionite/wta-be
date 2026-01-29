const express = require("express");

const router = express.Router();

const subscriptionController = require("../controllers/subscription.controller");
/**
 * TODO:
 * Connect controller functions to routes
 */

// POST: Used for creating a new subscription
router.post("/subscribe", subscriptionController.subscribe);

// PATCH: Used for updating the status to "unsubscribed"
router.patch("/unsubscribe", subscriptionController.unsubscribe);

// GET: Used to fetch all subscription records
router.get("/", subscriptionController.getAllSubscriptions);

// POST: Used to trigger the newsletter simulation
router.post("/send-newsletter", subscriptionController.sendNewsletter);
module.exports = router;
