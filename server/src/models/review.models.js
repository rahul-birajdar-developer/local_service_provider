import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Provider"
    },

    rating: {
        type: Number,
        min: 1,
        max: 5
    },

    review: String

}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);