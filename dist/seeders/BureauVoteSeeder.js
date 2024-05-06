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
exports.seedBureauxVote = void 0;
const BureauVote_1 = require("../models/BureauVote");
const Commune_1 = require("../models/Commune");
const seedBureauxVote = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Commune_1.Commune.findAll()
        .then((communes) => __awaiter(void 0, void 0, void 0, function* () {
        communes.forEach(commune => {
            BureauVote_1.BureauVote.bulkCreate([
                {
                    name: `Bureau ${commune.nom}-1`,
                },
                {
                    name: `Bureau ${commune.nom}-2`,
                },
                {
                    name: `Bureau ${commune.nom}-3`,
                },
                {
                    name: `Bureau ${commune.nom}-4`,
                },
            ]);
        });
    }));
});
exports.seedBureauxVote = seedBureauxVote;
//# sourceMappingURL=BureauVoteSeeder.js.map