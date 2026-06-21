import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    businessName: String,

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },

    experience: Number,

    description: String,

    skills: [String],

    languages: [String],

    serviceArea: [String],

    profileImage: String,

    documents: {
        aadhaar: String,
        pan: String,
        certificate: String
    },

    rating: {
        type: Number,
        default: 0
    },

    totalReviews: {
        type: Number,
        default: 0
    },

    completedJobs: {
        type: Number,
        default: 0
    },

    isApproved: {
        type: Boolean,
        default: false
    },

    isAvailable: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

export default mongoose.model("Provider", providerSchema);