import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Role } from "./Role";
import { CarteElecteur } from "./CarteElecteur";
import { Citoyen } from "./Citoyen";

export class User extends Model {
    declare id: BigInteger;
    declare phone: BigInteger;
    declare email: string;
    declare password: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getCitoyen: HasOneGetAssociationMixin<Citoyen>;
    declare setCitoyen: HasOneSetAssociationMixin<Citoyen, number>;
    declare createCitoyen: HasOneCreateAssociationMixin<Citoyen>;

    declare getRoles: HasManyGetAssociationsMixin<Role>;
    declare setRoles: HasManySetAssociationsMixin<Role, number>;
    declare hasRole: HasManyHasAssociationMixin<Role, number>;
    declare hasRoles: HasManyHasAssociationsMixin<Role, number>;
    declare addRole: HasManyAddAssociationMixin<Role, number>;
    declare addRoles: HasManyAddAssociationsMixin<Role, number>;
    declare removeRole: HasManyRemoveAssociationMixin<Role, number>;
    declare removeRoles: HasManyRemoveAssociationsMixin<Role, number>;
    declare createRole: HasManyCreateAssociationMixin<Role>;
}

User.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        phone: {
            type: DataTypes.BIGINT,
            allowNull: true,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
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
        modelName: 'User',
        tableName: 'users',
    },
);
