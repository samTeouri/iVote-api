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
exports.seedRegions = void 0;
const Region_1 = require("../models/Region");
const seedRegions = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Region_1.Region.bulkCreate([
        {
            nom: "savanes"
        },
        {
            nom: "kara"
        },
        {
            nom: "centrale"
        },
        {
            nom: "plateaux"
        },
        {
            nom: "maritime"
        },
    ]);
});
exports.seedRegions = seedRegions;
//# sourceMappingURL=RegionSeeder.js.map