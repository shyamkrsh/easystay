const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listingController");
const authToken = require("../middleware/authToken");

router.get("/search/:category", listingController.showAllListings);
router.post("/new", authToken, listingController.newListing);
router.get("/:authorId", listingController.getAuthorListing);
router.get("/:id/show", listingController.showOneListing);
router.get("/:id/clients", listingController.getClients);
router.delete("/:id/delete",authToken, listingController.deleteListing);

module.exports = router;