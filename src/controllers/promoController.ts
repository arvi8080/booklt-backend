import { Request, Response } from 'express';
import Promo from '../models/Promo';

export const validatePromo = async (req: Request, res: Response) => {
  try {
    const { code } = req.body;
    const promo = await Promo.findOne({ code, isActive: true, expiryDate: { $gte: new Date() } });
    if (!promo) {
      return res.json({ valid: false, discount: 0, message: 'Invalid promo code' });
    }
    res.json({
      valid: true,
      discount: promo.discountType === 'percentage' ? promo.value / 100 : promo.value,
      message: 'Promo code applied successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
