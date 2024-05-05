import { User } from "../models/User";
export declare class AuthService {
    getUserByIdentifier: (identifier: string | number) => Promise<User | null>;
    checkPassword: (user: User, password: string) => Promise<boolean>;
}
