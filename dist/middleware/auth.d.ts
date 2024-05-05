import { NextFunction, Request, Response } from 'express';
export declare const verifyToken: (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
