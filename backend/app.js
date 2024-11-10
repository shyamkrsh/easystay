require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const port = 8080;
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const data = require("./data.json");
const Listing = require("./models/Listing");
const contactRouter = require("./routes/contactRouter");

// const MONGO_URL= process.env.MONGO_URL;

main().then((res) => {
    console.log(`Connected to DB`);
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 3000,
    });
}

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))


app.get("/data", async(req, res) => {
    for (let listing of data.properties){
      let newListing = new Listing({title: listing.title, category: listing.category, location: null, availability: listing.status, price: listing.price, owner: null, payment: listing.payment_status, description: listing.description, reviews: null});
      newListing.images.push({url: listing.images[0], filename: "images"})
      newListing.images.push({url: listing.images[1], filename: "images"})
      await newListing.save().then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
})


const userRouter = require("./routes/userRouter");
const listingRouter = require("./routes/listingRouter");
const reviewsRouter = require("./routes/reviewsRouter");
const applicationRouter = require("./routes/applicationRouter");

app.use("/api", userRouter);
app.use("/api/listings", listingRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/application", applicationRouter);
app.use("/api/contact", contactRouter);




app.listen(port, () => {
    console.log(`App is listeing to the port : ${port}`);
})