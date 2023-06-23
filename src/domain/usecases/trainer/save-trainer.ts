import { Either } from '@src/domain/shared/utils/either';

export interface ISaveTrainer {
  execute: (trainer: ISaveTrainer.Params) => ISaveTrainer.Result;
}

export namespace ISaveTrainer {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };
  export type Result = Promise<Either<Error, void>>;
}
