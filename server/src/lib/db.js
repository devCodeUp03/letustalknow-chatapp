import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000,
      maxPoolSize: 20, // Increased pool size
      minPoolSize: 5, // Maintain minimum connections
      connectTimeoutMS: 30000, // Separate connect timeout
      waitQueueTimeoutMS: 20000, // Wait time for connection from pool
      heartbeatFrequencyMS: 3000, // More frequent health checks
      retryWrites: true,
      retryReads: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};
