import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  icon: {
    type: String, // Path to uploaded icon image
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Category', categorySchema);
