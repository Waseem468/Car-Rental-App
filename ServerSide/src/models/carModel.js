const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
    },
    carType: {
      type: String,
      required: true,
    },
    carModel: {
      type: String,
      required: true,
    },
    mileage: {
      type: String,
      required: true,
    },
    carNumber: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    availableFrom: {
      type: String,
      required: true,
    },
    availableUntil: {
      type: String,
      required: true,
    },
    pricePerKm: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    carDetails: {
      type: String,
    },
    details: {
      type: String,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    capacity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
