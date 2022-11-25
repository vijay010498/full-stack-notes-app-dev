import  type { Request, Response } from 'express';
import * as uuid from 'uuid';

class AuthService {
  static signUp(req: Request, res: Response) {
    const { userName, password } = req.body;
    const userId = uuid.v4();
    console.log('userId: ' + userId);
  }
}

export {
  AuthService
};
