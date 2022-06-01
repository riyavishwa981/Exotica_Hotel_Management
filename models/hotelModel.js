const mongoose = require("mongoose");

// first we will make the schema
const hotel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//then we will convert it into a model
const Hotel = mongoose.model("Hotel", hotel);
module.exports = Hotel;
