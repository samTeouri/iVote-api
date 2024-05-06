import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { CarteElecteur } from "./CarteElecteur";
import { Commune } from "./Commune";

export class BureauVote extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getCommune: HasOneGetAssociationMixin<Commune>;
    declare setCommune: HasOneSetAssociationMixin<Commune, number>;
    declare createCommune: HasOneCreateAssociationMixin<Commune>;

    declare getCarteElecteurs: BelongsToManyGetAssociationsMixin<CarteElecteur>;
    declare setCarteElecteurs: BelongsToManySetAssociationsMixin<CarteElecteur, number>;
    declare hasCarteElecteur: BelongsToManyHasAssociationMixin<CarteElecteur, number>;
    declare hasCarteElecteurs: BelongsToManyHasAssociationsMixin<CarteElecteur, number>;
    declare addCarteElecteur: BelongsToManyAddAssociationMixin<CarteElecteur, number>;
    declare addCarteElecteurs: BelongsToManyAddAssociationsMixin<CarteElecteur, number>;
    declare removeCarteElecteur: BelongsToManyRemoveAssociationMixin<CarteElecteur, number>;
    declare removeCarteElecteurs: BelongsToManyRemoveAssociationsMixin<CarteElecteur, number>;
    declare createCarteElecteur: BelongsToManyCreateAssociationMixin<CarteElecteur>;
}

BureauVote.init(
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
        modelName: 'BureauVote',
        tableName: 'bureaux_vote',
    },
)