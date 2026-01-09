const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: true, // e.g., "Acids", "Polyols And Glycols"
  },
  industry: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Industry',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
