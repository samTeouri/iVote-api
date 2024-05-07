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
exports.CarteElecteur = void 0;
const sequelize_1 = require("sequelize");
const Citoyen_1 = require("./Citoyen");
const database_1 = require("../config/database");
class CarteElecteur extends sequelize_1.Model {
    // Function for creating electoral card number
    createNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 1;
            let numero;
            yield this.getCitoyen()
                .then((citoyen) => __awaiter(this, void 0, void 0, function* () {
                while (true) {
                    numero = citoyen.nom.slice(0, 3) + citoyen.prenom[0] + new Date().getFullYear() + i.toString();
                    try {
                        const citoyen = yield Citoyen_1.Citoyen.findOne({ where: { numero: numero } });
                        if (citoyen) {
                            i++;
                            continue;
                        }
                        return numero;
                    }
                    catch (error) {
                        throw error;
                    }
                }
            }))
                .catch((reason) => {
                console.error(`Error while getting citizen instance : ${reason}`);
                throw reason;
            });
            return null;
        });
    }
}
exports.CarteElecteur = CarteElecteur;
CarteElecteur.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    numero: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    estActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    sequelize: database_1.sequelize,
    modelName: 'CarteElecteur',
    tableName: 'cartes_electeurs',
});
//# sourceMappingURL=CarteElecteur.js.map