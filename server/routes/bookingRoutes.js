const { Router } = require("express");
const { 
    createBooking, 
    getBookings, 
    getBooking,
    updateBooking,
    deleteBooking,
} = require("../controllers/bookingController");
const { auth } = require("../middleware/authMiddleware");
const { createBookingLimiter } = require("../middleware/rateLimiters");
const bookingGuard = require("../middleware/bookingGuard");

const router = Router();

router.get("/", auth, getBookings);
router.get("/:id", auth, getBooking);
router.post("/", auth, createBookingLimiter, bookingGuard, createBooking);
router.put("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);
module.exports = router;