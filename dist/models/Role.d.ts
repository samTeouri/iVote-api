import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, Model } from 'sequelize';
import { User } from './User';
import { Permission } from './Permission';
export declare class Role extends Model {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    getUsers: BelongsToManyGetAssociationsMixin<User>;
    setUsers: BelongsToManySetAssociationsMixin<User, number>;
    hasUser: BelongsToManyHasAssociationMixin<User, number>;
    hasUsers: BelongsToManyHasAssociationsMixin<User, number>;
    addUser: BelongsToManyAddAssociationMixin<User, number>;
    addUsers: BelongsToManyAddAssociationsMixin<User, number>;
    removeUser: BelongsToManyRemoveAssociationMixin<User, number>;
    removeUsers: BelongsToManyRemoveAssociationsMixin<User, number>;
    createUser: BelongsToManyCreateAssociationMixin<User>;
    getPermissions: BelongsToManyGetAssociationsMixin<Permission>;
    setPermissions: BelongsToManySetAssociationsMixin<Permission, number>;
    hasPermission: BelongsToManyHasAssociationMixin<Permission, number>;
    hasPermissions: BelongsToManyHasAssociationsMixin<Permission, number>;
    addPermission: BelongsToManyAddAssociationMixin<Permission, number>;
    addPermissions: BelongsToManyAddAssociationsMixin<Permission, number>;
    removePermission: BelongsToManyRemoveAssociationMixin<Permission, number>;
    removePermissions: BelongsToManyRemoveAssociationsMixin<Permission, number>;
    createPermission: BelongsToManyCreateAssociationMixin<Permission>;
}
