import { ok } from '../helpers/http-helper';
import { HttpRequest, HttpResponse, IController } from '../protocols';

export class HealthController implements IController {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok({ message: 'OK' });
  }
}
