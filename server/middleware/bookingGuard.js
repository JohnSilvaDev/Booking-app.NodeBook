const Booking = require("../models/bookingModel");

const bookingGuard = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // ⏱️ cooldown (30 seconds)
    const lastBooking = await Booking.findOne({ user: userId })
      .sort({ createdAt: -1 });

    if (lastBooking && Date.now() - lastBooking.createdAt < 30 * 1000) {
      return res.status(429).json({
        message: "Please wait 30 seconds before creating another booking",
      });
    }

    // 🚫 per-user limit (max 5 bookings in 15 minutes)
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);

    const recentCount = await Booking.countDocuments({
      user: userId,
      createdAt: { $gte: fifteenMinutesAgo },
    });

    if (recentCount >= 5) {
      return res.status(429).json({
        message: "Too many bookings created. Try again later.",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = bookingGuard;