import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  accessToken: {
    type: String,
  },
  walletAddress: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
