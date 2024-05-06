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
exports.seedAgentsElectoraux = void 0;
const Citoyen_1 = require("../models/Citoyen");
const seedAgentsElectoraux = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Citoyen_1.Citoyen.findOne({
        where: {
            nom: 'LARE',
        }
    }).then((citoyen) => __awaiter(void 0, void 0, void 0, function* () {
        yield (citoyen === null || citoyen === void 0 ? void 0 : citoyen.createAgentElectoral({
            numero: 'AG-LARD20241',
        }));
    }));
});
exports.seedAgentsElectoraux = seedAgentsElectoraux;
//# sourceMappingURL=AgentElectoralSeeder.js.map