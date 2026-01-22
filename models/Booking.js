const mongoose = require("mongoose");

/**
 * TODO:
 * 1. Create Booking schema
 * 2. Fields:
 *    - user: ObjectId (ref User), required
 *    - room: ObjectId (ref Room), required
 *    - firstName: String, required
 *    - lastName: String, required
 *    - phoneNumber: String, required
 *    - email: String, required
 *    - checkInDate: Date, required
 *    - checkOutDate: Date, required
 *    - numAdults: Number, required
 *    - numChildren: Number, optional
 *    - boardType: String, enum ["Breakfast", "Half-board"], required
 *    - status: String, enum ["active", "cancelled"], default "active"
 * 3. Enable timestamps
 */

const bookingSchema = new mongoose.Schema(
  {
    // TODO: Define the fields listed above
  },
  { timestamps: true },
);

// TODO: Add toJSON transform to replace _id with id

module.exports = mongoose.model("Booking", bookingSchema);
