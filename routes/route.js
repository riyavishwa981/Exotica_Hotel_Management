const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const data = require("../data/hotels.js");
const Hotel = require("../models/hotelModel.js");

router.get(
  "/home",
  expressAsyncHandler(async (req, res) => {
    const hotels = await Hotel.find({}).lean();
    //console.log(hotels);
    res.render("home", { hotels: hotels });
  })
);

router.get(
  "/seed-hotels",
  expressAsyncHandler(async (req, res) => {
    const hotelslist = await Hotel.insertMany(data);
    res.send({ hotelslist });
  })
);

router.get(
  "/hotel/:id",
  expressAsyncHandler(async (req, res) => {
    const hotelDetails = await Hotel.findById(req.params.id).lean();
    console.log(hotelDetails);
    res.render("hotelDetails", { obj: hotelDetails });
  })
);
module.exports = router;
