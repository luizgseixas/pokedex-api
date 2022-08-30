import { Either } from '@src/domain/shared/utils/either';
import { Trainer } from '@src/domain/typeorm/entities';

export interface IAddTrainerModel {
  name: string;
  email: string;
  password: string;
}

export interface IAddTrainer {
  execute: (trainer: IAddTrainer.Params) => IAddTrainer.Result;
}

export namespace IAddTrainer {
  export type Params = IAddTrainerModel

  export type Result = Promise<Either<{}, Trainer>>
}
