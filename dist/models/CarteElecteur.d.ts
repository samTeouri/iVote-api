import { HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { User } from "./User";
import { BureauVote } from "./BureauVote";
export declare class CarteElecteur extends Model {
    id: BigInteger;
    numero: string;
    createdAt: Date;
    upadtedAt: Date;
    getUser: HasOneGetAssociationMixin<User>;
    setUser: HasOneSetAssociationMixin<User, number>;
    createUser: HasOneCreateAssociationMixin<User>;
    getBureauVote: HasOneGetAssociationMixin<BureauVote>;
    setBureauVote: HasOneSetAssociationMixin<BureauVote, number>;
    createBureauVote: HasOneCreateAssociationMixin<BureauVote>;
    getCarteElecteur: HasOneGetAssociationMixin<CarteElecteur>;
    setCarteElecteur: HasOneSetAssociationMixin<CarteElecteur, number>;
    createCarteElecteur: HasOneCreateAssociationMixin<CarteElecteur>;
}
