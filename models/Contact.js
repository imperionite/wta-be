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
    // TODO: define fields here
  },
  {
    timestamps: true,
  },
);

// TODO: Add toJSON transform to replace _id with id

module.exports = mongoose.model("Contact", contactSchema);
