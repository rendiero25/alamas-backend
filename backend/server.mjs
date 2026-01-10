import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import industryRoutes from './routes/industryRoutes.mjs';
import productRoutes from './routes/productRoutes.mjs';
import categoryRoutes from './routes/categoryRoutes.mjs';
import authRoutes from './routes/authRoutes.mjs';

import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

console.log('Industry Routes:', industryRoutes);
console.log('Product Routes:', productRoutes);
console.log('Category Routes:', categoryRoutes);
console.log('Auth Routes:', authRoutes);

// Check DB Connection Middleware

// Check DB Connection Middleware
app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(500).json({ 
        message: 'Database not connected. Please check MONGODB_URI in environment variables.',
        readyState: mongoose.connection.readyState 
    });
  }
  next();
});

// Routes
app.use('/api/industries', industryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);

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
  
  // Start Server only if running directly (ESM way to check entry point)
  // In ESM, require.main === module doesn't exist. 
  // We can check if the file is being executed directly using import.meta.url
  if (process.argv[1] === fileURLToPath(import.meta.url)) {
      app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
      });
  }
  
  export default app;
