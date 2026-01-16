import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Industry from './models/Industry.mjs';
import Product from './models/Product.mjs';

dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON file
const productsPath = path.join(__dirname, '../src/data/products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const importData = async () => {
  try {
    // Clear existing data
    await Industry.deleteMany();
    await Product.deleteMany();
    console.log('Data Destroyed...');

    for (const industryData of productsData) {
      // Create Industry
      const industry = await Industry.create({
        name: industryData.name,
        // Add default images or descriptions if you have them mapping somewhere, 
        // otherwise they will be empty strings as per schema default.
      });

      console.log(`Created Industry: ${industry.name}`);

      // Process Categories & Products
      for (const category of industryData.categories) {
        const categoryName = category.name;
        
        for (const productName of category.products) {
          await Product.create({
            name: productName,
            category: categoryName,
            industry: industry._id,
          });
        }
      }
    }

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
