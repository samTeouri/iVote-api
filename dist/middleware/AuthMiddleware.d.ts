import { NextFunction, Request, Response } from 'express';
export declare const authVerifyToken: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
