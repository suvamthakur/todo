const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (err) {
    throw err;
  }
};

module.exports = connectDB;
