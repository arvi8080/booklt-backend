import { Request, Response } from 'express';
import Experience from '../models/Experience';

export const getExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await Experience.find();
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
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const experience = await Experience.findById(req.params.id);
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
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
