import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { Region } from "./Region";
import { Commune } from "./Commune";
export declare class Prefecture extends Model {
    id: BigInteger;
    nom: string;
    createdAt: Date;
    upadtedAt: Date;
    getRegion: HasOneGetAssociationMixin<Region>;
    setRegion: HasOneSetAssociationMixin<Region, number>;
    createRegion: HasOneCreateAssociationMixin<Region>;
    getCommune: HasManyGetAssociationsMixin<Commune>;
    setCommunes: HasManySetAssociationsMixin<Commune, number>;
    hasCommune: HasManyHasAssociationMixin<Commune, number>;
    hasCommunes: HasManyHasAssociationsMixin<Commune, number>;
    addCommune: HasManyAddAssociationMixin<Commune, number>;
    addCommunes: HasManyAddAssociationsMixin<Commune, number>;
    removeCommune: HasManyRemoveAssociationMixin<Commune, number>;
    removeCommunes: HasManyRemoveAssociationsMixin<Commune, number>;
    createCommune: HasManyCreateAssociationMixin<Commune>;
}
