const mongoose = require('mongoose');
require('dotenv').config();
const DB_URI = process.env.DB_URI
const connectDB = async()=> {
    try {
        await mongoose.connect(DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
    
        console.log('MongoDB Connected...');
      } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
      }
};

module.exports = connectDB