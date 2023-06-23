import { TrainerModel } from '@src/domain/models/trainer/trainer';

export interface ILoadTrainerByEmailRepository {
  loadByEmail: (trainer: ILoadTrainerByEmailRepository.Params) => Promise<TrainerModel | null>;
}

export namespace ILoadTrainerByEmailRepository {
  export type Params = {
    email: string;
  }
}
