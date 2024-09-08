import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database Connected Successfully');
  } catch (err) {
    console.error('Database cannot be Connected:', err.message);
  }
};

export default connectDB; // Export the function

