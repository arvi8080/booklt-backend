import mongoose, { Document, Schema } from 'mongoose';

export interface IBooking extends Document {
  userName: string;
  userEmail: string;
  userPhone: string;
  experience: mongoose.Types.ObjectId;
  slot: Date;
  promo?: mongoose.Types.ObjectId;
  status: 'confirmed' | 'cancelled';
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPhone: { type: String, required: true },
  experience: { type: Schema.Types.ObjectId, ref: 'Experience', required: true },
  slot: { type: Date, required: true },
  promo: { type: Schema.Types.ObjectId, ref: 'Promo' },
  status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBooking>('Booking', BookingSchema);
