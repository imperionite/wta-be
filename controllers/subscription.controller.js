const Subscription = require("../models/Subscription");

/**
 * Notes:
 * - Validate all fields if necessary
 * - Implementing Authentication and RBAC not yet required
 * - Respond with proper status codes and JSON
 * - Provide meaningful comments (not heavy formatted) to your code
 */

/**
 * TODO: subscribe
 * --------------------------------
 * PUBLIC
 * - Accept email
 * - Prevent duplicate subscriptions
 * - Save as active
 */
exports.subscribe = async (req, res) => {
  try {
    // TODO
    const { email } = req.body;

    // Check if subscription already exists
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    const newSubscription = new Subscription({ email, status: "active" });
    await newSubscription.save();

    res.status(201).json(newSubscription);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: unsubscribe
 * --------------------------------
 * PUBLIC
 * - Change status to "unsubscribed"
 * - Do NOT delete record
 */
exports.unsubscribe = async (req, res) => {
  try {
    // TODO
    const { email } = req.body;

    const subscription = await Subscription.findOneAndUpdate( 
      { email },
      { status: "unsubscribed" },
      { new: true }
    );

    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    res.status(200).json(subscription);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: getAllSubscriptions
 * --------------------------------
 * - Fetch all subscriptions
 */
exports.getAllSubscriptions = async (req, res) => {
  try {
    // TODO: fetch
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * TODO: sendNewsletter
 * --------------------------------
 * - Simulate sending newsletter
 * - console.log number of recipients
 */
exports.sendNewsletter = async (req, res) => {
  try {
    // TODO: simulate sending
    // Only send to active subscribers
    const recipients = await Subscription.find({ status: "active" });
    
    console.log(`Sending newsletter to ${recipients.length} recipients.`);
    
    res.status(200).json({ 
      message: "Newsletter simulation successful", 
      recipientCount: recipients.length 
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
