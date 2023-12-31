import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { mongooseMiddlewareRepository } from 'src/Infrastucture/Database/Repositers/moongoose.middlewire';
dotenv.config();
const SECRECT_KEY = process.env.SECRET_KEY;
@Injectable()
export class HrVerifyMiddleware implements NestMiddleware {
  private readonly _MiddlewareRepository: mongooseMiddlewareRepository;
  constructor(middlewareRepository: mongooseMiddlewareRepository) {
    this._MiddlewareRepository = middlewareRepository;
  }
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['token'];
    new Promise((resolve) => {
      jwt.verify(token, SECRECT_KEY, (err, decoded) => {
        if (err) {
          res.json({ success: false, message: 'Authentication Failed' });
        } else {
          resolve(decoded);
          const authorized = this._MiddlewareRepository.isHr(decoded.userId);
          if (authorized) {
            next();
          } else {
            res.json({ success: false, message: 'Authorization Failed' });
          }
        }
      });
    });
  }
}
