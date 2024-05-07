import { HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { Citoyen } from "./Citoyen";
import { AgentElectoral } from "./AgentElectoral";
export declare class CarteElecteur extends Model {
    id: BigInteger;
    numero: string;
    estActive: boolean;
    createdAt: Date;
    upadtedAt: Date;
    getCitoyen: HasOneGetAssociationMixin<Citoyen>;
    setCitoyen: HasOneSetAssociationMixin<Citoyen, number>;
    createCitoyen: HasOneCreateAssociationMixin<Citoyen>;
    getAgentElectoral: HasOneGetAssociationMixin<AgentElectoral>;
    setAgentElectoral: HasOneSetAssociationMixin<AgentElectoral, number>;
    createAgentElectoral: HasOneCreateAssociationMixin<AgentElectoral>;
    createNumber(): Promise<string | null>;
}
