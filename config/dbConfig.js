import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT_URL);
    console.log(`Database connected: ${process.env.DB_CONNECT_URL}`);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
