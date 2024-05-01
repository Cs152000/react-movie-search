// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';


dotenv.config();
// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB using Mongoose
const connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log("the database is connected")
  }
  catch (err) {
    console.log("the error occured while connecting database")
  }
}
//middlewares
const corsOptions = {
  origin: '*', // Allow all origins
  methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS' // Allow specified methods
};

app.use(express.json());
app.use(cors(corsOptions))

app.use("/",userRoutes)
// Start the server
app.listen(port, () => {
  connect();
  console.log(`Server is running on port http://localhost:${port}`);
});
