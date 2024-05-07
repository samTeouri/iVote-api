import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Prefecture } from "./Prefecture";
import { BureauVote } from "./BureauVote";

export class Commune extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getPrefecture: HasOneGetAssociationMixin<Prefecture>;
    declare setPrefecture: HasOneSetAssociationMixin<Prefecture, number>;
    declare createPrefecture: HasOneCreateAssociationMixin<Prefecture>;
    
    declare getBureauVote: HasManyGetAssociationsMixin<BureauVote>;
    declare setBureauVotes: HasManySetAssociationsMixin<BureauVote, number>;
    declare hasBureauVote: HasManyHasAssociationMixin<BureauVote, number>;
    declare hasBureauVotes: HasManyHasAssociationsMixin<BureauVote, number>;
    declare addBureauVote: HasManyAddAssociationMixin<BureauVote, number>;
    declare addBureauVotes: HasManyAddAssociationsMixin<BureauVote, number>;
    declare removeBureauVote: HasManyRemoveAssociationMixin<BureauVote, number>;
    declare removeBureauVotes: HasManyRemoveAssociationsMixin<BureauVote, number>;
    declare createBureauVote: HasManyCreateAssociationMixin<BureauVote>;
}

Commune.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize: sequelize,
        modelName: 'Commune',
        tableName: 'communes',
    },
)