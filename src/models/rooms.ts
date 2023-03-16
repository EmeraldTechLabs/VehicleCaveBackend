import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema({
  organization: { type: "string" },
  plan: { type: "string" },
  branchList: { type: "Array" },
  users: { type: "Array" },
});

export default mongoose.model("Organization", OrganizationSchema);
