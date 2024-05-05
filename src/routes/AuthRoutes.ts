import * as express from 'express';
import * as AuthController from '../controllers/AuthController';


export const router = express.Router();

// Register route
router.post('/register', AuthController.register);

// Login route
router.post('/login', AuthController.login);