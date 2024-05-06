import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { User } from "./User";
import { CarteElecteur } from "./CarteElecteur";

export class AgentElectoral extends Model {
    declare id: BigInteger;
    declare numeroAgent: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getUser: HasOneGetAssociationMixin<User>;
    declare setUser: HasOneSetAssociationMixin<User, number>;
    declare createUser: HasOneCreateAssociationMixin<User>;

    declare getCarteElecteurs: BelongsToManyGetAssociationsMixin<CarteElecteur>;
    declare setCarteElecteurs: BelongsToManySetAssociationsMixin<CarteElecteur, number>;
    declare hasCarteElecteur: BelongsToManyHasAssociationMixin<CarteElecteur, number>;
    declare hasCarteElecteurs: BelongsToManyHasAssociationsMixin<CarteElecteur, number>;
    declare addCarteElecteur: BelongsToManyAddAssociationMixin<CarteElecteur, number>;
    declare addCarteElecteurs: BelongsToManyAddAssociationsMixin<CarteElecteur, number>;
    declare removeCarteElecteur: BelongsToManyRemoveAssociationMixin<CarteElecteur, number>;
    declare removeCarteElecteurs: BelongsToManyRemoveAssociationsMixin<CarteElecteur, number>;
    declare createCarteElecteur: BelongsToManyCreateAssociationMixin<CarteElecteur>;
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