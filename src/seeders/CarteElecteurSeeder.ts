import { Citoyen } from "../models/Citoyen"

export const seedCartesElecteurs = async () => {
    await Citoyen.findAll()
        .then(async (citoyens: (Citoyen | null)[]) => {
            citoyens.forEach(async citoyen => {
                await citoyen?.getUser()
                    .then(async (user) => {
                        citoyen?.createCarteElecteur({
                            numero: `E-CARD-${user?.id}`,
                        });
                    });
            });
        });
}