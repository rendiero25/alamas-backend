const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const createAdmin = async () => {
  try {
    const userExists = await User.findOne({ username: 'admin' });
    
    if (userExists) {
        console.log('Admin user already exists');
        process.exit();
    }

    // Password will be hashed by pre-save hook in User model
    const user = await User.create({
      username: 'admin',
      password: 'admin123', 
    });

    console.log(`Admin created: ${user.username}`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
