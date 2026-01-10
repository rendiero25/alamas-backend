const express = require('express');
const router = express.Router();
const Industry = require('../models/Industry');
const upload = require('../middleware/uploadMiddleware');
const { protect } = require('../middleware/authMiddleware');

// GET all industries - Public
router.get('/', async (req, res) => {
  try {
    const industries = await Industry.find().sort({ name: 1 });
    res.json(industries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one industry - Public
router.get('/:id', async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) return res.status(404).json({ message: 'Industry not found' });
    res.json(industry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create industry - Protected
router.post('/', protect, upload.single('image'), async (req, res) => {
  const industryData = {
    name: req.body.name,
    description: req.body.description,
    heading: req.body.heading,
    productListDescription: req.body.productListDescription
  };

  if (req.file) {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    industryData.image = dataURI;
  } else if (req.body.image) {
      industryData.image = req.body.image;
  }

  try {
    const newIndustry = await Industry.create(industryData);
    res.status(201).json(newIndustry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update industry - Protected
router.put('/:id', protect, upload.single('image'), async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) return res.status(404).json({ message: 'Industry not found' });

    if (req.body.name) industry.name = req.body.name;
    if (req.body.description) industry.description = req.body.description;
    if (req.body.heading) industry.heading = req.body.heading;
    if (req.body.productListDescription) industry.productListDescription = req.body.productListDescription;
    
    if (req.file) {
      const b64 = Buffer.from(req.file.buffer).toString('base64');
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      industry.image = dataURI;
    } else if (req.body.image) {
        industry.image = req.body.image;
    }

    const updatedIndustry = await industry.save();
    res.json(updatedIndustry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE industry - Protected
router.delete('/:id', protect, async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) return res.status(404).json({ message: 'Industry not found' });

    await industry.deleteOne();
    res.json({ message: 'Industry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
