import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Provider"
    },

    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
    },

    bookingNumber: {
        type: String,
        unique: true
    },

    address: String,

    city: String,

    state: String,

    pincode: String,

    bookingDate: Date,

    notes: String,

    totalAmount: Number,

    status: {
        type: String,
        enum: [
            "pending",
            "accepted",
            "in-progress",
            "completed",
            "cancelled"
        ],
        default: "pending"
    }

}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);