
const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({

    name: String,

    price: Number,

    desc: String,

    img: String,

    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }mn
    ]
})


const Product = mongoose.model("Product", productSchema);



module.exports = Product;