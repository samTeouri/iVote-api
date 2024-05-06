import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Prefecture } from "./Prefecture";
import { BureauVote } from "./BureauVote";
import { Citoyen } from "./Citoyen";

export class Commune extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getPrefecture: HasOneGetAssociationMixin<Prefecture>;
    declare setPrefecture: HasOneSetAssociationMixin<Prefecture, number>;
    declare createPrefecture: HasOneCreateAssociationMixin<Prefecture>;

    declare getCitoyen: BelongsToManyGetAssociationsMixin<Citoyen>;
    declare setCitoyens: BelongsToManySetAssociationsMixin<Citoyen, number>;
    declare hasCitoyen: BelongsToManyHasAssociationMixin<Citoyen, number>;
    declare hasCitoyens: BelongsToManyHasAssociationsMixin<Citoyen, number>;
    declare addCitoyen: BelongsToManyAddAssociationMixin<Citoyen, number>;
    declare addCitoyens: BelongsToManyAddAssociationsMixin<Citoyen, number>;
    declare removeCitoyen: BelongsToManyRemoveAssociationMixin<Citoyen, number>;
    declare removeCitoyens: BelongsToManyRemoveAssociationsMixin<Citoyen, number>;
    declare createCitoyen: BelongsToManyCreateAssociationMixin<Citoyen>;
    
    declare getBureauVote: BelongsToManyGetAssociationsMixin<BureauVote>;
    declare setBureauVotes: BelongsToManySetAssociationsMixin<BureauVote, number>;
    declare hasBureauVote: BelongsToManyHasAssociationMixin<BureauVote, number>;
    declare hasBureauVotes: BelongsToManyHasAssociationsMixin<BureauVote, number>;
    declare addBureauVote: BelongsToManyAddAssociationMixin<BureauVote, number>;
    declare addBureauVotes: BelongsToManyAddAssociationsMixin<BureauVote, number>;
    declare removeBureauVote: BelongsToManyRemoveAssociationMixin<BureauVote, number>;
    declare removeBureauVotes: BelongsToManyRemoveAssociationsMixin<BureauVote, number>;
    declare createBureauVote: BelongsToManyCreateAssociationMixin<BureauVote>;
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