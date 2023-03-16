import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  regNo: { type: "string" },
  modelName: { type: "string" },
  brandName: { type: "string" },
  varientName: { type: "string" },
  color: { type: "string" },
  fuelType: { type: "string" },
  engine: { type: "string" },
  range: { type: "string" },
  manufactureDate: { type: "string" },
  typeOfVehicle: { type: "string" },
  RCStatus: { type: "string" },
  insuranceStatus: { type: "string" },
  PUCStatus: { type: "string" },
  enginrNum: { type: "string" },
  status: { type: "string" },
  description: { type: "string" },
  organization: { type: "string" },
  branchName: { type: "string" },
  images: { type: "string" },
});

export default mongoose.model("vehicle", VehicleSchema);
