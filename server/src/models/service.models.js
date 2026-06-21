import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },

    serviceName: String,

    description: String,

    basePrice: Number,

    image: String

}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);