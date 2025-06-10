import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};
