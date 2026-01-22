const mongoose = require("mongoose");

/**
 * TODO:
 * 1. Create Booking schema
 * 2. Fields:
 *    - firstName: String, required
 *    - lastName: String, required
 *    - phone: String, required
 *    - email: String, required
 *    - checkInDate: Date, required
 *    - checkOutDate: Date, required
 *    - adults: Number, required
 *    - children: Number, optional
 *    - suiteType: String enum ["Silene Junior", "Lupine Junior", "Silene", "Lupine"], required
 *    - boardType: String enum ["Breakfast", "Half-board"], required
 *    - room: ObjectId (ref Room) 
 * 3. Enable timestamps
 */
const bookingSchema = new mongoose.Schema(
  {
    // TODO: add fields here
  },
  { timestamps: true }
);

// TODO: Add toJSON transform to replace _id with id

module.exports = mongoose.model("Booking", bookingSchema);
