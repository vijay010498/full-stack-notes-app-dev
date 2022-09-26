import type { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors';
import { httpCodes } from '../constants/http-status-codes';
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Error-handlder-called');
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors()
    });
  }
  console.error('ggggg', err);
  res.status(httpCodes.badRequest).send({
    errors: [
      {
        message: 'something went wrong'
      }
    ]
  });
};
