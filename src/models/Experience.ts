import mongoose, { Document, Schema } from 'mongoose';

export interface IExperience extends Document {
  name: string;
  description: string;
  price: number;
  duration: number;
  imageUrl: string;
  availableSlots: string[];
  availability: number; // max bookings per slot
}

const ExperienceSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  availableSlots: [{ type: String, required: true }],
  availability: { type: Number, required: true, default: 1 },
});

export default mongoose.model<IExperience>('Experience', ExperienceSchema);
