const express = require("express");
const passport = require("passport");
const {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/room.controller");

const isAdmin = require("../middleware/admin");

const router = express.Router();

// Public routes
router.get("/", getAllRooms);
router.get("/:id", getRoomById);

// Admin-only routes (requires JWT + admin role)
router.use(passport.authenticate("jwt", { session: false }));

router.post("/", isAdmin, createRoom);
router.put("/:id", isAdmin, updateRoom);
router.delete("/:id", isAdmin, deleteRoom);

module.exports = router;
