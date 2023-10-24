import mongoose from "mongoose";

const JobsSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    position:{
        type :String,
        required: true

    },
    logo:{
        type :String,
        required: true

    },
    desc: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contract: {
        type:String,
        enum: ["Full-Time","Internship"],
        default: "Full-time",
    },
    new: {
        type: Boolean,
        required: true,
    },
    featured: {
        type: Boolean,
        required: true,
    },
    languages: {
        type: [String],
        required: true,
    },
    tools: {
        type: [String],
        required: true,
    },
});


const Jobs=mongoose.models.jobs || mongoose.model("jobs",JobsSchema);
export default Jobs;