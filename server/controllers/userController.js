const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};


const createUser = async (req, res, next) => {
  try {
    const { password, ...rest} = req.body;

    // generate salt;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = await User.create({
      ...rest,
      password: hashedPassword,
    });

    if (!newUser) {
      res.status(400);
      throw new Error("User not created!");
    }

    // hash password before saving to database

    const { password: userPassword, ...otherDetails } = newUser._doc;

    return res.status(201).json(otherDetails);

  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "Cannot update User: not found" });
    }

    console.log("User updated:", updatedUser._id);
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete User
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    console.log("User deleted:", user._id);
    return res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const now = Date.now();

    const attempt = req.loginAttempt; // 👈 shared reference

    const user = await User.findOne({ email });

    if (!user) {
      // ❌ do NOT replace object
      attempt.count += 1;
      attempt.lastAttempt = now;

      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      // ❌ do NOT replace object
      attempt.count += 1;
      attempt.lastAttempt = now;

      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ success → reset attempts
    attempt.count = 0;
    attempt.lastAttempt = now;

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "14d" } // or "15m", "7d", etc.
    );

    res.cookie("jwt", token);

    const { password: userPassword, ...rest } = user._doc;

    return res.status(200).json(rest);

  } catch (error) {
    next(error);
  }
};

const logoutUSer = async (req, res, next) => {
  res.clearCookie("jwt");
  return res.json({ message: "You have been logged out" });
};

module.exports = {
  logoutUSer,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};