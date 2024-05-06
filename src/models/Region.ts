import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Prefecture } from "./Prefecture";

export class Region extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getPrefecture: BelongsToManyGetAssociationsMixin<Prefecture>;
    declare setPrefectures: BelongsToManySetAssociationsMixin<Prefecture, number>;
    declare hasPrefecture: BelongsToManyHasAssociationMixin<Prefecture, number>;
    declare hasPrefectures: BelongsToManyHasAssociationsMixin<Prefecture, number>;
    declare addPrefecture: BelongsToManyAddAssociationMixin<Prefecture, number>;
    declare addPrefectures: BelongsToManyAddAssociationsMixin<Prefecture, number>;
    declare removePrefecture: BelongsToManyRemoveAssociationMixin<Prefecture, number>;
    declare removePrefectures: BelongsToManyRemoveAssociationsMixin<Prefecture, number>;
    declare createPrefecture: BelongsToManyCreateAssociationMixin<Prefecture>;
}

Region.init(
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
        modelName: 'Region',
        tableName: 'regions',
    },
)