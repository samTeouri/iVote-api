"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BureauVote = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class BureauVote extends sequelize_1.Model {
}
exports.BureauVote = BureauVote;
BureauVote.init({
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
    modelName: 'BureauVote',
    tableName: 'bureaux_vote',
});
//# sourceMappingURL=BureauVote.js.map