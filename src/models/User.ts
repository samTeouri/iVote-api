import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
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

    declare getRoles: BelongsToManyGetAssociationsMixin<Role>;
    declare setRoles: BelongsToManySetAssociationsMixin<Role, number>;
    declare hasRole: BelongsToManyHasAssociationMixin<Role, number>;
    declare hasRoles: BelongsToManyHasAssociationsMixin<Role, number>;
    declare addRole: BelongsToManyAddAssociationMixin<Role, number>;
    declare addRoles: BelongsToManyAddAssociationsMixin<Role, number>;
    declare removeRole: BelongsToManyRemoveAssociationMixin<Role, number>;
    declare removeRoles: BelongsToManyRemoveAssociationsMixin<Role, number>;
    declare createRole: BelongsToManyCreateAssociationMixin<Role>;
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
