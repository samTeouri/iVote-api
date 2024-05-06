import { Role } from "../models/Role";
import { User } from "../models/User"

export const seedUsers = async () => {

    const citizenRole = await Role.findOne({ where: { name: 'citizen' } });
    const electoralAgentRole = await Role.findOne({ where: { name: 'electoral agent' } });
    const managerRole = await Role.findOne({ where: { name: 'manager' } });

    const citizen = await User.create({
        "email": "sladji@mail.com",
        "phone": 90902024,
        "password": "password1234"
    });
    citizen.addRole(citizenRole as Role);

    const electoralAgent = await User.create({
        "email": "dlare@mail.com",
        "phone": 90992002,
        "password": "password1234"
    });
    electoralAgent.addRole(electoralAgentRole as Role);

    const manager = await User.create({
        "email": "fgani@mail.com",
        "phone": 91311220,
        "password": "password1234"
    });
    manager.addRole(managerRole as Role);
}
