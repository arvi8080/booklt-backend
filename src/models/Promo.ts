import mongoose, { Document, Schema } from 'mongoose';

export interface IPromo extends Document {
  code: string;
  discountType: 'percentage' | 'flat';
  value: number;
  expiryDate: Date;
  isActive: boolean;
}

const PromoSchema: Schema = new Schema({
  code: { type: String, required: true, unique: true },
  discountType: { type: String, enum: ['percentage', 'flat'], required: true },
  value: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
});

export default mongoose.model<IPromo>('Promo', PromoSchema);
