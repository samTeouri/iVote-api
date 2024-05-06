import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
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
    getCommune: BelongsToManyGetAssociationsMixin<Commune>;
    setCommunes: BelongsToManySetAssociationsMixin<Commune, number>;
    hasCommune: BelongsToManyHasAssociationMixin<Commune, number>;
    hasCommunes: BelongsToManyHasAssociationsMixin<Commune, number>;
    addCommune: BelongsToManyAddAssociationMixin<Commune, number>;
    addCommunes: BelongsToManyAddAssociationsMixin<Commune, number>;
    removeCommune: BelongsToManyRemoveAssociationMixin<Commune, number>;
    removeCommunes: BelongsToManyRemoveAssociationsMixin<Commune, number>;
    createCommune: BelongsToManyCreateAssociationMixin<Commune>;
}
