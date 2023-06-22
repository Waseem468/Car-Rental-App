const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId: { type: String },
    Details: { type: String },
    name: { type: String },
    type: { type: String },
    model: { type: String },
    perKm: { type: String },
    carDetails: { type: String },
    image: { type: String },
    origin: { type: String },
    destination: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    BookingId: { type: String },
    date: { type: String },
    time: { type: String },
    carId: { type: String },
    pricing: { type: Number },
    tax: { type: Number },
    total: { type: Number },
    distance: { type: Number },
    Subtotal: { type: Number }


}, { timestamps: true }
)

const PlaceOrders = new mongoose.model("placeOrders", OrderSchema)
module.exports = PlaceOrders;