import express from 'express';
import cors from 'cors';
import experienceRoutes from './routes/experienceRoutes';
import bookingRoutes from './routes/bookingRoutes';
import promoRoutes from './routes/promoRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/experiences', experienceRoutes);
app.use('/bookings', bookingRoutes);
app.use('/promo', promoRoutes);

export default app;
