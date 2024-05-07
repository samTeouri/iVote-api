import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { Prefecture } from "./Prefecture";
import { BureauVote } from "./BureauVote";
export declare class Commune extends Model {
    id: BigInteger;
    nom: string;
    createdAt: Date;
    upadtedAt: Date;
    getPrefecture: HasOneGetAssociationMixin<Prefecture>;
    setPrefecture: HasOneSetAssociationMixin<Prefecture, number>;
    createPrefecture: HasOneCreateAssociationMixin<Prefecture>;
    getBureauVote: HasManyGetAssociationsMixin<BureauVote>;
    setBureauVotes: HasManySetAssociationsMixin<BureauVote, number>;
    hasBureauVote: HasManyHasAssociationMixin<BureauVote, number>;
    hasBureauVotes: HasManyHasAssociationsMixin<BureauVote, number>;
    addBureauVote: HasManyAddAssociationMixin<BureauVote, number>;
    addBureauVotes: HasManyAddAssociationsMixin<BureauVote, number>;
    removeBureauVote: HasManyRemoveAssociationMixin<BureauVote, number>;
    removeBureauVotes: HasManyRemoveAssociationsMixin<BureauVote, number>;
    createBureauVote: HasManyCreateAssociationMixin<BureauVote>;
}
