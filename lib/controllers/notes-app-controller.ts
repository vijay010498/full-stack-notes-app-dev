import { HealthService } from '../services/health';
import type { Request, Response } from 'express';

class NotesAppController {
  static health(req: Request, res: Response) {
    HealthService.exec(res);
  }
}

export { NotesAppController };
