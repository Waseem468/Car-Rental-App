const express = require("express");
const cors = require("cors");
require("./src/config/db");
const fileUpload = require("express-fileupload");
const connectDB = require("./src/config/db");

connectDB();

const CarRouter = require("./src/routes/carRoutes");
const UserRouter = require("./src/routes/userRoutes");
const AdminRouter = require("./src/routes/adminRoutes");
const OrderRouter = require("./src/routes/bookingRoutes");

const app = express();

// Middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow both local and production frontend origins
const allowedOrigins = [
  "http://localhost:3000", // Local development
  "https://car-rental-app-frontend-q9sq.onrender.com", // Deployed frontend on Render
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow common HTTP methods
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    allowedHeaders: "Content-Type, Authorization", // Allow specific headers
  })
);
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
