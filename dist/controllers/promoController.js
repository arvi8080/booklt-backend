"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePromo = void 0;
const Promo_1 = __importDefault(require("../models/Promo"));
const validatePromo = async (req, res) => {
    try {
        const { code } = req.body;
        const promo = await Promo_1.default.findOne({ code, isActive: true, expiryDate: { $gte: new Date() } });
        if (!promo) {
            return res.json({ valid: false, discount: 0, message: 'Invalid promo code' });
        }
        res.json({
            valid: true,
            discount: promo.discountType === 'percentage' ? promo.value / 100 : promo.value,
            message: 'Promo code applied successfully'
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.validatePromo = validatePromo;
//# sourceMappingURL=promoController.js.map