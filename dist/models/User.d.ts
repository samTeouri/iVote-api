import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { Role } from "./Role";
import { Citoyen } from "./Citoyen";
export declare class User extends Model {
    id: BigInteger;
    phone: BigInteger;
    email: string;
    password: string;
    createdAt: Date;
    upadtedAt: Date;
    getCitoyen: HasOneGetAssociationMixin<Citoyen>;
    setCitoyen: HasOneSetAssociationMixin<Citoyen, number>;
    createCitoyen: HasOneCreateAssociationMixin<Citoyen>;
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
