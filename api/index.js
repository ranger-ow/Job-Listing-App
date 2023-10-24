import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jobsroute from "./routes/jobs.js"
import applyroute from "./routes/users.js"
import cors from 'cors'
const app = express();
app.use(express.json());
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

app.get("/", (req, res) => {
    try {
        res.send("Hie there!");

    } catch (error) {
        throw Error("ERR OCC");


    }
})

//middleware
app.use(cors());
app.use("/jobs",jobsroute);
app.use("/apply",applyroute);







app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});



app.listen(8000, () => {
    connect();
    console.log("Connected to backend.");
});
