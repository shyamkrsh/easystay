const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");
const authToken = require("../middleware/authToken");

router.post("/:id/order", authToken, applicationController.newApplication);
router.post("/:id/verifyPayment", authToken, applicationController.verifyPayment);



module.exports = router;