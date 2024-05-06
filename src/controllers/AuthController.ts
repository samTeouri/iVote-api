import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { User } from "../models/User";
import { Role } from "../models/Role";
import { AuthService } from "../services/AuthService";

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
    try {
        // Validate form values and manage errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Get user register form values from body
        const { email, phone, address, password } = req.body;

        // Create an instance of user
        const user = await User.build({
            email: email,
            phone: phone,
            password: await bcrypt.hash(password, 15),
        });

        const citizenRole = await Role.findOne({ where: { name: 'citizen' } });

        // Store user in database
        await user.save()

        // Set user citizen role
        await user.addRole(citizenRole as Role);

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Registration failed' });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        // Validate form values and manage errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Get user register form values from body
        const { identifier, password } = req.body;
        
        // Get user instance using given identifier
        const user = await authService.getUserByIdentifier(identifier);

        if (!user?.hasRole(1)) {
            return res.status(403).json({ error: 'You are not authorized to connect via mobile' });
        }

        // User with given identifier exist
        if (user instanceof User) {
            // Check if given password is correct
            if (!await authService.checkPassword(user, password)) {
                return res.status(401).json({ error: 'Password is incorrect' });
            }

            // Token signature
            const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET_KEY as string);

            return res.status(200).json({
                user: user,
                _token: token,
            });
        } else {
            // User with given identifier doesn't exist
            return res.status(401).json({ error: 'Email or phone doesn\'t exist' });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Login failed' });
    }
}