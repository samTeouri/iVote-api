import { DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { User } from "./User";
import { CarteElecteur } from "./CarteElecteur";
import { Commune } from "./Commune";
import { AgentElectoral } from "./AgentElectoral";

export class Citoyen extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare prenom: string;
    declare cni: string;
    declare photo: string;
    declare nom_pere: string;
    declare nom_mere: string;

    declare getUser: HasOneGetAssociationMixin<User>;
    declare setUser: HasOneSetAssociationMixin<User, number>;
    declare createUser: HasOneCreateAssociationMixin<User>;

    declare getCommune: HasOneGetAssociationMixin<Commune>;
    declare setCommune: HasOneSetAssociationMixin<Commune, number>;
    declare createCommune: HasOneCreateAssociationMixin<Commune>;

    declare getAgentElectoral: HasOneGetAssociationMixin<AgentElectoral>;
    declare setAgentElectoral: HasOneSetAssociationMixin<AgentElectoral, number>;
    declare createAgentElectoral: HasOneCreateAssociationMixin<AgentElectoral>;

    declare getCarteElecteur: HasOneGetAssociationMixin<CarteElecteur>;
    declare setCarteElecteur: HasOneSetAssociationMixin<CarteElecteur, number>;
    declare createCarteElecteur: HasOneCreateAssociationMixin<CarteElecteur>;
}

Citoyen.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nom_pere: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nom_mere: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cni: {
            type: DataTypes.STRING,
            unique: true,
        },
        photo: {
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
        modelName: 'Citoyen',
        tableName: 'citoyens',
    },
)