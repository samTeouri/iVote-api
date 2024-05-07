import { Request, Response } from "express";
import { CarteElecteurService } from "../services/CarteElecteurService";

const carteElecteurService = new CarteElecteurService();

export const generateElectoralCard = async (req: Request, res: Response) => {
    try {
        const carteElecteur = await carteElecteurService.store(req);
        if (carteElecteur) return res.status(201).json({ message: "Carte électorale générée avec succès"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur lors de la génération de la carte électorale"});
    }
}