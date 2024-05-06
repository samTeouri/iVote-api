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
exports.seedCartesElecteurs = void 0;
const Citoyen_1 = require("../models/Citoyen");
const seedCartesElecteurs = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Citoyen_1.Citoyen.findAll()
        .then((citoyens) => __awaiter(void 0, void 0, void 0, function* () {
        citoyens.forEach((citoyen) => __awaiter(void 0, void 0, void 0, function* () {
            yield (citoyen === null || citoyen === void 0 ? void 0 : citoyen.getUser().then((user) => __awaiter(void 0, void 0, void 0, function* () {
                citoyen === null || citoyen === void 0 ? void 0 : citoyen.createCarteElecteur({
                    numero: `E-CARD-${user === null || user === void 0 ? void 0 : user.id}`,
                });
            })));
        }));
    }));
});
exports.seedCartesElecteurs = seedCartesElecteurs;
//# sourceMappingURL=CarteElecteurSeeder.js.map