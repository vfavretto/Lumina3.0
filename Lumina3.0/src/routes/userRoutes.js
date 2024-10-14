import express from 'express';
import authController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/check', authController.checkAuth);
router.get('/user/:id', authController.getUser);

export default router;