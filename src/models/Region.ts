import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Prefecture } from "./Prefecture";

export class Region extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getPrefecture: HasManyGetAssociationsMixin<Prefecture>;
    declare setPrefectures: HasManySetAssociationsMixin<Prefecture, number>;
    declare hasPrefecture: HasManyHasAssociationMixin<Prefecture, number>;
    declare hasPrefectures: HasManyHasAssociationsMixin<Prefecture, number>;
    declare addPrefecture: HasManyAddAssociationMixin<Prefecture, number>;
    declare addPrefectures: HasManyAddAssociationsMixin<Prefecture, number>;
    declare removePrefecture: HasManyRemoveAssociationMixin<Prefecture, number>;
    declare removePrefectures: HasManyRemoveAssociationsMixin<Prefecture, number>;
    declare createPrefecture: HasManyCreateAssociationMixin<Prefecture>;
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