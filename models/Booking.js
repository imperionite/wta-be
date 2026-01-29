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
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, default: 0 },
    suiteType: {
      type: String,
      enum: ["Silene Junior", "Lupine Junior", "Silene", "Lupine"],
      required: true,
    },
    boardType: {
      type: String,
      enum: ["Breakfast", "Half-board"],
      required: true,
    },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" , required: true },
  },
  { timestamps: true },
);

// TODO: Add toJSON transform to replace _id with id
bookingSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
