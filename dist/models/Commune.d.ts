import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
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
    getBureauVote: BelongsToManyGetAssociationsMixin<BureauVote>;
    setBureauVotes: BelongsToManySetAssociationsMixin<BureauVote, number>;
    hasBureauVote: BelongsToManyHasAssociationMixin<BureauVote, number>;
    hasBureauVotes: BelongsToManyHasAssociationsMixin<BureauVote, number>;
    addBureauVote: BelongsToManyAddAssociationMixin<BureauVote, number>;
    addBureauVotes: BelongsToManyAddAssociationsMixin<BureauVote, number>;
    removeBureauVote: BelongsToManyRemoveAssociationMixin<BureauVote, number>;
    removeBureauVotes: BelongsToManyRemoveAssociationsMixin<BureauVote, number>;
    createBureauVote: BelongsToManyCreateAssociationMixin<BureauVote>;
}
