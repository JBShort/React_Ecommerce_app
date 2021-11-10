const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be more than 2 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [10, "Description must be more than 10 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minLength: [2, "Price must be more than 2 characters"]
    },
    imageUrl: {
        type: String,
        required: [true, "URL must be provided"]
    }
})

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;