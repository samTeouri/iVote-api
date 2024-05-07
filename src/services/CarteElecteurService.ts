import { Request } from "express";
import { User } from "../models/User";
import { CarteElecteur } from "../models/CarteElecteur";
import { AgentElectoral } from "../models/AgentElectoral";
import { Citoyen } from "../models/Citoyen";

export class CarteElecteurService {
    store = async (req: Request) : Promise<CarteElecteur|void> => {
        const user : User = req.body.user;

        const { nom, prenom, dateNaissance, lieuNaissance, profession, nom_mere, nom_pere } = req.body;

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
                                return carteElecteur;
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
    }
}