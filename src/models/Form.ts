// models/Form.ts

import mongoose, { Document } from "mongoose";

export interface IForm extends Document {
  email: string;
  name: string;
  rollNo: string;
  universityRoll: string;
  branch: string;
  year: string;
  phone: string;
}

const formSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  universityRoll: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  phone: { type: String, required: true },
});

const Form = mongoose.models.Form || mongoose.model<IForm>("Form", formSchema);
export default Form;
