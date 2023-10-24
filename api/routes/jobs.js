import express from "express";

import Jobs from "../models/Jobs.js";
const router = express.Router();





router.get("/", async (req, res, next) => {
    try {
       
        const jobs = await Jobs.find();
        res.status(200).json(jobs);
    } catch (err) {
        next(err);
    }
});

export default router;