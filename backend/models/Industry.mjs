import mongoose from 'mongoose';

const industrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: "", // To be filled later if needed, currently not in simple JSON
  },
  image: {
    type: String, // URL or path to image
    default: "",
  },
  // You might want to store specific heading/text for the Industry Page
  heading: String,
  subHeading: String,
  productListDescription: String,
}, { timestamps: true });

export default mongoose.model('Industry', industrySchema);
