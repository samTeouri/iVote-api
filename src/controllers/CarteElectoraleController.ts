import { Request, Response } from "express";
import { User } from "../models/User";
import { Citoyen } from "../models/Citoyen";

export const electoralCardRequest = async (req: Request, res: Response) => {
    const user : User = req.body.user;

    user.getCitoyen()
        .then(async (citoyen: Citoyen) => {
            
        })
}