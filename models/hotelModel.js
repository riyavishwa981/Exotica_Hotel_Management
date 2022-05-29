const mongoose = require("mongoose");

const hotel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model("Hotel", hotel);
module.exports = Hotel;
