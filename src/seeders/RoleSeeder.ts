import { Role } from "../models/Role";

export const seedRoles = async () => {
    await Role.bulkCreate([
        { name: 'citizen' },
        { name: 'electoral agent' },
        { name: 'manager' },
    ]);
}