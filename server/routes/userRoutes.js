const { Router } = require("express");
const {
  logoutUSer,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");
const { auth } = require("../middleware/authMiddleware");
const { loginLimiter } = require("../middleware/rateLimiters");
const loginGuard = require("../middleware/loginGuard");
const router = Router();

// Create user
router.post("/", createUser);

// Login
//router.post("/login", loginGuard, loginUser);

router.post("/login", loginLimiter, loginGuard, loginUser);

//logout user
router.post("/logout", auth, logoutUSer);

// Get all users
router.get("/", auth, getUsers);

// Get single user
router.get("/:id", auth, getUser);

// Update user
router.put("/:id", auth, updateUser);

// Delete user
router.delete("/:id", auth, deleteUser);


module.exports = router;