const Room = require("../models/roomModel");

// Get all rooms
const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();

    if (!rooms || rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found" });
    }

    return res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

// Get single room
const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    return res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

// Create room
const createRoom = async (req, res, next) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body cannot be empty" });
    }

    const room = await Room.create(req.body);

    console.log("✅ Room created:", room._id);
    return res.status(201).json({
      message: "Room successfully created",
      room,
    });
  } catch (error) {
    next(error);
  }
};

// Update room
const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ message: "Cannot update room: not found" });
    }

    console.log("Room updated:", updatedRoom._id);
    return res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

// Delete room
const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) {
      return res.status(404).json({ message: "Room doesn't exist" });
    }

    console.log("Room deleted:", room._id);
    return res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRooms,
  createRoom,
  getRoom,
  updateRoom,
  deleteRoom,
};
