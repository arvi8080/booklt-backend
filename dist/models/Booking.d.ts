import mongoose, { Document } from 'mongoose';
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
declare const _default: mongoose.Model<IBooking, {}, {}, {}, mongoose.Document<unknown, {}, IBooking, {}, {}> & IBooking & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Booking.d.ts.map