const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please enter the product name"],
        },
        quantity: {
            type: Number,
            require: [true, "please enter the quantity"],
        },
        price: {
            type: Number,
            require: [true],
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;