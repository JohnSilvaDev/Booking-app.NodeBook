const { Router } = require("express");

const { getRooms, getRoom, createRoom, updateRoom, deleteRoom } = require("../controllers/roomController.js");
const { auth } = require("../middleware/authMiddleware.js");

const router = Router();

//get all rooms
router.get("/", getRooms)

//get single room
router.get("/:id" , getRoom)

//create room
router.post("/", auth, createRoom)

//update room
router.put("/:id", auth, updateRoom)

//delete room
router.delete("/:id", auth, deleteRoom)

module.exports = router;