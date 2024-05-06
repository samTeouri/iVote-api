import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
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

    declare getCommune: BelongsToManyGetAssociationsMixin<Commune>;
    declare setCommunes: BelongsToManySetAssociationsMixin<Commune, number>;
    declare hasCommune: BelongsToManyHasAssociationMixin<Commune, number>;
    declare hasCommunes: BelongsToManyHasAssociationsMixin<Commune, number>;
    declare addCommune: BelongsToManyAddAssociationMixin<Commune, number>;
    declare addCommunes: BelongsToManyAddAssociationsMixin<Commune, number>;
    declare removeCommune: BelongsToManyRemoveAssociationMixin<Commune, number>;
    declare removeCommunes: BelongsToManyRemoveAssociationsMixin<Commune, number>;
    declare createCommune: BelongsToManyCreateAssociationMixin<Commune>;
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