import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, Model } from "sequelize";
import { Role } from "./Role";
export declare class Permission extends Model {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    getRoles: BelongsToManyGetAssociationsMixin<Role>;
    setRoles: BelongsToManySetAssociationsMixin<Role, number>;
    hasRole: BelongsToManyHasAssociationMixin<Role, number>;
    hasRoles: BelongsToManyHasAssociationsMixin<Role, number>;
    addRole: BelongsToManyAddAssociationMixin<Role, number>;
    addRoles: BelongsToManyAddAssociationsMixin<Role, number>;
    removeRole: BelongsToManyRemoveAssociationMixin<Role, number>;
    removeRoles: BelongsToManyRemoveAssociationsMixin<Role, number>;
    createRole: BelongsToManyCreateAssociationMixin<Role>;
}
