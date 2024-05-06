import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { Commune } from "./Commune";
import { Citoyen } from "./Citoyen";
export declare class BureauVote extends Model {
    id: BigInteger;
    nom: string;
    createdAt: Date;
    upadtedAt: Date;
    getCommune: HasOneGetAssociationMixin<Commune>;
    setCommune: HasOneSetAssociationMixin<Commune, number>;
    createCommune: HasOneCreateAssociationMixin<Commune>;
    getCitoyen: BelongsToManyGetAssociationsMixin<Citoyen>;
    setCitoyens: BelongsToManySetAssociationsMixin<Citoyen, number>;
    hasCitoyen: BelongsToManyHasAssociationMixin<Citoyen, number>;
    hasCitoyens: BelongsToManyHasAssociationsMixin<Citoyen, number>;
    addCitoyen: BelongsToManyAddAssociationMixin<Citoyen, number>;
    addCitoyens: BelongsToManyAddAssociationsMixin<Citoyen, number>;
    removeCitoyen: BelongsToManyRemoveAssociationMixin<Citoyen, number>;
    removeCitoyens: BelongsToManyRemoveAssociationsMixin<Citoyen, number>;
    createCitoyen: BelongsToManyCreateAssociationMixin<Citoyen>;
}
