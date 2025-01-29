const Listing = require("../models/Listing");
const Application = require("../models/Application");
const User = require("../models/User");
const { appliedEmail } = require("../middleware/appliedEmail");
const Notification = require("../models/notifications");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config();
const crypto = require("crypto");


const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports.newApplication = async (req, res) => {
    const { amount } = req.body;
    try {
        const options = {
            amount: Number(amount * 100),
            currency: "INR",
            receipt: crypto.randomBytes(10).toString('hex'),
        }
        razorpayInstance.orders.create(options, (error, orders) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: "Something Went Wrong!" })
            }
            console.log(orders);
            res.status(200).json({ data: orders });
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
}

module.exports.verifyPayment = async (req, res) => {
    try {
        const { id } = req.params;
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, data } = req.body;
        let listing = await Listing.findById(id);
        let user = await User.findById(listing.owner);
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');

        const isAuthentic = expectedSign === razorpay_signature;
        if (isAuthentic) {
            let application = new Application({
                name: data.name,
                email: data.email,
                mobNumber: data.mobNumber,
                location: data.location,
                author: req.userId,
                payment: true,
            })
            let notification = new Notification({
                name: req.body.name,
                content: `${req.body.name} is booking your service - ${listing.title} please see their details on your dashboard's clients section.`,
            })
            await application.save();
            await notification.save();
            user.clients.push(application._id);
            user.notifications.push(notification._id);
            await user.save();
            appliedEmail(req.body.email, req.body.name, listing.title, listing.price, listing.location);
            res.status(201).json({
                message: "New Application created",
                data: application,
                error: false,
                success: true,
            })
        }
        
    } catch (err) {
        res.json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        })
    }
}