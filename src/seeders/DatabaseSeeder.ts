import { seedRoles } from "./RoleSeeder";
import { seedUsers } from "./UserSeeder";

const seed = async () => {
    await seedRoles(),
    await seedUsers()
};

seed();