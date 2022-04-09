const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/pizza-order";

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`${conn.connection.name} connected`);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectToDb;
