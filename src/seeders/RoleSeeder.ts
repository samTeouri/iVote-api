import { Role } from "../models/Role";

export const seedRoles = async () => {
    await Role.bulkCreate([
        { name: 'citoyen' },
        { name: 'electoral agent' },
        { name: 'manager' },
    ]);
}