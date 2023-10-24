import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    institute: {
      type: String,

    },
    degree: {
      type: String,
    
    },
    skills: {
      type: [String],
    },
    yearofexp: {
      type: String,
    },
    coverletter: {
      type: String,
    },
  },
    
{ timestamps: true }
  
);

const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User;