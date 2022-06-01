const express = require("express");
const path = require("path");
var exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();
const port = 5363;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "views");


//middlewear
const hotelrouter = require(path.join(__dirname, "/routes/route.js"));
app.use("/Exotica", hotelrouter);

//connection with database
mongoose
  .connect(
    process.env.MONGODB_URL ||
      "mongodb+srv://riya_vishwa_981:ujju5363@cluster0.xghz9.mongodb.net/Exotica?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((ans) => {
    console.log("Koi problem nahi hai");
  })
  .catch((error) => {
    console.log(error.message);
  });


//to run website on specified port
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
