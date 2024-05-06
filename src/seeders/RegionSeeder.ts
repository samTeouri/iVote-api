import { Region } from "../models/Region"

export const seedRegions = async () => {
    await Region.bulkCreate(
        [
            {
                nom: "savanes"
            },
            {
                nom: "kara"
            },
            {
                nom: "centrale"
            },
            {
                nom: "plateaux"
            },
            {
                nom: "maritime"
            },
        ]
    );
}