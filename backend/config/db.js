import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected!");
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1); // Exit the process if the connection fails
    }
};

