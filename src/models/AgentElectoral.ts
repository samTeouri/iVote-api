import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Citoyen } from "./Citoyen";
import { CarteElecteur } from "./CarteElecteur";
import { BureauVote } from "./BureauVote";

export class AgentElectoral extends Model {
    declare id: BigInteger;
    declare numeroAgent: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getCitoyen: HasOneGetAssociationMixin<Citoyen>;
    declare setCitoyen: HasOneSetAssociationMixin<Citoyen, number>;
    declare createCitoyen: HasOneCreateAssociationMixin<Citoyen>;

    declare getBureauVote: HasOneGetAssociationMixin<BureauVote>;
    declare setBureauVote: HasOneSetAssociationMixin<BureauVote, number>;
    declare createBureauVote: HasOneCreateAssociationMixin<BureauVote>;

    declare getCarteElecteurs: HasManyGetAssociationsMixin<CarteElecteur>;
    declare setCarteElecteurs: HasManySetAssociationsMixin<CarteElecteur, number>;
    declare hasCarteElecteur: HasManyHasAssociationMixin<CarteElecteur, number>;
    declare hasCarteElecteurs: HasManyHasAssociationsMixin<CarteElecteur, number>;
    declare addCarteElecteur: HasManyAddAssociationMixin<CarteElecteur, number>;
    declare addCarteElecteurs: HasManyAddAssociationsMixin<CarteElecteur, number>;
    declare removeCarteElecteur: HasManyRemoveAssociationMixin<CarteElecteur, number>;
    declare removeCarteElecteurs: HasManyRemoveAssociationsMixin<CarteElecteur, number>;
    declare createCarteElecteur: HasManyCreateAssociationMixin<CarteElecteur>;
}

AgentElectoral.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        numeroAgent: {
            type: DataTypes.STRING,
            unique: true,
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
        modelName: 'AgentElectoral',
        tableName: 'agents_electoraux',
    },
)