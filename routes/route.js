const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const data = require("../data/hotels.js");
const Hotel = require("../models/hotelModel.js");

router.get("/home", (req, res) => {
  res.render("home", {
    hotels: hotels,
  });
});

router.get(
  "/seed-hotels",
  expressAsyncHandler(async (req, res) => {
    const hotelslist = await Hotel.insertMany(data);
    res.send({ hotelslist });
  })
);

module.exports = router;
