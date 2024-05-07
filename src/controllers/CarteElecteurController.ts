import { Request, Response } from "express";
import { CarteElecteurService } from "../services/CarteElecteurService";
import { RequestValidationService } from "../services/RequestValidationService";

const carteElecteurService = new CarteElecteurService();
const requestValidationService = new RequestValidationService();

export const generateElectoralCard = async (req: Request, res: Response) => {
    try {
        // Validate form values and manage errors
        requestValidationService.validateRequest(req, res);
        const carteElecteur = await carteElecteurService.store(req);
        if (carteElecteur) return res.status(201).json({ message: "Carte électorale générée avec succès"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur lors de la génération de la carte électorale"});
    }
}