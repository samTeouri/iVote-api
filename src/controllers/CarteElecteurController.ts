import { Request, Response } from "express";
import { User } from "../models/User";
import { Citoyen } from "../models/Citoyen";
import { CarteElecteur } from "../models/CarteElecteur";
import { AgentElectoral } from "../models/AgentElectoral";

export const createElectoralCard = async (req: Request, res: Response) => {
    const user : User = req.body.user;

    const { nom, prenom, dateNaissance, lieuNaissance, profession, nom_mere, nom_pere } = req.body;
    
    try {
        await user.getCitoyen()
            .then(async (citoyen: Citoyen) => {
                await citoyen.update({
                    nom: nom,
                    prenom: prenom,
                    dateNaissance: dateNaissance,
                    lieuNaissance: lieuNaissance,
                    profession: profession,
                    nom_pere: nom_pere,
                    nom_mere: nom_mere,
                }).catch((reason: any) => {
                    throw reason;
                });

                await citoyen.createCarteElecteur()
                    .then(async (carteElecteur: CarteElecteur) => {
                        carteElecteur.update({
                            numero: carteElecteur.createNumber(),
                        }).catch((reason: any) => {
                            throw reason;
                        });

                        (await user.getCitoyen()).getAgentElectoral()
                            .then(async (agentElectoral: AgentElectoral) => {
                                await carteElecteur.setAgentElectoral(agentElectoral);
                            }).catch((reason: any) => {
                                throw reason;
                            });
                    })
                    .catch((reason: any) => {
                        throw reason;
                    });
            }).catch((reason: any) => {
                throw reason;
            });
    } catch (error) {
        console.error(error);
    }
}