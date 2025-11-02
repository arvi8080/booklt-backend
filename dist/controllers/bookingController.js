"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const Booking_1 = __importDefault(require("../models/Booking"));
const Experience_1 = __importDefault(require("../models/Experience"));
const Promo_1 = __importDefault(require("../models/Promo"));
const createBooking = async (req, res) => {
    try {
        const { userName, userEmail, userPhone, experienceId, slot, promoCode } = req.body;
        // Check if experience exists
        const experience = await Experience_1.default.findById(experienceId);
        if (!experience) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        // Check if slot is available
        if (!experience.availableSlots.includes(slot)) {
            return res.status(400).json({ message: 'Invalid slot' });
        }
        // Check for double-booking
        const existingBooking = await Booking_1.default.findOne({ experience: experienceId, slot: new Date(slot) });
        if (existingBooking) {
            return res.status(400).json({ message: 'Slot already booked' });
        }
        // Validate promo if provided
        let promo = null;
        if (promoCode) {
            promo = await Promo_1.default.findOne({ code: promoCode, isActive: true, expiryDate: { $gte: new Date() } });
            if (!promo) {
                return res.status(400).json({ message: 'Invalid promo code' });
            }
        }
        // Create booking
        const booking = new Booking_1.default({
            userName,
            userEmail,
            userPhone,
            experience: experienceId,
            slot: new Date(slot),
            promo: promo ? promo._id : undefined,
        });
        await booking.save();
        res.status(201).json(booking);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createBooking = createBooking;
//# sourceMappingURL=bookingController.js.map