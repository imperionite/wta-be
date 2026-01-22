const mongoose = require("mongoose");

/**
 * TODO:
 * 1. Create Subscription schema
 * 2. Fields:
 *    - email: String, required, unique, lowercase, trim
 *    - status: String enum ["active", "unsubscribed"], default "active"
 * 3. Enable timestamps
 */

const subscriptionSchema = new mongoose.Schema(
  {
    // TODO: fields
  },
  { timestamps: true },
);

// TODO: Add toJSON transform to replace _id with id

module.exports = mongoose.model("Subscription", subscriptionSchema);
