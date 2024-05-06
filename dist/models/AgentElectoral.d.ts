import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { User } from "./User";
import { CarteElecteur } from "./CarteElecteur";
export declare class AgentElectoral extends Model {
    id: BigInteger;
    numeroAgent: string;
    createdAt: Date;
    upadtedAt: Date;
    getUser: HasOneGetAssociationMixin<User>;
    setUser: HasOneSetAssociationMixin<User, number>;
    createUser: HasOneCreateAssociationMixin<User>;
    getCarteElecteurs: BelongsToManyGetAssociationsMixin<CarteElecteur>;
    setCarteElecteurs: BelongsToManySetAssociationsMixin<CarteElecteur, number>;
    hasCarteElecteur: BelongsToManyHasAssociationMixin<CarteElecteur, number>;
    hasCarteElecteurs: BelongsToManyHasAssociationsMixin<CarteElecteur, number>;
    addCarteElecteur: BelongsToManyAddAssociationMixin<CarteElecteur, number>;
    addCarteElecteurs: BelongsToManyAddAssociationsMixin<CarteElecteur, number>;
    removeCarteElecteur: BelongsToManyRemoveAssociationMixin<CarteElecteur, number>;
    removeCarteElecteurs: BelongsToManyRemoveAssociationsMixin<CarteElecteur, number>;
    createCarteElecteur: BelongsToManyCreateAssociationMixin<CarteElecteur>;
}
