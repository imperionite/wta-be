const express = require("express");
const passport = require("passport");
const { getProfile } = require("../controllers/user.controller");
const router = express.Router();

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getProfile,
);

module.exports = router;
