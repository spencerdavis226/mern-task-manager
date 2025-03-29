import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string in MONGO_URI from your .env file
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
