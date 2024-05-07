import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model } from "sequelize";
import { Prefecture } from "./Prefecture";
export declare class Region extends Model {
    id: BigInteger;
    nom: string;
    createdAt: Date;
    upadtedAt: Date;
    getPrefecture: HasManyGetAssociationsMixin<Prefecture>;
    setPrefectures: HasManySetAssociationsMixin<Prefecture, number>;
    hasPrefecture: HasManyHasAssociationMixin<Prefecture, number>;
    hasPrefectures: HasManyHasAssociationsMixin<Prefecture, number>;
    addPrefecture: HasManyAddAssociationMixin<Prefecture, number>;
    addPrefectures: HasManyAddAssociationsMixin<Prefecture, number>;
    removePrefecture: HasManyRemoveAssociationMixin<Prefecture, number>;
    removePrefectures: HasManyRemoveAssociationsMixin<Prefecture, number>;
    createPrefecture: HasManyCreateAssociationMixin<Prefecture>;
}
