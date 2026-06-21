import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constant.js";

const app = express();

const connectDB = async () => {
    try {
        // const connectionInstant = await mongoose.connect(`${MONGOODB_URL}/${DB_NAME}`);
        const connectionInstant = await mongoose.connect("mongodb+srv://rahul:rahul143@cluster0.hrqdiqy.mongodb.net/?appName=Cluster0")
        console.log(`db coneected on host  ${connectionInstant.connection.host}`)
    } catch (error) {
        console.log("connection failed ", error);
        process.exit(1);
    }
}

export default connectDB;