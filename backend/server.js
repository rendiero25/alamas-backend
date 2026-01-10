const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const industryRoutes = require('./routes/industryRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/industries', industryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req, res) => {
  res.send('Alamas Backend API is running');
});

// Database Connection
const connectDB = async () => {
    // Check if we have a connection to the database or if it's currently connecting or disconnecting
    if (mongoose.connection.readyState >= 1) {
      return;
    }
  
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };
  
  // Connect to DB immediately
  if (process.env.MONGODB_URI) {
      connectDB();
  }
  
  // Start Server only if running directly
  if (require.main === module) {
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
      });
  }
  
  module.exports = app;
