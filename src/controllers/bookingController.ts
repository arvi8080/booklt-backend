import { Request, Response } from 'express';
import Booking from '../models/Booking';
import Experience from '../models/Experience';
import Promo from '../models/Promo';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userName, userEmail, userPhone, experienceId, slot, promoCode } = req.body;

    // Check if experience exists
    const experience = await Experience.findById(experienceId);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    // Check if slot is available
    if (!experience.availableSlots.includes(slot)) {
      return res.status(400).json({ message: 'Invalid slot' });
    }

    // Check for double-booking
    const existingBooking = await Booking.findOne({ experience: experienceId, slot: new Date(slot) });
    if (existingBooking) {
      return res.status(400).json({ message: 'Slot already booked' });
    }

    // Validate promo if provided
    let promo = null;
    if (promoCode) {
      promo = await Promo.findOne({ code: promoCode, isActive: true, expiryDate: { $gte: new Date() } });
      if (!promo) {
        return res.status(400).json({ message: 'Invalid promo code' });
      }
    }

    // Create booking
    const booking = new Booking({
      userName,
      userEmail,
      userPhone,
      experience: experienceId,
      slot: new Date(slot),
      promo: promo ? promo._id : undefined,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
