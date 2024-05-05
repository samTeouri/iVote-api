"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var verifyToken = function (req, res, next) {
    // Récupération du token dans le header de la requête
    var token = req.headers["x-access-token"];
    // S'il n'existe pas alors on retourne une erreur signifiant qu'un token est requis pour l'authentification
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    // On vérifie si le token envoyé est le bon en cas d'erreur on retourne une réponse la contenant.
    try {
        jwt.verify(token, process.env.TOKEN_KEY);
    }
    catch (error) {
        return res.status(401).send("Error: " + error);
    }
    // La vérification du token a réussi donc on continue
    return next();
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=auth.js.map