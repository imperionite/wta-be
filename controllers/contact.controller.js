const Contact = require("../models/Contact"); // Changed from ContactMessage to Contact for consistency

/**
 * TODO: createContactMessage
 * --------------------------------
 * PUBLIC
 * - Accept name, email, subject, message from req.body
 * - Validate required fields
 * - Save message to database
 * - Simulate email sending using console.log
 * - Return success response
 */
exports.createContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please enter all required fields: name, email, and message." });
    }

    // Create a new contact message using the Contact model
    const newContactMessage = await Contact.create({ // Using Contact model here
      name,
      email,
      subject,
      message,
    });

    // Simulate email sending (as per project requirements)
    console.log(`Simulating email to: ${email}`);
    console.log(`Subject: ${subject || "No Subject"}`);
    console.log(`Message: ${message}`);
    console.log("------------------------------------");

    // Return a success response with the created message
    res.status(201).json({
      message: "Contact message sent successfully!",
      contact: newContactMessage,
    });
  } catch (error) {
    // Handle validation errors or other database errors
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: getAllContactMessages
 * --------------------------------
 * - Fetch all contact messages
 * - Sort by newest first
 * - ADMIN ONLY (will be enforced by middleware in routes)
 */
exports.getAllContactMessages = async (req, res) => {
  try {
    // Find all contact messages and sort them by creation date in descending order (newest first)
    const messages = await Contact.find().sort({ createdAt: -1 }); // Using Contact model here

    // Return the fetched messages
    res.status(200).json({
      count: messages.length,
      messages,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: markMessageAsRead
 * --------------------------------
 * - Mark a contact message as "read"
 * - Message ID comes from req.params.id
 * - ADMIN ONLY (will be enforced by middleware in routes)
 */
exports.markMessageAsRead = async (req, res) => {
  try {
    const { id } = req.params; // Get the message ID from the URL parameters

    // Find the message by ID and update its status to "read"
    const updatedMessage = await Contact.findByIdAndUpdate( // Using Contact model here
      id,
      { status: "read" },
      { new: true, runValidators: true }, // 'new: true' returns the updated document, 'runValidators: true' ensures schema validation runs
    );

    // If no message is found with the given ID, return a 404 error
    if (!updatedMessage) {
      return res.status(404).json({ message: "Contact message not found." });
    }

    // Return a success response with the updated message
    res.status(200).json({
      message: "Contact message marked as read successfully!",
      contact: updatedMessage,
    });
  } catch (error) {
    // Handle invalid ID format or other errors
    res.status(400).json({ message: error.message });
  }
};
