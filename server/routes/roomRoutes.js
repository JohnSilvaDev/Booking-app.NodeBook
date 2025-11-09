const { Router } = require("express");
const { getRooms, getRoom, createRoom, updateRoom, deleteRoom } = require("../controllers/roomController.js")

const router = Router();

//get all rooms
router.get("/", getRooms)

//get single room
router.get("/:id" , getRoom)

//create room
router.post("/", createRoom)

//update room
router.put("/:id", updateRoom)

//delete room
router.delete("/:id", deleteRoom)

module.exports = router;