require("dotenv").config();
const User = require("../models/User");
const connectDB = require("../config/db");

if (process.env.NODE_ENV !== "development") {
  console.error("Delete script can only run in development!");
  process.exit(1);
}

const deleteUsers = async () => {
  try {
    await connectDB();
    await User.deleteMany();
    console.log("All users deleted");
    process.exit();
  } catch (err) {
    console.error("Delete error:", err);
    process.exit(1);
  }
};

deleteUsers();
