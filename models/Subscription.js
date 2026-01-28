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
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "unsubscribed"],
      default: "active",
   },
  },
  { 
    timestamps: true 
  }
);

// TODO: Add toJSON transform to replace _id with id
subscriptionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
