require("dotenv").config();
const config = require("./config/config");
const createError = require("http-errors");
const express = require("express");
const passport = require("./config/passport");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDB = require("./config/db");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

const app = express();

// Connect to database
connectDB();

// middleware order
app.use(helmet({ contentSecurityPolicy: false }));
app.use(
  cors({
    origin: config.frontendUrl,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(logger("combined"));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

// 404 handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(err.status || 500).json({
    message:
      process.env.NODE_ENV === "production" ? "Server error" : err.message,
  });
});

module.exports = app;
