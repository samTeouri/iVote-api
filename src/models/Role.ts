import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';
import { UserRole } from './UserRole';
import { Permission } from './Permission';
import { RolePermission } from './RolePermission';

export class Role extends Model {
    declare id: BigInteger;
    declare name: string;
    declare createdAt: Date;
    declare updatedAt: Date;

    declare getUsers: HasManyGetAssociationsMixin<User>;
    declare setUsers: HasManySetAssociationsMixin<User, number>;
    declare hasUser: HasManyHasAssociationMixin<User, number>;
    declare hasUsers: HasManyHasAssociationsMixin<User, number>;
    declare addUser: HasManyAddAssociationMixin<User, number>;
    declare addUsers: HasManyAddAssociationsMixin<User, number>;
    declare removeUser: HasManyRemoveAssociationMixin<User, number>;
    declare removeUsers: HasManyRemoveAssociationsMixin<User, number>;
    declare createUser: HasManyCreateAssociationMixin<User>;

    declare getPermissions: HasManyGetAssociationsMixin<Permission>;
    declare setPermissions: HasManySetAssociationsMixin<Permission, number>;
    declare hasPermission: HasManyHasAssociationMixin<Permission, number>;
    declare hasPermissions: HasManyHasAssociationsMixin<Permission, number>;
    declare addPermission: HasManyAddAssociationMixin<Permission, number>;
    declare addPermissions: HasManyAddAssociationsMixin<Permission, number>;
    declare removePermission: HasManyRemoveAssociationMixin<Permission, number>;
    declare removePermissions: HasManyRemoveAssociationsMixin<Permission, number>;
    declare createPermission: HasManyCreateAssociationMixin<Permission>;
}

Role.init(
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
    }
    ,{
        sequelize: sequelize,
        modelName: 'Role',
        tableName: 'roles',
    }
);

User.belongsToMany(Role, {
        through: UserRole,
        foreignKey: 'user_id',
    }
);
Role.belongsToMany(User, {
        through: UserRole,
        foreignKey: 'role_id'
    }
);

Role.belongsToMany(Permission, {
        through: RolePermission,
        foreignKey: 'role_id'
    }
);

Permission.belongsToMany(Role, {
        through: RolePermission,
        foreignKey: 'permission_id'
    }
);
