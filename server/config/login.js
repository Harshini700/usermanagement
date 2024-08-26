const mongoose = require('mongoose');

// MongoDB connection URI
const dbURI = 'mongodb://localhost:27017/login';  // Replace with your connection string

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      // Connection options are no longer needed for these options
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // Exit process with failure code
  }
};

module.exports = connectDB;
