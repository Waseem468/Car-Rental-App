const express = require("express");
const cors = require("cors");
require("./src/config/db");
const fileUpload=require("express-fileupload")
const connectDB = require("./src/config/db");

connectDB();

const CarRouter = require("./src/routes/carRoutes");
const UserRouter = require("./src/routes/userRoutes");
const AdminRouter = require("./src/routes/adminRoutes");
const OrderRouter = require("./src/routes/bookingRoutes");

const app = express();

// Middleware
app.use(fileUpload({
    useTempFiles: true, 
    tempFileDir: '/tmp/',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(cors({ origin: true, credentials: true }));

// Routes
app.use("/car", CarRouter);
app.use("/user", UserRouter);
app.use("/admin", AdminRouter);
app.use("/booking", OrderRouter);

// Server setup
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
