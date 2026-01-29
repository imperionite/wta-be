const mongoose = require("mongoose");

/**
 * TODO:
 * 1. Create a Mongoose schema named ContactMessage
 * 2. Fields:
 *    - name: String, required
 *    - email: String, required, lowercase, trim
 *    - subject: String, optional
 *    - message: String, required
 *    - status: String enum ["new", "read"], default "new"
 * 3. Enable timestamps
 *
 * NOTES:
 * - This model represents messages sent via a contact form
 * - No real email will be sent
 */

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    status: {
      type: String,
      enum: ["new", "read"],
      default: "new",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

module.exports = mongoose.model("Contact", contactSchema);
