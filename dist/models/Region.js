"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Region extends sequelize_1.Model {
}
exports.Region = Region;
Region.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: sequelize_1.DataTypes.STRING,
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
    modelName: 'Region',
    tableName: 'regions',
});
//# sourceMappingURL=Region.js.map