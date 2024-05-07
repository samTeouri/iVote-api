import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model } from "sequelize";
import { Role } from "./Role";
export declare class Permission extends Model {
    id: BigInteger;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    getRoles: HasManyGetAssociationsMixin<Role>;
    setRoles: HasManySetAssociationsMixin<Role, number>;
    hasRole: HasManyHasAssociationMixin<Role, number>;
    hasRoles: HasManyHasAssociationsMixin<Role, number>;
    addRole: HasManyAddAssociationMixin<Role, number>;
    addRoles: HasManyAddAssociationsMixin<Role, number>;
    removeRole: HasManyRemoveAssociationMixin<Role, number>;
    removeRoles: HasManyRemoveAssociationsMixin<Role, number>;
    createRole: HasManyCreateAssociationMixin<Role>;
}
