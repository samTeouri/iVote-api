"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentElectoral = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class AgentElectoral extends sequelize_1.Model {
}
exports.AgentElectoral = AgentElectoral;
AgentElectoral.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    numeroAgent: {
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
    modelName: 'AgentElectoral',
    tableName: 'agents_electoraux',
});
//# sourceMappingURL=AgentElectoral.js.map