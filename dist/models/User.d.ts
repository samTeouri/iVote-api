import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
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
