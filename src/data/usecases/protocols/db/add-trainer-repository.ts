import { Either } from '@src/domain/shared/utils/either';
import { Trainer } from '@src/domain/typeorm/entities';
import { IAddTrainerModel } from '@src/domain/usecases/trainer';

export interface IAddTrainerRepository {
  perform: (trainer: IAddTrainerRepository.Params) => IAddTrainerRepository.Result;
}

export namespace IAddTrainerRepository {
  export type Params = IAddTrainerModel

  export type Result = Promise<Either<{}, Trainer>>
}
