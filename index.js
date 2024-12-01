const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoutes = require('./routes/product.route.js')
require('dotenv').config()
const mongoose_url = process.env.MONGOOSE_URL;
console.log(mongoose_url)
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/products", productRoutes);

app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) =>{
    res.status(200).send('Hello from node JS API Server')
})

// Open Mongoose connection
mongoose.connect(mongoose_url)
.then(() =>{
    console.log("Connection success!");
})
.catch((error) =>{
    console.log(error)
})

// Close the Mongoose connection on app termination.
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('Mongoose connection closed on app termination');
        process.exit(0);
    } catch (error) {
        console.error('Error closing Mongoose connection:', error);
        process.exit(1);
    }
});