import mongoose, { Document } from 'mongoose';
export interface IExperience extends Document {
    name: string;
    description: string;
    price: number;
    duration: number;
    imageUrl: string;
    availableSlots: string[];
    availability: number;
}
declare const _default: mongoose.Model<IExperience, {}, {}, {}, mongoose.Document<unknown, {}, IExperience, {}, {}> & IExperience & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Experience.d.ts.map