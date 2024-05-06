import { User } from "../models/User"

export const seedCitoyens = async () => {
    User.findOne({
        where: {
            id: 'LADS20241'
        }
    }).then(async (user: User | null) => {
        user?.createCitoyen({
            nom: 'LADJI',
            prenom: 'Serigne',
            nom_pere: 'LADJI',
            nom_mere: 'GADO',
        });
    });

    User.findOne({
        where: {
            id: 'LARD20241'
        }
    }).then(async (user: User | null) => {
        user?.createCitoyen({
            nom: 'LARE',
            prenom: 'David',
            nom_pere: 'LARE',
            nom_mere: 'AMOUZOU',
        });
    });

    User.findOne({
        where: {
            id: 'GANF20241'
        }
    }).then(async (user: User | null) => {
        user?.createCitoyen({
            nom: 'GANI',
            prenom: 'Farid',
            nom_pere: 'GANI',
            nom_mere: 'LAWSON',
        });
    });
}