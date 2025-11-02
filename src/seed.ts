import mongoose from 'mongoose';
import Experience from './models/Experience';
import Promo from './models/Promo';
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bookit');
    console.log('MongoDB Connected for seeding');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await Experience.deleteMany({});
    await Promo.deleteMany({});

    // Sample experiences
    const experiences = [
      {
        name: 'Mountain Hiking Adventure',
        description: 'Experience breathtaking views on a guided hike through the mountains.',
        price: 150,
        duration: 4,
        imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000',
        slots: [
          new Date('2024-12-01T09:00:00Z'),
          new Date('2024-12-01T14:00:00Z'),
          new Date('2024-12-02T09:00:00Z'),
        ],
        availability: 1,
      },
      {
        name: 'City Food Tour',
        description: 'Discover local cuisines and hidden gems in the city.',
        price: 80,
        duration: 3,
        imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000',
        slots: [
          new Date('2024-12-03T11:00:00Z'),
          new Date('2024-12-03T16:00:00Z'),
          new Date('2024-12-04T11:00:00Z'),
        ],
        availability: 1,
      },
      {
        name: 'Beach Yoga Session',
        description: 'Relax and rejuvenate with yoga by the sea.',
        price: 50,
        duration: 1,
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000',
        slots: [
          new Date('2024-12-05T07:00:00Z'),
          new Date('2024-12-05T17:00:00Z'),
          new Date('2024-12-06T07:00:00Z'),
        ],
        availability: 1,
      },
    ];

    await Experience.insertMany(experiences);
    console.log('Experiences seeded');

    // Sample promos
    const promos = [
      {
        code: 'SAVE10',
        discountType: 'percentage',
        value: 10,
        expiryDate: new Date('2024-12-31'),
        isActive: true,
      },
      {
        code: 'FLAT100',
        discountType: 'flat',
        value: 100,
        expiryDate: new Date('2024-12-31'),
        isActive: true,
      },
    ];

    await Promo.insertMany(promos);
    console.log('Promos seeded');

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    mongoose.connection.close();
  }
};

connectDB().then(() => {
  seedData();
});
