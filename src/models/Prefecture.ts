import { HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Region } from "./Region";
import { Commune } from "./Commune";

export class Prefecture extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getRegion: HasOneGetAssociationMixin<Region>;
    declare setRegion: HasOneSetAssociationMixin<Region, number>;
    declare createRegion: HasOneCreateAssociationMixin<Region>;

    declare getCommune: HasManyGetAssociationsMixin<Commune>;
    declare setCommunes: HasManySetAssociationsMixin<Commune, number>;
    declare hasCommune: HasManyHasAssociationMixin<Commune, number>;
    declare hasCommunes: HasManyHasAssociationsMixin<Commune, number>;
    declare addCommune: HasManyAddAssociationMixin<Commune, number>;
    declare addCommunes: HasManyAddAssociationsMixin<Commune, number>;
    declare removeCommune: HasManyRemoveAssociationMixin<Commune, number>;
    declare removeCommunes: HasManyRemoveAssociationsMixin<Commune, number>;
    declare createCommune: HasManyCreateAssociationMixin<Commune>;
}

Prefecture.init(
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
        modelName: 'Prefecture',
        tableName: 'prefectures',
    },
)