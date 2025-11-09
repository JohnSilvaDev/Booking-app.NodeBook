const { Router } = require("express");
const { 
    createBooking, 
    getBookings, 
    getBooking,
    updateBooking,
    deleteBooking,
} = require("../controllers/bookingController");

const router = Router();

router.get("/", getBookings);
router.get("/:id", getBooking);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);
module.exports = router;