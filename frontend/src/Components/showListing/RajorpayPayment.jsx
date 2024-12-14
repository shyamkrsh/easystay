import React from "react";
import axios from "axios";

const RazorpayPayment = ({ amount }) => {
    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async (e) => {
        
        const isRazorpayLoaded = await loadRazorpay();
        if (!isRazorpayLoaded) {
            alert("Failed to load Razorpay. Please try again.");
            return;
        }

        try {
            // Create order on the backend
            const { data } = await axios.post("https://easystaybackend.vercel.app/create-order", {
                amount, // Amount in rupees
                currency: "INR",
            });

            const { id: order_id, amount: order_amount, currency } = data.order;

            // Configure Razorpay options
            const options = {
                key: import.meta.env.RAJORPAY_KEY_ID, // Replace with your Razorpay Key ID
                amount: order_amount,
                currency,
                name: "EasyStay",
                description: "Payment for your stay",
                order_id, // Order ID generated from Razorpay
                handler: async (response) => {
                    alert("Payment Successful!");
                    console.log("Payment Details:", response);
                    // Optionally, verify payment on the backend
                },
                prefill: {
                    name: "Shyam Kumar Sharma",
                    email: "sksh58573@gmail.com",
                    contact: "1234567890",
                },
                theme: {
                    color: "#192874",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error("Error creating order:", error);
            alert("Failed to initiate payment. Please try again.");
        }
    };

    return (
        <button onClick={handlePayment} className="bg-yellow-400 w-full text-black font-semibold px-3 py-2 rounded-md">
            Pay ₹ {amount}
        </button>
    );
};

export default RazorpayPayment;
