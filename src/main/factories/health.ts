import { HealthController } from '@src/presentation/controllers/health.controller';
import { IController } from '@src/presentation/protocols';

export const makeHealthController = (): IController => {
  return new HealthController();
};
