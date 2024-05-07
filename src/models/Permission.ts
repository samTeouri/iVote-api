import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Role } from "./Role";

export class Permission extends Model {
    declare id: BigInteger;
    declare name: string;
    declare createdAt: Date;
    declare updatedAt: Date;

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

Permission.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
    },{
        sequelize: sequelize,
        modelName: 'Permission',
        tableName: 'permissions',
    }
);