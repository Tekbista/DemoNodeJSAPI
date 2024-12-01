const Product = require('../models/product.model.js')

const getAllProducts = async(req, res) =>{
    try {
        const products = await Product.find();
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getProductById = async (req, res) =>{
    const { id } = req.params;

    try {
        const prod = await Product.findById(id);
        res.status(200).send(prod);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const createProduct = async (req, res) =>{
    try {
        const prod = await Product.create(req.body);
        res.status(201).send(prod);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const prod = await Product.findByIdAndUpdate(id, req.body);
        if(!prod){
            return res.status(404).send('Product could not be found.')
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).send(updatedProduct);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const prod = await Product.findByIdAndDelete(id);
        if(!prod){
            return res.status(404).send('Product not found.');
        }
        res.status(200).send('Product deleted successfully.');
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct}

