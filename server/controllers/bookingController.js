const Booking = require("../models/bookingModel");


//create booking
const createBooking = async (req, res, next) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body cannot be empty" });
    }

    const booking = await Booking.create(req.body);

    console.log("✅ Booking created:", booking._id);
    return res.status(201).json({
      message: "Booking successfully created",
      booking,
    });
  } catch (error) {
    next(error);
  }
};

// Get bookings
const getBookings = async (req, res, next) => {
  try {
      const bookings = await Booking.find();
  
      if (!bookings || bookings.length === 0) {
        return res.status(404).json({ message: "No bookings found" });
      }
  
      return res.status(200).json(bookings);
    } catch (error) {
      next(error);
    }
};

// Get booking
const getBooking = async (req, res, next) => {
  try {
      const booking = await Booking.findById(req.params.id);
  
      if (!booking || Booking.length === 0) {
        return res.status(404).json({ message: "No booking found" });
      }
  
      return res.status(200).json(booking);
    } catch (error) {
      next(error);
    }
};

// Update booking
const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Cannot update: booking not found" });
    }

    console.log("Booking updated:", updatedBooking._id);
    return res.status(200).json(updatedBooking);
  } catch (error) {
    next(error);
  }
};

// Delete booking
const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking doesn't exist" });
    }

    console.log("Booking deleted:", booking._id);
    return res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};


module.exports = {
    getBookings,
    createBooking,
    updateBooking,
    deleteBooking,
    getBooking,
}
