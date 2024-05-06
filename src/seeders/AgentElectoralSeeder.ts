import { Citoyen } from "../models/Citoyen"

export const seedAgentsElectoraux = async () => {
    await Citoyen.findOne({
        where: {
            nom: 'LARE',
        }
    }).then(async (citoyen: Citoyen | null) => {
        await citoyen?.createAgentElectoral({
            numero: 'AG-LARD20241',
        });
    });
}