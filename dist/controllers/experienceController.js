"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExperienceById = exports.getExperiences = void 0;
const Experience_1 = __importDefault(require("../models/Experience"));
const getExperiences = async (req, res) => {
    try {
        const experiences = await Experience_1.default.find();
        const formattedExperiences = experiences.map(exp => ({
            _id: exp._id,
            name: exp.name,
            description: exp.description,
            price: exp.price,
            duration: exp.duration,
            imageUrl: exp.imageUrl,
            availableSlots: exp.availableSlots,
        }));
        res.json(formattedExperiences);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getExperiences = getExperiences;
const getExperienceById = async (req, res) => {
    try {
        const experience = await Experience_1.default.findById(req.params.id);
        if (!experience) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        const formattedExperience = {
            _id: experience._id,
            name: experience.name,
            description: experience.description,
            price: experience.price,
            duration: experience.duration,
            imageUrl: experience.imageUrl,
            availableSlots: experience.availableSlots,
        };
        res.json(formattedExperience);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getExperienceById = getExperienceById;
//# sourceMappingURL=experienceController.js.map