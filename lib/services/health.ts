import type { Response } from 'express';
import { name } from '../../package.json';
import { httpCodes } from '../constants/http-status-codes';


class HealthService {
  static exec(res: Response) {
    return res.status(httpCodes.ok).json({
      name,
      status: 'Ready',
    });
  }
}

export {
  HealthService
};
