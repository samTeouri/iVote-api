import { seedAgentsElectoraux } from "./AgentElectoralSeeder";
import { seedBureauxVote } from "./BureauVoteSeeder";
import { seedCartesElecteurs } from "./CarteElecteurSeeder";
import { seedCitoyens } from "./CitoyenSeeder";
import { seedPrefectures } from "./PrefectureSeeder";
import { seedRegions } from "./RegionSeeder";
import { seedRoles } from "./RoleSeeder";
import { seedUsers } from "./UserSeeder";

(async () => {
    try {
        await seedRoles();
        await seedUsers();
        await seedRegions();
        await seedPrefectures();
        await seedBureauxVote();
        await seedCitoyens();
        await seedAgentsElectoraux();
        await seedCartesElecteurs();
    } catch (error) {
        console.error(`Error while seeding database: ${error}`);
    }
})();