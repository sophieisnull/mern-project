
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // middleware to parse json data, allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(3000, () => {
    connectDB();
    console.log("Server started on http://localhost:3000")
});


