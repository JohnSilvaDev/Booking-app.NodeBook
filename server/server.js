const dotenv = require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const app = express();
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes")
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/authMiddleware");


//connect to database   
connectDB();

//setup middlewares
app.use(express.json());
app.use(cookieParser());

//setup routes 
app.get("/auth", auth, (req, res) => {
  res.status(200).json({
    id: req.user.id,
    iat: req.user.iat,
  });
});
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(errorHandler);



``
