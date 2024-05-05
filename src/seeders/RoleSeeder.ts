import { Role } from "../models/Role";

export const seedRoles = async () => {
    await Role.bulkCreate([
        { name: 'elector' },
        { name: 'electoral agent' },
        { name: 'manager' },
    ]);
}