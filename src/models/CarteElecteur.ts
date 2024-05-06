import { DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { User } from "./User";
import { sequelize } from "../config/database";
import { BureauVote } from "./BureauVote";

export class CarteElecteur extends Model {
    declare id: BigInteger;
    declare numero: string;
    declare estActive: boolean;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getUser: HasOneGetAssociationMixin<User>;
    declare setUser: HasOneSetAssociationMixin<User, number>;
    declare createUser: HasOneCreateAssociationMixin<User>;

    declare getCarteElecteur: HasOneGetAssociationMixin<CarteElecteur>;
    declare setCarteElecteur: HasOneSetAssociationMixin<CarteElecteur, number>;
    declare createCarteElecteur: HasOneCreateAssociationMixin<CarteElecteur>;
}

CarteElecteur.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        numero: {
            type: DataTypes.STRING,
            unique: true,
        },
        estActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        modelName: 'CarteElecteur',
        tableName: 'cartes_electeurs',
    },
)