import { HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { User } from "./User";
import { CarteElecteur } from "./CarteElecteur";
import { AgentElectoral } from "./AgentElectoral";
export declare class Citoyen extends Model {
    id: BigInteger;
    nom: string;
    prenom: string;
    cni: string;
    photo: string;
    nom_pere: string;
    nom_mere: string;
    getUser: HasOneGetAssociationMixin<User>;
    setUser: HasOneSetAssociationMixin<User, number>;
    createUser: HasOneCreateAssociationMixin<User>;
    getAgentElectoral: HasOneGetAssociationMixin<AgentElectoral>;
    setAgentElectoral: HasOneSetAssociationMixin<AgentElectoral, number>;
    createAgentElectoral: HasOneCreateAssociationMixin<AgentElectoral>;
    getCarteElecteur: HasOneGetAssociationMixin<CarteElecteur>;
    setCarteElecteur: HasOneSetAssociationMixin<CarteElecteur, number>;
    createCarteElecteur: HasOneCreateAssociationMixin<CarteElecteur>;
}
