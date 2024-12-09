const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/IT_Project");
    console.log("Connect Successfull!");
  } catch (error) {
    console.log(error);
    console.log("Connect Failed!");
  }
}

module.exports = { connect };
