import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model } from 'sequelize';
import { User } from './User';
import { Permission } from './Permission';
export declare class Role extends Model {
    id: BigInteger;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    getUsers: HasManyGetAssociationsMixin<User>;
    setUsers: HasManySetAssociationsMixin<User, number>;
    hasUser: HasManyHasAssociationMixin<User, number>;
    hasUsers: HasManyHasAssociationsMixin<User, number>;
    addUser: HasManyAddAssociationMixin<User, number>;
    addUsers: HasManyAddAssociationsMixin<User, number>;
    removeUser: HasManyRemoveAssociationMixin<User, number>;
    removeUsers: HasManyRemoveAssociationsMixin<User, number>;
    createUser: HasManyCreateAssociationMixin<User>;
    getPermissions: HasManyGetAssociationsMixin<Permission>;
    setPermissions: HasManySetAssociationsMixin<Permission, number>;
    hasPermission: HasManyHasAssociationMixin<Permission, number>;
    hasPermissions: HasManyHasAssociationsMixin<Permission, number>;
    addPermission: HasManyAddAssociationMixin<Permission, number>;
    addPermissions: HasManyAddAssociationsMixin<Permission, number>;
    removePermission: HasManyRemoveAssociationMixin<Permission, number>;
    removePermissions: HasManyRemoveAssociationsMixin<Permission, number>;
    createPermission: HasManyCreateAssociationMixin<Permission>;
}
