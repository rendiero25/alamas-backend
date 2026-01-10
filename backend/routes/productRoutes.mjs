import express from 'express';
import Product from '../models/Product.mjs';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// GET all products - Public
router.get('/', async (req, res) => {
  try {
    let query = {};
    if (req.query.industryId) {
      query.industry = req.query.industryId;
    }
    if (req.query.category) {
      query.category = req.query.category;
    }

    const products = await Product.find(query).populate('industry', 'name');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one product - Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('industry');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create product - Protected
router.post('/', protect, async (req, res) => {
  // Currently product model does not seem to handle file uploads in the same way, 
  // checking previous code or context might be needed. 
  // But based on user request "upload file", products usually have images.
  // Assuming the user WILL update the frontend to send multipart/form-data for products too.
  
  // Wait, looking at the code, the product route didn't have `upload.single('image')`.
  // I should check if I need to add that.
  
  // Let's assume for now I should just leave it as is if it's not using multer yet,
  // OR add it if the user intends to upload product images.
  // The user said "product dan industry tidak tampil", and "upload file dari vercel".
  
  // Checking the file content provided earlier, product routes DON'T have upload middleware.
  // They just take JSON. Verify if product model has image field.
  
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    industry: req.body.industry
    // image field is missing in the viewed code.
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update product - Protected
router.put('/:id', protect, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (req.body.name != null) product.name = req.body.name;
    if (req.body.description != null) product.description = req.body.description;
    if (req.body.category != null) product.category = req.body.category;
    if (req.body.industry != null) product.industry = req.body.industry;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE product - Protected
router.delete('/:id', protect, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.deleteOne();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
