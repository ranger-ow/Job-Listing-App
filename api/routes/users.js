import express from "express";
import User from "../models/Users.js";
const router = express.Router();




router.get("/", async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    // const user = {
    //     name: "Devesh",
    //     email: "soni@gmail.com",
    //     education: [{
    //         institutionName: "IIT Mandi",
    //         institutionDegree: "B.tech",
    //         startYear: 2017,
    //         endYear: 2021,
    //     }],
    //     skills: ["Reactjs", "JS", "C++", "NodejS"],
    //     yearofexp: "+2 years",
    //     coverletter: "lorem32vbjhv hrvhbrfhbfbhbcfbcrfufbhffffdfhhhhhhhhhhhhhhhhhbds vcds vjsd vjhds h dsc rhhhhhf hr hfhrbhreberbvhbdbcsbchjbshbchsd c"
    // }
    const { name,
        email,
        institute,
        degree,
        skills,
        coverletter,
        yearofexp} = req.body;
    try {

        console.log(name,
            email,
            institute, 
            degree,
            skills,
            coverletter,
            yearofexp)
        const users = new User({
            name,
            email,
            institute,
            degree,
            skills,
            coverletter,
            yearofexp
        });
        await users.save();
        // if (!t) return Error("Not saved");
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const uid = req.params.id
        let result = await User.findByIdAndDelete({ _id: uid });

        res.status(200).send(result);

    } catch (error) {
        next(error);

    }
})

export default router;