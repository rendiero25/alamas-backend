const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure Multer for local storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/icons/';
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)){
        fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, 'icon-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new category
router.post('/', upload.single('icon'), async (req, res) => {
  try {
    const { name } = req.body;
    let iconPath = '';
    
    if (req.file) {
      iconPath = `/uploads/icons/${req.file.filename}`;
    }

    if (!name || !iconPath) {
        return res.status(400).json({ message: 'Name and Icon are required' });
    }

    const newCategory = new Category({
      name,
      icon: iconPath
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE category
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    
    // Optional: Delete the icon file
    // const filePath = path.join(__dirname, '..', category.icon);
    // if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await category.deleteOne();
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
