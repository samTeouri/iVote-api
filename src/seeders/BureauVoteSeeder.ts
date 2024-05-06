import { BureauVote } from "../models/BureauVote";
import { Commune } from "../models/Commune"

export const seedBureauxVote = async () => {
    await Commune.findAll()
            .then(async (communes: Commune[]) => {
                communes.forEach(commune => {
                    BureauVote.bulkCreate(
                        [
                            {
                                name: `Bureau ${commune.nom}-1`,
                            },
                            {
                                name: `Bureau ${commune.nom}-2`,
                            },
                            {
                                name: `Bureau ${commune.nom}-3`,
                            },
                            {
                                name: `Bureau ${commune.nom}-4`,
                            },
                        ]
                    );
                });
            });
}