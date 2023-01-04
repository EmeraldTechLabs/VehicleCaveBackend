import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: "string" },
  lastName: { type: "string" },
  userName: { type: "string" },
  email: { type: "string" },
  role: { type: "string" },
  permissions: { type: "Array" },
  password: { type: "string" },
  organization: { type: "string" },
  branchList: { type: "Array" },
});

export default mongoose.model("Users", UserSchema);
