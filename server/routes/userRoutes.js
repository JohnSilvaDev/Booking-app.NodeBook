const { Router } = require("express");
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/userController");
const router = Router();


//get all users
router.get("/", getUsers);    

//get single user
router.get("/:id", getUsers);  

//create user
router.post("/", createUser);

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

module.exports = router;