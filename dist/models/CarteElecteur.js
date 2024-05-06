"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarteElecteur = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class CarteElecteur extends sequelize_1.Model {
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