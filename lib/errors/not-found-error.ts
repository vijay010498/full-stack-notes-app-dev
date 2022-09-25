import { CustomError } from './custom-error';
import { httpCodes } from '../constants/http-status-codes';

export class NotFoundError extends CustomError {
  statusCode = httpCodes.notFound;

  constructor() {
    super('Not Found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [
      {
        message: 'Not Found'
      }
    ];
  }
}
