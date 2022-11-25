import { HealthService } from '../services/health';
import { AuthService } from '../services/auth';
import type { Request, Response } from 'express';

class NotesAppController {
  static health(req: Request, res: Response) {
    HealthService.exec(res);
  }

  static signUp(req: Request, res: Response) {
    AuthService.signUp(req, res);
  }
}

export { NotesAppController };
