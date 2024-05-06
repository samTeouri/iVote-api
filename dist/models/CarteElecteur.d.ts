import { HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Model } from "sequelize";
import { User } from "./User";
export declare class CarteElecteur extends Model {
    id: BigInteger;
    numero: string;
    estActive: boolean;
    createdAt: Date;
    upadtedAt: Date;
    getUser: HasOneGetAssociationMixin<User>;
    setUser: HasOneSetAssociationMixin<User, number>;
    createUser: HasOneCreateAssociationMixin<User>;
    getCarteElecteur: HasOneGetAssociationMixin<CarteElecteur>;
    setCarteElecteur: HasOneSetAssociationMixin<CarteElecteur, number>;
    createCarteElecteur: HasOneCreateAssociationMixin<CarteElecteur>;
}
