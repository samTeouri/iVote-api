import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, Model } from "sequelize";
import { Prefecture } from "./Prefecture";
export declare class Region extends Model {
    id: BigInteger;
    nom: string;
    createdAt: Date;
    upadtedAt: Date;
    getPrefecture: BelongsToManyGetAssociationsMixin<Prefecture>;
    setPrefectures: BelongsToManySetAssociationsMixin<Prefecture, number>;
    hasPrefecture: BelongsToManyHasAssociationMixin<Prefecture, number>;
    hasPrefectures: BelongsToManyHasAssociationsMixin<Prefecture, number>;
    addPrefecture: BelongsToManyAddAssociationMixin<Prefecture, number>;
    addPrefectures: BelongsToManyAddAssociationsMixin<Prefecture, number>;
    removePrefecture: BelongsToManyRemoveAssociationMixin<Prefecture, number>;
    removePrefectures: BelongsToManyRemoveAssociationsMixin<Prefecture, number>;
    createPrefecture: BelongsToManyCreateAssociationMixin<Prefecture>;
}
