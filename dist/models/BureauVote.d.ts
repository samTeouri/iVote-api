import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { CarteElecteur } from "./CarteElecteur";
import { Commune } from "./Commune";
export declare class BureauVote extends Model {
    id: BigInteger;
    nom: string;
    createdAt: Date;
    upadtedAt: Date;
    getCommune: HasOneGetAssociationMixin<Commune>;
    setCommune: HasOneSetAssociationMixin<Commune, number>;
    createCommune: HasOneCreateAssociationMixin<Commune>;
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
