const mongoose = require("mongoose");

/**
 * TODO:
 * 1. Create Booking schema
 * 2. Fields:
 *    - user: ObjectId (ref User)
 *    - roomType: String, required
 *    - checkInDate: Date, required
 *    - checkOutDate: Date, required
 *    - status: String enum ["active", "cancelled"], default "active"
 * 3. Enable timestamps
 */

const bookingSchema = new mongoose.Schema(
  {
    // TODO
  },
  { timestamps: true },
);

// TODO: Add toJSON transform to replace _id with id

module.exports = mongoose.model("Booking", bookingSchema);
