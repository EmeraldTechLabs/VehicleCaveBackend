import mongoose from "mongoose";

const BranchSchema = new mongoose.Schema({
  branchName: { type: "string" },
  organization: { type: "string" },
  vehicles: { type: "string" },
  reviews: { type: "string" },
});

export default mongoose.model("BranchSchema", BranchSchema);
