const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  toggleUserStatus,
} = require("../controllers/userController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/login", loginUser);
router.post("/", createUser);

// Protected
router.route("/").get(protect, adminOnly, getUsers);

router.route("/:id").put(protect, updateUser).delete(protect, deleteUser);

router.patch("/:id/toggle", protect, adminOnly, toggleUserStatus);

module.exports = router;
