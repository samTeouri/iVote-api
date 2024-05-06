"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citoyen = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Citoyen extends sequelize_1.Model {
}
exports.Citoyen = Citoyen;
Citoyen.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    prenom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    nom_pere: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    nom_mere: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    cni: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    photo: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
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
    modelName: 'Citoyen',
    tableName: 'citoyens',
});
//# sourceMappingURL=Citoyen.js.map