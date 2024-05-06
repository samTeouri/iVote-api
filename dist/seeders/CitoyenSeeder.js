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
exports.seedCitoyens = void 0;
const User_1 = require("../models/User");
const seedCitoyens = () => __awaiter(void 0, void 0, void 0, function* () {
    User_1.User.findOne({
        where: {
            id: 'LADS20241'
        }
    }).then((user) => __awaiter(void 0, void 0, void 0, function* () {
        user === null || user === void 0 ? void 0 : user.createCitoyen({
            nom: 'LADJI',
            prenom: 'Serigne',
            nom_pere: 'LADJI',
            nom_mere: 'GADO',
        });
    }));
    User_1.User.findOne({
        where: {
            id: 'LARD20241'
        }
    }).then((user) => __awaiter(void 0, void 0, void 0, function* () {
        user === null || user === void 0 ? void 0 : user.createCitoyen({
            nom: 'LARE',
            prenom: 'David',
            nom_pere: 'LARE',
            nom_mere: 'AMOUZOU',
        });
    }));
    User_1.User.findOne({
        where: {
            id: 'GANF20241'
        }
    }).then((user) => __awaiter(void 0, void 0, void 0, function* () {
        user === null || user === void 0 ? void 0 : user.createCitoyen({
            nom: 'GANI',
            prenom: 'Farid',
            nom_pere: 'GANI',
            nom_mere: 'LAWSON',
        });
    }));
});
exports.seedCitoyens = seedCitoyens;
//# sourceMappingURL=CitoyenSeeder.js.map