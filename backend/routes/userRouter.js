const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authToken = require("../middleware/authToken");
const userDetailsController = require("../controllers/userDetails");



router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/user-details", authToken, userDetailsController);
router.get("/logout", userController.logout);

module.exports = router;