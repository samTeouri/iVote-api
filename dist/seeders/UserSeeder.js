"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = void 0;
const Role_1 = require("../models/Role");
const User_1 = require("../models/User");
const seedUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const citizenRole = yield Role_1.Role.findOne({ where: { name: 'citizen' } });
    const electoralAgentRole = yield Role_1.Role.findOne({ where: { name: 'electoral agent' } });
    const managerRole = yield Role_1.Role.findOne({ where: { name: 'manager' } });
    const citizen = yield User_1.User.create({
        "email": "sladji@mail.com",
        "phone": 90902024,
        "password": "password1234"
    });
    citizen.addRole(citizenRole);
    const electoralAgent = yield User_1.User.create({
        "email": "dlare@mail.com",
        "phone": 90992002,
        "password": "password1234"
    });
    electoralAgent.addRole(electoralAgentRole);
    const manager = yield User_1.User.create({
        "email": "fgani@mail.com",
        "phone": 91311220,
        "password": "password1234"
    });
    manager.addRole(managerRole);
});
exports.seedUsers = seedUsers;
//# sourceMappingURL=UserSeeder.js.map