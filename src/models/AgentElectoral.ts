import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyHasAssociationsMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManySetAssociationsMixin, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { sequelize } from "../config/database";
import { User } from "./User";

export class AgentEletoral extends Model {
    declare numeroAgent: string;

    declare getUser: HasOneGetAssociationMixin<User>;
    declare setUser: HasOneSetAssociationMixin<User, number>;
    declare createUser: HasOneCreateAssociationMixin<User>;

    declare getDemandeCartes: BelongsToManyGetAssociationsMixin<DemandeCarte>;
    declare setDemandeCartes: BelongsToManySetAssociationsMixin<DemandeCarte, number>;
    declare hasDemandeCarte: BelongsToManyHasAssociationMixin<DemandeCarte, number>;
    declare hasDemandeCartes: BelongsToManyHasAssociationsMixin<DemandeCarte, number>;
    declare addDemandeCarte: BelongsToManyAddAssociationMixin<DemandeCarte, number>;
    declare addDemandeCartes: BelongsToManyAddAssociationsMixin<DemandeCarte, number>;
    declare removeDemandeCarte: BelongsToManyRemoveAssociationMixin<DemandeCarte, number>;
    declare removeDemandeCartes: BelongsToManyRemoveAssociationsMixin<DemandeCarte, number>;
    declare createDemandeCarte: BelongsToManyCreateAssociationMixin<DemandeCarte>;
}

AgentEletoral.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        numeroAgent: {
            type: DataTypes.STRING,
            unique: true,
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
        modelName: 'AgentElectoral',
        tableName: 'agents_electoraux',
    },
)