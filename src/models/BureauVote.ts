import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { CarteElecteur } from "./CarteElecteur";
import { Commune } from "./Commune";
import { Citoyen } from "./Citoyen";

export class BureauVote extends Model {
    declare id: BigInteger;
    declare nom: string;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getCommune: HasOneGetAssociationMixin<Commune>;
    declare setCommune: HasOneSetAssociationMixin<Commune, number>;
    declare createCommune: HasOneCreateAssociationMixin<Commune>;

    declare getCitoyen: BelongsToManyGetAssociationsMixin<Citoyen>;
    declare setCitoyens: BelongsToManySetAssociationsMixin<Citoyen, number>;
    declare hasCitoyen: BelongsToManyHasAssociationMixin<Citoyen, number>;
    declare hasCitoyens: BelongsToManyHasAssociationsMixin<Citoyen, number>;
    declare addCitoyen: BelongsToManyAddAssociationMixin<Citoyen, number>;
    declare addCitoyens: BelongsToManyAddAssociationsMixin<Citoyen, number>;
    declare removeCitoyen: BelongsToManyRemoveAssociationMixin<Citoyen, number>;
    declare removeCitoyens: BelongsToManyRemoveAssociationsMixin<Citoyen, number>;
    declare createCitoyen: BelongsToManyCreateAssociationMixin<Citoyen>;
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