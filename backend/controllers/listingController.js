const Listing = require("../models/Listing");
const User = require("../models/User");


module.exports.showAllListings = async (req, res) => {
    try {
        const {category} = req.params;
        const listings = await Listing.find({category: category});
        res.status(200).json({
            message: "Sending Data",
            data: listings,
            error: false,
            success: true,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        })
    }
}

module.exports.newListing = async (req, res) => {
    try {
        let data = req.body;
        let newListing = new Listing({
            title: data.title,
            category: data.category,
            location: data.location,
            availability: data.availability,
            price: data.price,
            owner: req.userId,
            profileImage: null,
            payment: data.payment,
            description: data.description,
        })
        newListing.images.push({ url: "https://i.pinimg.com/736x/fc/03/d8/fc03d8342485241d00de94b16b8b69e7.jpg", filename: 'notavailable' })
        newListing.images.push({ url: "https://i.pinimg.com/736x/fc/03/d8/fc03d8342485241d00de94b16b8b69e7.jpg", filename: 'notavailable' })
        newListing.images.push({ url: "https://i.pinimg.com/736x/fc/03/d8/fc03d8342485241d00de94b16b8b69e7.jpg", filename: 'notavailable' })
        newListing.images.push({ url: "https://i.pinimg.com/736x/fc/03/d8/fc03d8342485241d00de94b16b8b69e7.jpg", filename: 'notavailable' })

        let user = await User.findById(req.userId);
        if (!user) {
            throw new Error("You can't add Item without logged In");
        }
        user.posts.push(newListing);

        await newListing.save();
        res.status(201).json({
            message: "New Listing Created",
            data: newListing,
            error: false,
            success: true,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        })
    }

}

module.exports.showOneListing = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        const user = await User.findById(listing.owner);

        res.status(200).json({
            message: "Sending Data",
            data: listing,
            owner: user,
            error: false,
            success: true,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            owner: [],
            error: true,
            success: false,
        })
    }

}

module.exports.getAuthorListing = async (req, res) => {
    try {
        const listings = await Listing.find({});
        res.status(200).json({
            message: "Sending Data",
            data: listings,
            error: false,
            success: true,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        })
    }
}

module.exports.getClients = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate("clients");
        
        res.status(200).json({
            message: "Sending Data",
            data: user,
            error: false,
            success: true,
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        })
    }
}

module.exports.deleteListing = async(req, res) => {
    try{
        const {id} = req.params;
        const listing = await Listing.findByIdAndDelete(id);
       
        res.status(200).json({
            message: "Listing Deleted Successfully",
            data: listing,
            error : false,
            success: true,
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        })
    }
}