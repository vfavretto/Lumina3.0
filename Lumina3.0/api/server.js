import express from 'express';
import cors from 'cors';
import connectDB from '../src/config/database.js';
import authRoutes from '../src/routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: 'https://lumina-nine-plum.vercel.app'
}));

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));