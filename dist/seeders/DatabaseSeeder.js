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
const AgentElectoralSeeder_1 = require("./AgentElectoralSeeder");
const BureauVoteSeeder_1 = require("./BureauVoteSeeder");
const CarteElecteurSeeder_1 = require("./CarteElecteurSeeder");
const CitoyenSeeder_1 = require("./CitoyenSeeder");
const PrefectureSeeder_1 = require("./PrefectureSeeder");
const RegionSeeder_1 = require("./RegionSeeder");
const RoleSeeder_1 = require("./RoleSeeder");
const UserSeeder_1 = require("./UserSeeder");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, RoleSeeder_1.seedRoles)();
        yield (0, UserSeeder_1.seedUsers)();
        yield (0, RegionSeeder_1.seedRegions)();
        yield (0, PrefectureSeeder_1.seedPrefectures)();
        yield (0, BureauVoteSeeder_1.seedBureauxVote)();
        yield (0, CitoyenSeeder_1.seedCitoyens)();
        yield (0, AgentElectoralSeeder_1.seedAgentsElectoraux)();
        yield (0, CarteElecteurSeeder_1.seedCartesElecteurs)();
    }
    catch (error) {
        console.error(`Error while seeding database: ${error}`);
    }
}))();
//# sourceMappingURL=DatabaseSeeder.js.map