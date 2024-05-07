import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { Citoyen } from "./Citoyen";
import { CarteElecteur } from "./CarteElecteur";
import { BureauVote } from "./BureauVote";
export declare class AgentElectoral extends Model {
    id: BigInteger;
    numeroAgent: string;
    createdAt: Date;
    upadtedAt: Date;
    getCitoyen: HasOneGetAssociationMixin<Citoyen>;
    setCitoyen: HasOneSetAssociationMixin<Citoyen, number>;
    createCitoyen: HasOneCreateAssociationMixin<Citoyen>;
    getBureauVote: HasOneGetAssociationMixin<BureauVote>;
    setBureauVote: HasOneSetAssociationMixin<BureauVote, number>;
    createBureauVote: HasOneCreateAssociationMixin<BureauVote>;
    getCarteElecteurs: HasManyGetAssociationsMixin<CarteElecteur>;
    setCarteElecteurs: HasManySetAssociationsMixin<CarteElecteur, number>;
    hasCarteElecteur: HasManyHasAssociationMixin<CarteElecteur, number>;
    hasCarteElecteurs: HasManyHasAssociationsMixin<CarteElecteur, number>;
    addCarteElecteur: HasManyAddAssociationMixin<CarteElecteur, number>;
    addCarteElecteurs: HasManyAddAssociationsMixin<CarteElecteur, number>;
    removeCarteElecteur: HasManyRemoveAssociationMixin<CarteElecteur, number>;
    removeCarteElecteurs: HasManyRemoveAssociationsMixin<CarteElecteur, number>;
    createCarteElecteur: HasManyCreateAssociationMixin<CarteElecteur>;
}
