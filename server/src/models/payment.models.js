import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    amount: Number,

    paymentMethod: {
        type: String,
        enum: ["UPI", "Card", "Cash"]
    },

    transactionId: String,

    paymentStatus: {
        type: String,
        enum: [
            "pending",
            "paid",
            "failed",
            "refunded"
        ]
    }

}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);