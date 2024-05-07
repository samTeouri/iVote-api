import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Commune } from "./Commune";
import { Citoyen } from "./Citoyen";
import { AgentElectoral } from "./AgentElectoral";

export class BureauVote extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getCommune: HasOneGetAssociationMixin<Commune>;
    declare setCommune: HasOneSetAssociationMixin<Commune, number>;
    declare createCommune: HasOneCreateAssociationMixin<Commune>;

    declare getCitoyen: HasManyGetAssociationsMixin<Citoyen>;
    declare setCitoyens: HasManySetAssociationsMixin<Citoyen, number>;
    declare hasCitoyen: HasManyHasAssociationMixin<Citoyen, number>;
    declare hasCitoyens: HasManyHasAssociationsMixin<Citoyen, number>;
    declare addCitoyen: HasManyAddAssociationMixin<Citoyen, number>;
    declare addCitoyens: HasManyAddAssociationsMixin<Citoyen, number>;
    declare removeCitoyen: HasManyRemoveAssociationMixin<Citoyen, number>;
    declare removeCitoyens: HasManyRemoveAssociationsMixin<Citoyen, number>;
    declare createCitoyen: HasManyCreateAssociationMixin<Citoyen>;

    declare getAgentElectoral: HasManyGetAssociationsMixin<AgentElectoral>;
    declare setAgentElectoraux: HasManySetAssociationsMixin<AgentElectoral, number>;
    declare hasAgentElectoral: HasManyHasAssociationMixin<AgentElectoral, number>;
    declare hasAgentElectoraux: HasManyHasAssociationsMixin<AgentElectoral, number>;
    declare addAgentElectoral: HasManyAddAssociationMixin<AgentElectoral, number>;
    declare addAgentElectoraux: HasManyAddAssociationsMixin<AgentElectoral, number>;
    declare removeAgentElectoral: HasManyRemoveAssociationMixin<AgentElectoral, number>;
    declare removeAgentElectoraux: HasManyRemoveAssociationsMixin<AgentElectoral, number>;
    declare createAgentElectoral: HasManyCreateAssociationMixin<AgentElectoral>;
}

BureauVote.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize: sequelize,
        modelName: 'BureauVote',
        tableName: 'bureaux_vote',
    },
)