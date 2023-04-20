import { TrainerModel } from '@src/domain/models/trainer/trainer';

export interface ISaveTrainer {
  execute: (trainer: ISaveTrainer.Params) => ISaveTrainer.Result;
}

export namespace ISaveTrainer {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };
  export type Result = Promise<void>;
}
