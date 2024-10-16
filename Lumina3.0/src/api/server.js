import express from 'express';
import cors from 'cors';
import connectDB from '../config/database.js';
import authRoutes from '../routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

connectDB();

app.use(express.json());

app.use('/api/auth', (req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
  }, authRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));