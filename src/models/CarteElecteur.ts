import { DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { Citoyen } from "./Citoyen";
import { sequelize } from "../config/database";
import { AgentElectoral } from "./AgentElectoral";

export class CarteElecteur extends Model {
    declare id: BigInteger;
    declare numero: string;
    declare estActive: boolean;
    declare createdAt: Date;
    declare upadtedAt: Date;

    declare getCitoyen: HasOneGetAssociationMixin<Citoyen>;
    declare setCitoyen: HasOneSetAssociationMixin<Citoyen, number>;
    declare createCitoyen: HasOneCreateAssociationMixin<Citoyen>;

    declare getAgentElectoral: HasOneGetAssociationMixin<AgentElectoral>;
    declare setAgentElectoral: HasOneSetAssociationMixin<AgentElectoral, number>;
    declare createAgentElectoral: HasOneCreateAssociationMixin<AgentElectoral>;

    // Function for creating electoral card number
    async createNumber(): Promise<string|null> {
        let i = 1;
        let numero: string;
        await this.getCitoyen()
            .then(async (citoyen) => {
                while (true) {
                    numero = citoyen.nom.slice(0, 3) + citoyen.prenom[0] + new Date().getFullYear() + i.toString();
                    try {
                        const citoyen = await Citoyen.findOne({ where: { numero: numero } });
                        if (citoyen) {
                            i++;
                            continue;
                        }
                        return numero;
                    } catch (error) {
                        throw error;
                    }
                }
            })
            .catch((reason: any) => {
                console.error(`Error while getting citizen instance : ${reason}`);
                throw reason;
            });
        return null;
    }
}

CarteElecteur.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        numero: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        },
        estActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        modelName: 'CarteElecteur',
        tableName: 'cartes_electeurs',
    },
)