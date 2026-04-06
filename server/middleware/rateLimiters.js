const rateLimit = require("express-rate-limit");

const createBookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { message: "Too many requests, try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});
const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 7, // only 5 attempts per IP
  message: {
    message: "Login limiter: Too many login attempts. Try again in 10 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});


  


module.exports = {
  loginLimiter,  
  createBookingLimiter,
};